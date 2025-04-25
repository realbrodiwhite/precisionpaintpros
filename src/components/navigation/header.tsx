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
              width={130}
              height={45}
            />
            <span className="text-xl font-bold text-primary sr-only">Precision Paint Pros</span>
          </Link>
          <nav className="flex items-center space-x-4">
             <Link href="/services" className="hover:text-primary transition-colors font-bold">
              Services
            </Link>
            <Link href="/painting-tips" className="hover:text-primary transition-colors font-bold">
              Painting Tips
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors font-bold">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors font-bold">
              Contact
            </Link>
            {isLoggedIn ? (
              userRole === "client" ? (
                <Link href="/client" className="hover:text-primary transition-colors font-bold">
                  Client Portal
                </Link>
              ) : (
                <Link href="/employee" className="hover:text-primary transition-colors font-bold">
                  Employee Portal
                </Link>
              )
            ) : (
              <Link href="/client" className="hover:text-primary transition-colors font-bold">
                Dashboard
              </Link>
            )}
            <Button variant="outline" className="font-bold hover:bg-primary hover:text-primary-foreground transition-colors">Request an Estimate</Button>
          </nav>
        </div>
      </header>
    </>
  );
}


