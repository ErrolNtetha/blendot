import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials";
 
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

                const url = new URL(req?.url); // It used to be req?.query?.mode in v4
                const mode = url.searchParams.get('mode'); // result: 'signin' || 'signup'

                if (mode === 'signup') { 
                    // Logic for when the user is signup
                } else {
                    // Logic for when the user is logging in
                }

                const user = {
                    email: 'user@email.com',
                    password: '12345678'
                };

                if (user.email === email && user.password === password) {
                    console.log('access granted');
                    return user;
                } 

                console.log('incorrect email or password');
                return null;
            }
        }),
    ],
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: '/login',
        newUser: '/register'
    },
});
