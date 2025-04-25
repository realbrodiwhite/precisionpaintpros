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

import {cn} from "@/lib/utils";
import { ChevronDown } from 'lucide-react';

import PrecisionPaintProsLogo from "@/assets/PrecisionPaintProsLogo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  const { isLoggedIn, userRole } = useAuth();

  return (
    <>
      <div className="bg-red-700 text-white text-center py-2 animate-marquee overflow-hidden whitespace-nowrap">
        Summer Sale: 20% Off All Exterior Painting Services - Book Now!
      </div>
      <header className={cn("bg-white py-3 shadow-md slide-in-bottom sticky top-0 z-50")}>
        <div className="container mx-auto flex items-center justify-between px-4" style={{gap: 'calc(4px/16)'}}>
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={PrecisionPaintProsLogo}
              alt="Precision Paint Pros Logo"
              width={128*0.66*1.3*0.66}
              height={43*0.66*1.3*0.66}
            />
            <span className="text-xl font-bold text-primary sr-only">Precision Paint Pros</span>
          </Link>
          <nav className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="group flex items-center hover:text-primary transition-colors font-bold text-black px-4 py-2 rounded-md header-menu-link">
                Services
                <ChevronDown className="ml-1 h-4 w-4 transition-transform transform group-hover:rotate-180" />
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
            <Link href="/about" className="hover:text-primary transition-colors font-bold text-black px-4 py-2 rounded-md header-menu-link">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors font-bold text-black px-4 py-2 rounded-md header-menu-link">
              Contact
            </Link>
            <Link href="/blog/painting-tips" className="hover:text-primary transition-colors font-bold text-black px-4 py-2 rounded-md header-menu-link">
              Painting Tips
            </Link>
          </nav>
           <div className="flex items-center space-x-4">
             <Button variant="default" className="font-bold hover:bg-secondary hover:text-secondary-foreground transition-colors text-white">Request an Estimate</Button>
             {isLoggedIn ? (
              userRole === "client" ? (
                <Link href="/client" className="header-menu-link">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
              ) : (
                <Link href="/employee" className="header-menu-link">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>EMP</AvatarFallback>
                  </Avatar>
                </Link>
              )
            ) : (
              <Link href="/client" className="header-menu-link">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
