// layout.tsx
import { PropsWithChildren } from "react";
import { Header } from "./header";
import { Footer } from "./Footer";
import { SignedIn } from "@clerk/clerk-react";
import { cn } from "@/lib/utils";

interface LayoutProps extends PropsWithChildren {
  isProtected?: boolean;
}

export function Layout({ children, isProtected = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={cn(
        "flex-1 container mx-auto px-4 py-8 transition-all duration-300",
        isProtected ? "md:pl-64" : ""
      )}>
        {children}
      </main>
      {isProtected && <Footer className={isProtected ? "md:ml-64" : ""} />}
    </div>
  );
}