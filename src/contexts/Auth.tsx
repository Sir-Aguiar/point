"use client";
import { IAuthToken } from "@/@types/User";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

interface IAuthContext {
  isUserAuthenticated: boolean;
  authHeader: string | undefined;
  authState: IAuthToken | undefined;
  logIn: ({ token }: { token: string }) => boolean;
  logOut: () => void;
}

const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [authHeader, setAuthHeader] = useState<string>();
  const [authState, setAuthState] = useState<IAuthToken>();

  const logIn = ({ token }: { token: string }) => {
    const Payload = jwtDecode(token) as IAuthToken | undefined;

    if (!Payload) {
      return false;
    }

    localStorage.setItem("token", token);
    setAuthHeader(token);
    setAuthState(Payload);
    setIsUserAuthenticated(true);
    return true;
  };

  const logOut = () => {
    localStorage.removeItem("token");
    setIsUserAuthenticated(false);
    setAuthHeader(undefined);
    setAuthState(undefined);
  };

  useEffect(() => {
    const JWT_TOKEN = localStorage.getItem("token");

    if (!JWT_TOKEN) {
      return logOut();
    }

    if (!logIn({ token: JWT_TOKEN })) {
      return logOut();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authHeader, authState, isUserAuthenticated, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuthContext deve ser chamado dentro de AuthProvider");

  return context;
};

export { AuthProvider, useAuthContext };
