import { Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="glass-card mt-auto">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="font-display text-lg font-bold text-text">TarifKitap</span>
        </div>

        <div className="flex gap-6">
          <Link to="/about" className="text-text-secondary hover:text-primary transition-colors">
            Hakkında
          </Link>
          <Link to="/privacy" className="text-text-secondary hover:text-primary transition-colors">
            Gizlilik
          </Link>
          <Link to="/terms" className="text-text-secondary hover:text-primary transition-colors">
            Koşullar
          </Link>
        </div>

        <div className="text-text-secondary text-sm mt-4 md:mt-0">
          © {new Date().getFullYear()} TarifKitap. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  )
}

export default Footer