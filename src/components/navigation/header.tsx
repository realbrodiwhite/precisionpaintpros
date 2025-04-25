"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
              width={120}
              height={40}
            />
            <span className="text-xl font-bold text-primary sr-only">Precision Paint Pros</span>
          </Link>
          <nav className="flex items-center space-x-4">
             <DropdownMenu>
              <DropdownMenuTrigger className="hover:text-primary transition-colors font-bold">
                Services
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/services/interior-painting" className="w-full">Interior Painting</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/exterior-painting" className="w-full">Exterior Painting</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/commercial-painting" className="w-full">Commercial Painting</Link>
                </DropdownMenuItem>
                 <DropdownMenuItem>
                  <Link href="/services/residential-painting" className="w-full">Residential Painting</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/color-consultation" className="w-full">Color Consultation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services" className="w-full">All Services</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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




