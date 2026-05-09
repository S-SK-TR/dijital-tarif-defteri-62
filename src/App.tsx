import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppShell from './components/layout/AppShell'
import { AuthProvider } from './features/auth/context/AuthContext'
import { Toaster } from './components/ui/toaster'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <AppShell />
          <Toaster />
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App