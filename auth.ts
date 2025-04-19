// @ts-nocheck

import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials";
import prisma from "./lib/prisma";
import bcryptjs from 'bcryptjs';
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
        Credentials({
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                password: {
                    label: 'Password',
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
                            role: 'gardener'
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
            session.user.email = token.email;
            session.user.firstNames = token.firstNames;
            session.user.lastName = token.lastName;
            session.user.createdAt = token.createdAt;
            session.user.avatar = token.avatar;

            return session;
        },
        redirect({ url, baseUrl }) {
            return baseUrl + '/welocome';
      },
    pages: {
        signIn: '/login',
        newUser: '/register'
    },
      }
});
