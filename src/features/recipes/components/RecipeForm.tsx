import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { Plus, Trash2, Utensils, Clock, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

const recipeSchema = z.object({
  title: z.string().min(3, 'En az 3 karakter olmalı'),
  description: z.string().min(10, 'En az 10 karakter olmalı'),
  prepTime: z.coerce.number().min(1, 'Hazırlık süresi gereklidir'),
  cookTime: z.coerce.number().min(1, 'Pişirme süresi gereklidir'),
  servings: z.coerce.number().min(1, 'Porsiyon sayısı gereklidir')
})

type RecipeFormValues = z.infer<typeof recipeSchema>

interface RecipeFormProps {
  onSubmit: (data: RecipeFormValues) => void
  defaultValues?: Partial<RecipeFormValues>
}

export const RecipeForm = ({ onSubmit, defaultValues }: RecipeFormProps) => {
  const form = useForm<RecipeFormValues>({
    resolver: zodResolver(recipeSchema),
    defaultValues: {
      title: '',
      description: '',
      prepTime: 0,
      cookTime: 0,
      servings: 1,
      ...defaultValues
    }
  })

  return (
    <Form {...form}>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 glass-card p-8 rounded-[2.5rem] premium-shadow"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-primary/10 rounded-2xl">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-display font-bold">Yeni Tarif Oluştur</h2>
        </div>

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tarif Başlığı</FormLabel>
              <FormControl>
                <Input placeholder="Örneğin: Trüflü Mantarlı Makarna" {...field} className="text-lg font-medium" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Açıklama</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Bu tarifin hikayesini ve lezzetini anlatın..." 
                  {...field} 
                  className="min-h-[120px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormField
            control={form.control}
            name="prepTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" /> Hazırlık (dk)
                </FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cookTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" /> Pişirme (dk)
                </FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="servings"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center">
                  <Utensils className="h-3 w-3 mr-1" /> Porsiyon
                </FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button 
          type="submit" 
          className="w-full py-7 rounded-2xl text-lg font-display font-bold transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
        >
          Tarifi Deftere Kaydet
        </Button>
      </motion.form>
    </Form>
  )
}
