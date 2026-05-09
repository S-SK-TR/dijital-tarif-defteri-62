import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BentoGridProps {
  className?: string
  children?: ReactNode
}

export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto',
        className
      )}
    >
      {children}
    </div>
  )
}

interface BentoGridItemProps {
  className?: string
  title?: string | ReactNode
  description?: string | ReactNode
  header?: ReactNode
  icon?: ReactNode
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        'row-span-1 glass-card rounded-3xl p-6 justify-between flex flex-col space-y-4 hover:shadow-2xl transition duration-300 group/bento premium-shadow',
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-display font-bold text-foreground mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-muted-foreground text-xs leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  )
}
