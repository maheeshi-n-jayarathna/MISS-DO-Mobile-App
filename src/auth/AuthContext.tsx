// src/auth/AuthContext.tsx
import React, { createContext, useState, ReactNode } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

interface AuthContextProps {
  user: string | null
  signIn: (username: string) => void
  signOut: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  signIn: () => {},
  signOut: () => {}
})

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null)

  const signIn = async (username: string) => {
    setUser(username)
    await AsyncStorage.setItem("user", username)
  }

  const signOut = async () => {
    setUser(null)
    await AsyncStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children} 
    </AuthContext.Provider>
  )
}
