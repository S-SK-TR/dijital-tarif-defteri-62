import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '@/features/auth/context/AuthContext'
import { Button } from '@/components/ui/button'
import { BookOpen, User, LogOut } from 'lucide-react'

export const Header = () => {
  const { user, logout } = useAuth()

  return (
    <header className="glass-card sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="font-display text-2xl font-bold text-text">TarifKitap</span>
        </Link>

        <nav className="flex items-center gap-4">
          {user ? (
            <>
              <Link to="/recipes" className="text-text hover:text-primary transition-colors">
                Tarifler
              </Link>
              <Button variant="ghost" onClick={logout} className="gap-2">
                <LogOut className="h-4 w-4" />
                Çıkış
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-text hover:text-primary transition-colors">
                Giriş
              </Link>
              <Link to="/register">
                <Button>Kayıt Ol</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header