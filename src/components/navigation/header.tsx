"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";
import Image from "next/image";
import logo from "@/public/precision_paint_pros_logo.png";

export function SiteHeader() {
  const { isLoggedIn, userRole } = useAuth();

  return (
    <header className="bg-white py-2.5 shadow-md slide-in-bottom">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Precision Paint Pros Logo"
            width={100}
            height={100}
            style={{borderRadius: '50%'}}
          />
          <span className="text-2xl font-bold text-primary sr-only">Precision Paint Pros</span>
        </Link>
        <nav className="flex items-center space-x-0.5">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/blog" className="hover:text-accent transition-colors">
            Painting Blogs
          </Link>
          {isLoggedIn ? (
            userRole === "client" ? (
              <Link href="/client" className="hover:text-accent transition-colors">
                Client Portal
              </Link>
            ) : (
              <Link href="/employee" className="hover:text-accent transition-colors">
                Employee Portal
              </Link>
            )
          ) : (
            <>
              <Link href="/client" className="hover:text-accent transition-colors">
                Client Dashboard
              </Link>
              <Link href="/employee" className="hover:text-accent transition-colors">
                Employee Dashboard
              </Link>
            </>
          )}
          <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors">Contact Us</Button>
        </nav>
      </div>
    </header>
  );
}
