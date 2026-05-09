import React from 'react'
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid'
import { RecipeCard } from '../components/RecipeCard'
import { Utensils, Zap, Heart, Search, Plus } from 'lucide-react'
import { motion } from 'framer-motion'

const MOCK_RECIPES = [
  {
    id: '1',
    title: 'Trüflü Mantarlı Fettuccine',
    description: 'Özel trüf yağı ve taze yaban mantarlarıyla hazırlanan, damak çatlatan bir İtalyan klasiği.',
    imageUrl: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=800',
    prepTime: 15,
    cookTime: 20,
    servings: 2,
    isFavorite: true
  },
  {
    id: '2',
    title: 'Avokadolu Poşe Yumurta',
    description: 'Güne enerjik başlamak için tam buğday ekmeği üzerinde mükemmel kıvamlı yumurta.',
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800',
    prepTime: 10,
    cookTime: 5,
    servings: 1,
    isFavorite: false
  },
  {
    id: '3',
    title: 'Orman Meyveli Smoothie Kasesi',
    description: 'Antioksidan deposu, renkli ve ferahlatıcı bir kahvaltı alternatifi.',
    imageUrl: 'https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&q=80&w=800',
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    isFavorite: true
  }
]

export const HomePage = () => {
  return (
    <div className="space-y-12 pb-20">
      <section className="text-center space-y-4">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-display font-bold bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent"
        >
          Mutfaktaki İlhamın
        </motion.h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
          Kendi dijital tarif defterini oluştur, favori lezzetlerini sakla ve dünyayla paylaş.
        </p>
      </section>

      <section className="relative">
        <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full -z-10" />
        <BentoGrid>
          <BentoGridItem
            title="Hızlı Tarifler"
            description="30 dakikadan kısa sürede hazırlayabileceğiniz pratik lezzetler."
            header={<div className="h-full min-h-[6rem] rounded-2xl bg-gradient-to-br from-orange-400 to-rose-400 opacity-80" />}
            icon={<Zap className="h-4 w-4 text-white" />}
            className="md:col-span-2"
          />
          <BentoGridItem
            title="Favorilerim"
            description="En sevdiğin tariflere hızlıca ulaş."
            header={<div className="h-full min-h-[6rem] rounded-2xl bg-gradient-to-br from-indigo-400 to-cyan-400 opacity-80" />}
            icon={<Heart className="h-4 w-4 text-white" />}
          />
          <BentoGridItem
            title="Keşfet"
            description="Yeni tatlar ve teknikler öğren."
            header={<div className="h-full min-h-[6rem] rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-400 opacity-80" />}
            icon={<Search className="h-4 w-4 text-white" />}
          />
          <BentoGridItem
            title="Yeni Ekle"
            description="Kendi imza tarifini bugün kaydet."
            header={<div className="h-full min-h-[6rem] rounded-2xl bg-gradient-to-br from-violet-400 to-purple-400 opacity-80" />}
            icon={<Plus className="h-4 w-4 text-white" />}
            className="md:col-span-2"
          />
        </BentoGrid>
      </section>

      <section className="space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-display font-bold">Son Eklenenler</h2>
            <p className="text-muted-foreground">Mutfaktan yeni çıkan taze tarifler.</p>
          </div>
          <button className="text-primary font-semibold hover:underline">Tümünü Gör</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_RECIPES.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </section>
    </div>
  )
}

