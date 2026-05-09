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
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'glass-card rounded-4xl overflow-hidden shadow-lg transition-all duration-300',
        className
      )}
    >
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full">
          <Heart className={cn(
            'h-5 w-5',
            isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
          )} />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-text mb-2">{title}</h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center text-sm text-text-secondary">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{prepTime + cookTime} dk</span>
          </div>
          <div className="flex items-center">
            <Utensils className="h-4 w-4 mr-1" />
            <span>{servings} porsiyon</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}