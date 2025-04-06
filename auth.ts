import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials";
import prisma from "./lib/prisma";
// import bcrypt from 'bcrypt';
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
        Credentials({
            credentials: {
                email: {
                    label: 'email',
                    type: 'text',
                    placeholder: 'Enter your email'
                },
                password: {
                    label: 'password',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
            },
            authorize: async (credentials, req) => {
                const { email, password } = credentials;
                const SALT_ROUNDS = 5;

                if (!(email && password)) throw new Error('Provide email and password');

                const url = new URL(req?.url); // It used to be req?.query?.mode in v4
                const mode = url.searchParams.get('mode'); // result: 'signin' || 'signup'

                if (mode === 'signup') { 
                    // Logic for when the user is signingup
                    const newUser = await prisma.user.create({
                        data: {
                            email,
                            password
                        }
                    })
                    console.log('new user: ', newUser);

                    return null;
                } else {
                    // Create a hash for password 
                    // Create a user account and store hash in the user schema

                    //const encryptedPassword = bcrypt.hash(password, SALT_ROUNDS);
                    //console.log('encryptedPassword: ', encryptedPassword);
                    console.log('user: ', email);
                }
            }
        }),
    ],
    secret: process.env.AUTH_SECRET,
      callbacks: {
        async jwt({ token, user }) {
          if (user) {
            token.id = user.id;
            token.email = user.email;
          }
          return token;
        },
        async session({ session, token }) {
          session.user.id = token.id as string;
          return session;
        }
      },
    pages: {
        signIn: '/login',
        newUser: '/register'
    },
});
