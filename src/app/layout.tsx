import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Shania Shamsun Esha | Aesthetic Medicine",
  description: "Expert-led, personalised aesthetic care. Redefined.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Disable React DevTools */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
                  supportsFiber: true,
                  inject: function() {},
                  onCommitFiberRoot: function() {},
                  onCommitFiberUnmount: function() {},
                };
              }
            `,
          }}
        />
        {/* Prevent Inspect & Right Click */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                document.addEventListener('contextmenu', function(e) {
                  e.preventDefault();
                });
                document.addEventListener('keydown', function(e) {
                  if (
                    e.key === 'F12' || 
                    (e.ctrlKey && e.shiftKey && e.key === 'I') || 
                    (e.ctrlKey && e.shiftKey && e.key === 'J') || 
                    (e.ctrlKey && e.key === 'U') ||
                    (e.metaKey && e.altKey && e.key === 'I') || 
                    (e.metaKey && e.altKey && e.key === 'J') || 
                    (e.metaKey && e.key === 'U')
                  ) {
                    e.preventDefault();
                  }
                });
              }
            `,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col font-sans selection:bg-surface-hover selection:text-foreground transition-colors duration-500 ease-in-out">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
