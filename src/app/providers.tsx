"use client";
import AuthProvider from "@/components/Provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function Providers(props: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </AuthProvider>
  );
}
