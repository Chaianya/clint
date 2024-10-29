'use client'

import { Outlet } from "react-router-dom"
import { motion } from "framer-motion"
import { Lamp, Sofa, Flower2, PaintBucket } from "lucide-react"

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full overflow-hidden">
      <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12 relative">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-40 w-40 border border-primary-foreground rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: i * 0.2 }}
            />
          ))}
        </div>

        {/* Floating interior design elements */}
        <motion.div
          className="absolute top-1/4 left-1/4"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        >
          <Lamp className="text-primary-foreground w-16 h-16" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/4"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        >
          <Sofa className="text-primary-foreground w-20 h-20" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/3"
          animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
        >
          <Flower2 className="text-primary-foreground w-12 h-12" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/3"
          animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        >
          <PaintBucket className="text-primary-foreground w-14 h-14" />
        </motion.div>

        {/* Animated welcome text */}
        <div className="max-w-md space-y-6 text-center text-primary-foreground z-10">
          <motion.h1
            className="text-4xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to InteriorStudio
          </motion.h1>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where style meets comfort in perfect balance
          </motion.p>
        </div>
      </div>
      <motion.div
        className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Outlet />
      </motion.div>
    </div>
  )
}

export default AuthLayout
