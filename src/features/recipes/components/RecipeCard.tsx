import { motion } from 'framer-motion'
import { Heart, Clock, Utensils } from 'lucide-react'
import { cn } from '@/lib/utils'

interface RecipeCardProps {
  id: string
  title: string
  description: string
  imageUrl: string
  prepTime: number
  cookTime: number
  servings: number
  isFavorite?: boolean
  className?: string
}

export const RecipeCard = ({
  id,
  title,
  description,
  imageUrl,
  prepTime,
  cookTime,
  servings,
  isFavorite = false,
  className
}: RecipeCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'glass-card rounded-[2.5rem] overflow-hidden transition-all duration-500 premium-shadow',
        className
      )}
    >
      <div className="relative h-64 overflow-hidden group">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <button className="absolute top-4 right-4 p-3 backdrop-blur-md bg-white/20 hover:bg-white/40 rounded-full transition-colors border border-white/30">
          <Heart className={cn(
            'h-5 w-5 transition-colors',
            isFavorite ? 'fill-red-500 text-red-500' : 'text-white'
          )} />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-3 leading-tight">{title}</h3>
        <p className="text-muted-foreground text-sm mb-6 line-clamp-2 leading-relaxed">{description}</p>
        <div className="flex justify-between items-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <div className="flex items-center bg-secondary/50 px-3 py-1 rounded-full">
            <Clock className="h-3.5 w-3.5 mr-1.5 text-primary" />
            <span>{prepTime + cookTime} dk</span>
          </div>
          <div className="flex items-center bg-secondary/50 px-3 py-1 rounded-full">
            <Utensils className="h-3.5 w-3.5 mr-1.5 text-primary" />
            <span>{servings} porsiyon</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}