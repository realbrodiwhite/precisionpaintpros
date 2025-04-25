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

import logo from "@/assets/PrecisionPaintProsLogo.png"; // Ensure this path is correct
import {cn} from "@/lib/utils";

export function Header() {
  const { isLoggedIn, userRole } = useAuth();

  return (
    <>
      <header className={cn("bg-secondary py-3 shadow-md slide-in-bottom sticky top-0 z-50")}>
        <div className="container mx-auto flex items-center justify-between px-4" style={{gap: 'calc(4px/16)'}}>
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Precision Paint Pros Logo"
              width={128*0.66*1.3}
              height={43*0.66*1.3}
            />
            <span className="text-xl font-bold text-primary sr-only">Precision Paint Pros</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="hover:text-primary transition-colors font-bold text-black">
                Services
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/services/interior-painting" className="w-full text-black hover:text-primary">Interior Painting</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/exterior-painting" className="w-full text-black hover:text-primary">Exterior Painting</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/commercial-painting" className="w-full text-black hover:text-primary">Commercial Painting</Link>
                </DropdownMenuItem>
                 <DropdownMenuItem>
                  <Link href="/services/residential-painting" className="w-full text-black hover:text-primary">Residential Painting</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/color-consultation" className="w-full text-black hover:text-primary">Color Consultation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services" className="w-full text-black hover:text-primary">All Services</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/about" className="hover:text-primary transition-colors font-bold text-black">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors font-bold text-black">
              Contact
            </Link>
            {isLoggedIn ? (
              userRole === "client" ? (
                <Link href="/client" className="hover:text-primary transition-colors font-bold text-black">
                  Client Portal
                </Link>
              ) : (
                <Link href="/employee" className="hover:text-primary transition-colors font-bold text-black">
                  Employee Portal
                </Link>
              )
            ) : (
              <Link href="/client" className="hover:text-primary transition-colors font-bold text-black">
                Dashboard
              </Link>
            )}
            <Button variant="default" className="font-bold hover:bg-secondary hover:text-secondary-foreground transition-colors text-white">Request an Estimate</Button>
          </nav>
        </div>
      </header>
    </>
  );
}

