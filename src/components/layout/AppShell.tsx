import React from 'react'
import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const AppShell = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

export default AppShell
