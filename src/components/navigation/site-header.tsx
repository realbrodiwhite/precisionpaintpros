"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";

export function SiteHeader() {
  const { isLoggedIn, userRole } = useAuth();

  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Precision Paint Pros
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="/blog" className="hover:text-blue-500">
            Painting Blogs
          </Link>
          {isLoggedIn ? (
            userRole === "client" ? (
              <Link href="/client" className="hover:text-blue-500">
                Client Portal
              </Link>
            ) : (
              <Link href="/employee" className="hover:text-blue-500">
                Employee Portal
              </Link>
            )
          ) : (
            <>
              <Link href="/client" className="hover:text-blue-500">
                Client Dashboard
              </Link>
              <Link href="/employee" className="hover:text-blue-500">
                Employee Dashboard
              </Link>
            </>
          )}
          <Button variant="outline">Contact Us</Button>
        </nav>
      </div>
    </header>
  );
}
