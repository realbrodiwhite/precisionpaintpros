"use client";

import { Button } from "@/components/ui/button";
import { config } from "@/config";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Breakpoint, useScreenSize } from "@/hooks/useScreenSize";

export function Header() {

  const { isLoggedIn, userRole } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = React.useState(false);
  const { navLinks, serviceLinks, moreLinks } = config.navigation
  const currentScreenSize = useScreenSize();
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  // Determine which links are currently hidden based on screen size and link's hideBelow property
  
  const hiddenLinks = navLinks.filter(link => {
    if (link.hideBelow === 'always') return false;
    if (link.hideBelow === 'sm' && (currentScreenSize === 'xs' || currentScreenSize === 'sm')) return true;
    if (link.hideBelow === 'md' && (currentScreenSize === 'xs' || currentScreenSize === 'sm' || currentScreenSize === 'md')) return true;
    if (link.hideBelow === 'lg' && (currentScreenSize === 'xs' || currentScreenSize === 'sm' || currentScreenSize === 'md' || currentScreenSize === 'lg')) return true;
    return false;
  });

  // Determine which links are always visible (not hidden by responsive classes)
  const alwaysVisibleLinks = navLinks.filter(link => link.hideBelow === 'always');

  // Combine always visible links and potentially other links visible at the current breakpoint
  // For this implementation, we'll show 'alwaysVisibleLinks' and put the rest in 'More' if hidden
  // The CSS classes handle the actual hiding, this logic is for the More dropdown
  const visibleLinks = navLinks.filter(link => !hiddenLinks.includes(link));

  return (
    <div> {/* Wrapping div for the component */}
      <div className="announcement-bar text-white text-center py-2 overflow-hidden whitespace-nowrap text-base">
        <span className="animate-marquee inline-block font-bold">
          Summer Sale: 20% Off All Exterior Painting Services - Book Now!&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Get a Free Estimate Today!&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Serving Monte Vista & Surrounding Areas
        </span>
      </div>
      <header className={cn("bg-white py-2 shadow-md sticky top-0 z-50")}>
        <div className="container mx-auto flex items-center justify-between px-6" style={{ gap: 'calc(4px / 16)' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            {/* Adjusted height by ~15% */}
            <div className="relative w-[110px] h-[31px] md:w-[143px] md:h-[41px] lg:w-[176px] lg:h-[50px]">
              <Image
                src={config.imagePaths.logo}
                alt="Precision Paint Pros Logo"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <span className="sr-only">Precision Paint Pros</span> {/* Keep for SEO */}
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-grow">
            <div className="flex items-center space-x-6">
              <DropdownMenu>
              {/* Services Dropdown First */}
                <DropdownMenuTrigger className="group flex items-center text-black hover:text-primary transition-colors font-bold px-1 py-2 text-sm outline-none">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform transform group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
 {serviceLinks.map((link) => (
 <DropdownMenuItem key={link.href} asChild={true}>
                      <Link href={link.href} className="w-full text-black hover:text-primary cursor-pointer">
                        {link.label}
                      </Link>
 </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Render links that are not hidden at the current breakpoint */}
              {/* These links will be hidden by CSS based on their hideBelow property */}
              {navLinks.map((link) => (
                // Apply responsive hidden classes based on hideBelow
                // Links with hideBelow 'always' will not have these classes for desktop view
                <React.Fragment key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-black hover:text-primary transition-colors font-bold px-1 py-2 text-sm whitespace-nowrap overflow-hidden text-overflow-ellipsis",
                      link.hideBelow === 'sm' && 'sm:hidden',
                      link.hideBelow === 'md' && 'md:hidden',
                      link.hideBelow === 'lg' && 'lg:hidden'
                    )}
                  >
                    {link.label}
                  </Link>
                </React.Fragment>
              ))}

 {hiddenLinks.length > 0 && (<DropdownMenu open={isMoreDropdownOpen} onOpenChange={setIsMoreDropdownOpen}> {/* More Dropdown Trigger & Content */}
                <DropdownMenuContent>
                  {/* Populate with hidden links */}
                  {hiddenLinks.map((link) => ( // Ensure hiddenLinks are correctly calculated and contain items
                    <DropdownMenuItem key={link.href} asChild>
                      <Link href={link.href} className="w-full text-black hover:text-primary cursor-pointer">
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
              {hiddenLinks.length > 0 && ( // Also wrap the trigger button
                <Button variant="ghost" onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)} className="px-1 py-2 text-sm font-bold hidden sm:flex md:flex lg:flex xl:hidden">
                  More <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isMoreDropdownOpen && 'rotate-180')} />
                </Button>
 )} {/* Closing the hiddenLinks condition for the button */}

            </div>
          </nav>

          {/* Action Buttons & User Avatar */}
          <div className="hidden md:flex items-center space-x-4 shrink-0">
            <Button variant="default" className="font-bold hover:bg-primary/90 transition-colors text-white text-sm px-5 py-2">
              Get Estimate
            </Button>
            {isLoggedIn ? (
              <Link href={userRole === "client" ? "/client" : "/employee"} className="header-menu-link">
                <Avatar className="h-[52px] w-[52px] scale-[.85]">
                  <AvatarImage src="https://picsum.photos/id/237/80/80" />
                  <AvatarFallback>{userRole === 'client' ? 'CL' : 'EM'}</AvatarFallback>
                </Avatar>
              </Link>
            ) : (
              <Link href="/dashboard" className="header-menu-link">
                <Avatar className="h-[52px] w-[52px] scale-[.85]">
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
      </header> {/* Closing header tag */}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 z-40">
            <nav className="container mx-auto px-4 flex flex-col space-y-3">
              <DropdownMenu>
                {/* Mobile Services Accordion/Dropdown First */}
                <DropdownMenuTrigger className="group flex items-center justify-between w-full text-black hover:text-primary transition-colors font-bold py-2 text-left">
                  Services
 <ChevronDown className="ml-1 h-4 w-4 transition-transform transform group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>{/* This is the trigger */}
                <DropdownMenuContent className="w-full">
 {serviceLinks.map((link) => (
 <DropdownMenuItem key={link.href} asChild={true}>
 <Link href={link.href} className="w-full text-black hover:text-primary cursor-pointer" onClick={toggleMobileMenu}>

                        {link.label}</Link></DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* All navLinks in Mobile Menu */}
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
              {/* If you need a distinct 'More' section in mobile, we can add it here */}
              {/* For this diff, we'll assume all main nav links are covered by the navLinks map above in mobile */}
              {/* If you still need the separate mobile 'More' dropdown from your original code, let me know */}

              <Button variant="default" className="w-full font-bold mt-4" asChild>
                <Link href="/request-estimate" onClick={toggleMobileMenu}>Get Estimate</Link>
              </Button>

              <div className="pt-4 border-t border-gray-200 mt-4">
                {isLoggedIn ? (
                  <Link href={userRole === "client" ? "/client" : "/employee"} className="flex items-center space-x-2 text-black hover:text-primary font-bold" onClick={toggleMobileMenu}>
                    <Avatar className="h-[52px] w-[52px] scale-[.85]">
                      <AvatarImage src="https://picsum.photos/id/237/80/80" />
                      <AvatarFallback>{userRole === 'client' ? 'CL' : 'EM'}</AvatarFallback>
                    </Avatar>
                    <span>{userRole === "client" ? "Client Portal" : "Employee Portal"}</span>
                  </Link>
                ) : (
                  <Link href="/dashboard" className="flex items-center space-x-2 text-black hover:text-primary font-bold" onClick={toggleMobileMenu}>
                    <Avatar className="h-[52px] w-[52px] scale-[.85]">
                      <AvatarImage src="https://picsum.photos/id/433/80/80" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <span>Dashboard</span>
                  </Link>
                )}
              </div>
            </nav>
          </div>
        )} {/* Closing mobile menu conditional div */}
    </div>
  );
}