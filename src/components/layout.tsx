import type { PropsWithChildren } from "react";
import { Header } from "./header";
import { Footer } from "./Footer";

interface LayoutProps extends PropsWithChildren {
  isProtected?: boolean;
}

export function Layout({ children, isProtected = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
      {isProtected && (
        <Footer />
      )}
    </div>
  );
}