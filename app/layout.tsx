import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/providers/theme-provider";
import { ConvexClientProvider } from "@/providers/ConvexClientProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trust Bank",
  description: "The bank you can trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider 
    appearance={{
      layout: {
        socialButtonsVariant: 'iconButton'
      },
      variables: {
        colorBackground: 'white',
        colorPrimary: '#8000FF',
        colorText: '#8000FF',
        colorInputBackground: '#CAB7DD',
        colorInputText: 'white',
            }
    }}
    >
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ConvexClientProvider>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <main>{children}</main>

            <Toaster />
          </ThemeProvider>
          </ConvexClientProvider>

      </body>
    </html>
    </ClerkProvider>
  );
}
