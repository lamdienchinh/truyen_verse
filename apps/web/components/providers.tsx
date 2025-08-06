"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "@workspace/ui/components/error-boundary";
import { Toaster } from "@workspace/ui/components/sonner";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";
import * as React from "react";
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

const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        retry: (failureCount, error: any) => {
          if (error?.response?.status >= 400 && error?.response?.status < 500) {
            if (
              error?.response?.status === 408 ||
              error?.response?.status === 429
            ) {
              return failureCount < 2;
            }
            return false;
          }
          return failureCount < 3;
        },
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
      },
      mutations: {
        retry: 1,
      },
    },
  });
interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: Omit<ThemeProviderProps, "children">;
}

export function Providers({
  children,
  themeProps = {
    attribute: "class",
    defaultTheme: "system",
    enableSystem: true,
    disableTransitionOnChange: true,
    enableColorScheme: true,
  },
}: ProvidersProps) {
  const [queryClient] = React.useState(createQueryClient);

  return (
    <ErrorBoundary
      onError={(error, errorInfo) => {
        console.error("Global error:", error, errorInfo);
      }}
    >
      <QueryClientProvider client={queryClient}>
        <NextThemesProvider {...themeProps}>
          {children}
          <Toaster
            position="top-right"
            closeButton
            richColors
            expand={false}
            duration={4000}
          />
        </NextThemesProvider>
        {process.env.NODE_ENV === "development" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
