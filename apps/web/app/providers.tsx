"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Toaster as ShadcnToaster,
} from "@workspace/ui/components/toaster";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import React from "react";
import { toast } from "sonner";

export const showToast = (type: "success" | "error", message: string) => {
  const icon =
    type === "success" ? (
      <CheckCircleIcon className="w-5 h-5 text-green-500" />
    ) : (
      <XCircleIcon className="w-5 h-5 text-red-500" />
    );

  toast[type](message, {
    icon,
  });
};

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ShadcnToaster />
    </QueryClientProvider>
  );
}
