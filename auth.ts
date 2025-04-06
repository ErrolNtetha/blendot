import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials";
import prisma from "./lib/prisma";
import bcryptjs from 'bcryptjs';
 
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
                const SALT_ROUNDS = 15;

                if (!(email && password)) throw new Error('Provide email and password');

                const url = new URL(req?.url);
                const mode = url.searchParams.get('mode');
                const firstNames = url.searchParams.get('firstNames');
                const lastName = url.searchParams.get('lastName');

                if (mode === 'signup') { 
                    const encryptedPassword = await bcryptjs.hash(password as string, SALT_ROUNDS);

                    // Logic for when the user is signingup
                    const newUser = await prisma.user.create({
                        data: {
                            firstNames,
                            lastName,
                            email,
                            password: encryptedPassword,
                        }
                    });

                    return newUser;
                } else {
                    // Decrypt the password
                    // Search the db for the user
                    // If user if found, return the user
                    return null
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
            token.firstNames = user.firstNames;
            token.lastName = user.lastName;
            token.createdAt = user.createdAt;
            token.avatar = user.avatar;
          }

          return token;
        },
        async session({ session, token }) {
            session.user.id = token.id as string;
            session.email = token.email;
            session.firstNames = token.firstNames;
            session.lastName = token.lastName;
            session.createdAt = token.createdAt;
            session.avatar = token.avatar;

            return session;
        }
      },
    pages: {
        signIn: '/login',
        newUser: '/register'
    },
});
