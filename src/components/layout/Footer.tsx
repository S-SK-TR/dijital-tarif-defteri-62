import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-border bg-white/50 dark:bg-slate-950/50 backdrop-blur-md">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-display text-xl font-bold text-foreground tracking-tight">TarifKitap</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Mutfaktaki yaratıcılığınızı serbest bırakın. En sevdiğiniz tarifleri kaydedin, organize edin ve paylaşın.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-display font-bold text-foreground">Hızlı Bağlantılar</h4>
            <div className="flex flex-col gap-2">
              <Link to="/recipes" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tarifler</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hakkında</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">İletişim</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-bold text-foreground">Yasal</h4>
            <div className="flex flex-col gap-2">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Gizlilik Politikası</Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kullanım Koşulları</Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-xs font-medium">
            © {new Date().getFullYear()} TarifKitap. <span className="text-primary/60">Digital Recipe Companion.</span>
          </div>
          <div className="flex gap-4">
            <div className="h-8 w-8 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer">
              <div className="h-2 w-2 rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
