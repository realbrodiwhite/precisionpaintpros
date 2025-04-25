"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";
import Image from "next/image";
import React from "react";
import logo from "@/assets/PrecisionPaintProsLogo.png"; // Ensure this path is correct


export function Header() {
  const { isLoggedIn, userRole } = useAuth();

  return (
    <>
      <header className="bg-white py-1 shadow-md slide-in-bottom">
        <div className="container mx-auto flex items-center justify-between px-1" style={{gap: 'calc(4px/4)'}}>
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Precision Paint Pros Logo"
              width={216}
              height={75}
            />
            <span className="text-xl font-bold text-primary sr-only">Precision Paint Pros</span>
          </Link>
          <nav className="flex items-center space-x-2">
            <Link href="/blog/painting-tips" className="hover:text-accent transition-colors">
              Painting Tips
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact
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
              <Link href="/client" className="hover:text-accent transition-colors">
                Dashboard
              </Link>
            )}
            <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors">Request an Estimate</Button>
          </nav>
        </div>
      </header>
    </>
  );
}


