import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

const recipeSchema = z.object({
  title: z.string().min(3, 'En az 3 karakter olmalı'),
  description: z.string().min(10, 'En az 10 karakter olmalı'),
  ingredients: z.array(
    z.object({
      name: z.string().min(1, 'Malzeme adı gereklidir'),
      quantity: z.string().optional()
    })
  ).min(1, 'En az bir malzeme ekleyin'),
  instructions: z.array(
    z.object({
      step: z.string().min(1, 'Adım açıklaması gereklidir')
    })
  ).min(1, 'En az bir adım ekleyin'),
  prepTime: z.number().min(1, 'Hazırlık süresi gereklidir'),
  cookTime: z.number().min(1, 'Pişirme süresi gereklidir'),
  servings: z.number().min(1, 'Porsiyon sayısı gereklidir')
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
      ingredients: [{ name: '', quantity: '' }],
      instructions: [{ step: '' }],
      ...defaultValues
    }
  })

  const addIngredient = () => {
    form.setValue('ingredients', [...form.getValues('ingredients'), { name: '', quantity: '' }])
  }

  const addInstruction = () => {
    form.setValue('instructions', [...form.getValues('instructions'), { step: '' }])
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tarif Başlığı</FormLabel>
              <FormControl>
                <Input placeholder="Örneğin: Kremsi Makarna" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Diğer form alanları buraya eklenecek */}
        <Button type="submit">Kaydet</Button>
      </form>
    </Form>
  )
}