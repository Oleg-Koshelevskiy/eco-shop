import { Footer, Header } from "@/components";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import AuthProvider from "@/components/Provider";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const queryClient = new QueryClient();

export const metadata = {
  title: "Ecoshop",
  description: "Only fresh craft products directly from farmers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-gradient-to-r from-cyan-100 to-blue-100 box-border">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
