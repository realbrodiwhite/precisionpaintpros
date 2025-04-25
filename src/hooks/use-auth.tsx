"use client";

import { useState, useEffect, createContext, useContext } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  userRole: "client" | "employee" | null;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  userRole: null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<"client" | "employee" | null>(null);

  useEffect(() => {
    // Simulate checking for a token or authentication state
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
      // Simulate getting the user role from the token or user data
      const role = localStorage.getItem("userRole");
      if (role === "client" || role === "employee") {
        setUserRole(role);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
