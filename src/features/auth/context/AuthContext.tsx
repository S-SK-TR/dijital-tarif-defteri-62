import { createContext, useContext, useState, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

interface AuthContextType {
  user: any | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  register: (email: string, password: string, name: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<any | null>(null)
  const navigate = useNavigate()

  const login = async (email: string, password: string) => {
    // API call to login
    setUser({ email, name: 'Test User' })
    navigate('/')
  }

  const logout = () => {
    setUser(null)
    navigate('/login')
  }

  const register = async (email: string, password: string, name: string) => {
    // API call to register
    setUser({ email, name })
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}