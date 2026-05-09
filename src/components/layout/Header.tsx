import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '@/features/auth/context/AuthContext'
import { Button } from '@/components/ui/button'
import { BookOpen, User, LogOut } from 'lucide-react'

export const Header = () => {
  const { user, logout } = useAuth()

  return (
    <header className="sticky top-0 z-50 glass-card border-b-0 rounded-none shadow-none">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="p-2 bg-primary rounded-xl group-hover:rotate-12 transition-transform duration-300">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <span className="font-display text-2xl font-black tracking-tighter text-foreground">TARİF<span className="text-primary">KİTAP</span></span>
        </Link>

        <nav className="flex items-center gap-8">
          <Link to="/recipes" className="font-medium text-muted-foreground hover:text-primary transition-colors">
            Keşfet
          </Link>
          {user ? (
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={logout} className="gap-2 rounded-xl text-muted-foreground">
                <LogOut className="h-4 w-4" />
                Çıkış
              </Button>
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary to-indigo-400 p-[2px]">
                <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className="font-medium text-muted-foreground hover:text-primary transition-colors">
                Giriş
              </Link>
              <Link to="/register">
                <Button className="rounded-xl px-6">Kayıt Ol</Button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
