import { Footer, Header } from "@/components";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import CartContextProvider from "@/context/CartContextProvider";
import AuthProvider from "@/components/Provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

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
        <AuthProvider>
          <CartContextProvider>
            <Header />
            {children}
            <Footer />
          </CartContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
