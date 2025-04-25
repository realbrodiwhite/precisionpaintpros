"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";
import Image from "next/image";
import React from "react";

// import { GeistSans } from 'geist/font';

import logo from "@/assets/PrecisionPaintProsLogo.png"; // Ensure this path is correct


export function Header() {
  const { isLoggedIn, userRole } = useAuth();

  return (
    <>
      <header className="bg-white py-1 shadow-md slide-in-bottom">
        <div className="container mx-auto flex items-center justify-between px-4" style={{gap: 'calc(4px/16)'}}>
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Precision Paint Pros Logo"
              width={80}
              height={28}
            />
            <span className="text-xl font-bold text-primary sr-only">Precision Paint Pros</span>
          </Link>
          <nav className="flex items-center space-x-2">
            <Link href="/painting-tips" className="hover:text-primary transition-colors">
              Painting Tips
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
            {isLoggedIn ? (
              userRole === "client" ? (
                <Link href="/client" className="hover:text-primary transition-colors">
                  Client Portal
                </Link>
              ) : (
                <Link href="/employee" className="hover:text-primary transition-colors">
                  Employee Portal
                </Link>
              )
            ) : (
              <Link href="/client" className="hover:text-primary transition-colors">
                Dashboard
              </Link>
            )}
            <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">Request an Estimate</Button>
          </nav>
        </div>
      </header>
    </>
  );
}


