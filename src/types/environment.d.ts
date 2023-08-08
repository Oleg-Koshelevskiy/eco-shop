export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      URL: string;
      MONGODB_URI: string;
      GOOGLE_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      FACEBOOK_CLIENT_ID: string;
      FACEBOOK_CLIENT_SECRET: string;
      NEXTAUTH_URL: string;
      NEXTAUTH_URL_INTERNAL: string;
      NEXTAUTH_SECRET: string;
      ENV: "test" | "dev" | "prod";
    }
  }
}
