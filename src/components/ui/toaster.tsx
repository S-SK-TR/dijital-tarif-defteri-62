import * as React from 'react'
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast'

interface ToastProps {
  title?: string
  description?: string
  action?: React.ReactNode
  duration?: number
}

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}

export function useToast() {
  const [toasts, setToasts] = React.useState<ToastProps[]>([])

  const toast = ({ ...props }: ToastProps) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((toasts) => [...toasts, { id, ...props }])

    setTimeout(() => {
      setToasts((toasts) => toasts.filter((toast) => toast.id !== id))
    }, props.duration || 5000)
  }

  return {
    toast,
    toasts
  }
}