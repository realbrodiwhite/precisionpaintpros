
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";
import Image from "next/image";
import React from "react";

import logo from "@/assets/PrecisionPaintProsLogo.png"; // Ensure this path is correct

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function Header() {
  const { isLoggedIn, userRole } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/blog/painting-tips", label: "Painting Tips" },
  ];

  const serviceLinks = [
     { href: "/services", label: "All Services" },
     { href: "/services/interior-painting", label: "Interior Painting" },
     { href: "/services/exterior-painting", label: "Exterior Painting" },
     { href: "/services/commercial-painting", label: "Commercial Painting" },
     { href: "/services/residential-painting", label: "Residential Painting" },
     { href: "/services/color-consultation", label: "Color Consultation" },
  ];

  const moreLinks = [
     { href: "/faq", label: "FAQ" },
     { href: "/portfolio", label: "Portfolio" },
     { href: "/careers", label: "Careers" },
  ]

  return (
    <>
      <div className="announcement-bar text-white text-center py-2 overflow-hidden whitespace-nowrap text-sm">
        <span className="animate-marquee inline-block font-bold"> {/* Added font-bold */}
          Summer Sale: 20% Off All Exterior Painting Services - Book Now!&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Get a Free Estimate Today!&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Serving Monte Vista & Surrounding Areas
        </span>
      </div>
      <header className={cn("bg-white py-3 shadow-md sticky top-0 z-50")}>
        <div className="container mx-auto flex items-center justify-between px-4" >
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative w-[110px] h-[37px] md:w-[143px] md:h-[48px] lg:w-[176px] lg:h-[59px]"> {/* Responsive wrapper */}
              <Image
                src={logo}
                alt="Precision Paint Pros Logo"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
            <span className="sr-only">Precision Paint Pros</span> {/* Keep for SEO */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-grow">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-black hover:text-primary transition-colors font-bold px-1 py-2 text-sm"
                >
                  {link.label}
                </Link>
              ))}
              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="group flex items-center text-black hover:text-primary transition-colors font-bold px-1 py-2 text-sm outline-none">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform transform group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {serviceLinks.map((link) => (
                     <DropdownMenuItem key={link.href} asChild>
                       <Link href={link.href} className="w-full text-black hover:text-primary cursor-pointer">
                         {link.label}
                       </Link>
                     </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
               {/* More Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="group flex items-center text-black hover:text-primary transition-colors font-bold px-1 py-2 text-sm outline-none">
                  More
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform transform group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                   {moreLinks.map((link) => (
                     <DropdownMenuItem key={link.href} asChild>
                       <Link href={link.href} className="w-full text-black hover:text-primary cursor-pointer">
                         {link.label}
                       </Link>
                     </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>

          {/* Action Buttons & User Avatar */}
          <div className="hidden md:flex items-center space-x-4 shrink-0">
            <Button variant="default" className="font-bold hover:bg-primary/90 transition-colors text-white text-sm px-5 py-2">
              Request Estimate
            </Button>
             {isLoggedIn ? (
               <Link href={userRole === "client" ? "/client" : "/employee"} className="header-menu-link">
                 <Avatar className="h-[52px] w-[52px]"> {/* Adjusted size */}
                   <AvatarImage src="https://picsum.photos/id/237/80/80" />
                   <AvatarFallback>{userRole === 'client' ? 'CL' : 'EM'}</AvatarFallback>
                 </Avatar>
               </Link>
             ) : (
               <Link href="/dashboard" className="header-menu-link">
                 <Avatar className="h-[52px] w-[52px]"> {/* Adjusted size */}
                   <AvatarImage src="https://picsum.photos/id/433/80/80" />
                   <AvatarFallback>AC</AvatarFallback>
                 </Avatar>
               </Link>
             )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button onClick={toggleMobileMenu} variant="ghost" size="icon">
              {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 z-40">
            <nav className="container mx-auto px-4 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-black hover:text-primary transition-colors font-bold py-2"
                  onClick={toggleMobileMenu} // Close menu on click
                >
                  {link.label}
                </Link>
              ))}
              {/* Mobile Services Accordion/Dropdown */}
               <DropdownMenu>
                <DropdownMenuTrigger className="group flex items-center justify-between w-full text-black hover:text-primary transition-colors font-bold py-2 text-left">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform transform group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  {serviceLinks.map((link) => (
                     <DropdownMenuItem key={link.href} asChild>
                       <Link href={link.href} className="w-full text-black hover:text-primary cursor-pointer" onClick={toggleMobileMenu}>
                         {link.label}
                       </Link>
                     </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
               {/* Mobile More Accordion/Dropdown */}
               <DropdownMenu>
                <DropdownMenuTrigger className="group flex items-center justify-between w-full text-black hover:text-primary transition-colors font-bold py-2 text-left">
                  More
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform transform group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                   {moreLinks.map((link) => (
                     <DropdownMenuItem key={link.href} asChild>
                       <Link href={link.href} className="w-full text-black hover:text-primary cursor-pointer" onClick={toggleMobileMenu}>
                         {link.label}
                       </Link>
                     </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="default" className="w-full font-bold mt-4" asChild>
                <Link href="/request-estimate" onClick={toggleMobileMenu}>Request Estimate</Link>
              </Button>

               <div className="pt-4 border-t border-gray-200 mt-4">
                 {isLoggedIn ? (
                   <Link href={userRole === "client" ? "/client" : "/employee"} className="flex items-center space-x-2 text-black hover:text-primary font-bold" onClick={toggleMobileMenu}>
                     <Avatar className="h-[52px] w-[52px]"> {/* Adjusted size */}
                       <AvatarImage src="https://picsum.photos/id/237/80/80" />
                       <AvatarFallback>{userRole === 'client' ? 'CL' : 'EM'}</AvatarFallback>
                     </Avatar>
                     <span>{userRole === "client" ? "Client Portal" : "Employee Portal"}</span>
                   </Link>
                 ) : (
                   <Link href="/dashboard" className="flex items-center space-x-2 text-black hover:text-primary font-bold" onClick={toggleMobileMenu}>
                      <Avatar className="h-[52px] w-[52px]"> {/* Adjusted size */}
                       <AvatarImage src="https://picsum.photos/id/433/80/80" />
                       <AvatarFallback>AC</AvatarFallback>
                     </Avatar>
                     <span>Dashboard</span>
                   </Link>
                 )}
               </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
