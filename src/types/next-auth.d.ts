import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      id: string;
      image: string;
    };
  }
  interface Profile {
    email: string;
    username: string;
    picture: string;
  }
}
