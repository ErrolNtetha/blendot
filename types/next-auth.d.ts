import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      firstNames?: string;
      lastName?: string;
      avatar?: string;
    } & DefaultSession['user'];
  }

  interface JWT {
    user: {
      id: string;
      email: string;
      firstNames?: string;
      lastName?: string;
      avatar?: string;
    } & DefaultSession['user'];
    }
}
