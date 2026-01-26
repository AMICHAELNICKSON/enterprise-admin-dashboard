import { createContext, useContext, useEffect, useState } from "react"
import { STORAGE_KEYS } from "../constants/storageKeys";

type AuthContextType = {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({children} : {children: React.ReactNode}) {
    const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem(STORAGE_KEYS.AUTH_KEY) === "true");

    useEffect(()=>{
        localStorage.setItem(STORAGE_KEYS.AUTH_KEY, String(isAuthenticated))
    },[isAuthenticated])
    
    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}> 
            {children}
        </AuthContext.Provider>
    )

}

export function useAuth() {
    const context = useContext(AuthContext);
    if(!context)
        throw new Error("useAuth must be within AuthProvider");
    return context
}