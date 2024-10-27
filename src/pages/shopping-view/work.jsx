'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Calendar, Users, Home, Building, Zap, Award } from 'lucide-react'

export default function work() {
  const [selectedWork, setSelectedWork] = useState(null)

  const works = [
    { 
      id: 1, 
      title: 'Modern Living Room Redesign', 
      category: 'Residential', 
      year: 2023,
      client: 'Smith Family',
      description: 'A complete overhaul of a dated living room into a sleek, modern space with smart home integration.',
      icon: Home
    },
    { 
      id: 2, 
      title: 'Eco-Friendly Office Complex', 
      category: 'Commercial', 
      year: 2022,
      client: 'Green Tech Inc.',
      description: 'Designed a sustainable office space using recycled materials and energy-efficient systems.',
      icon: Building
    },
    { 
      id: 3, 
      title: 'Luxury Hotel Suite Renovation', 
      category: 'Hospitality', 
      year: 2021,
      client: 'Grandview Hotels',
      description: 'Transformed 50 hotel suites into luxurious, tech-enabled spaces with a focus on comfort and style.',
      icon: Users
    },
    { 
      id: 4, 
      title: 'Smart Home Integration Project', 
      category: 'Residential', 
      year: 2020,
      client: 'Johnson Residence',
      description: 'Integrated cutting-edge smart home technology into a traditional family home, blending old and new seamlessly.',
      icon: Zap
    },
    { 
      id: 5, 
      title: 'Award-Winning Restaurant Design', 
      category: 'Commercial', 
      year: 2019,
      client: 'Fusion Flavors Restaurant',
      description: 'Created an immersive dining experience through innovative interior design, winning a local design award.',
      icon: Award
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[400px] overflow-hidden bg-primary"
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-center"
          >
            Our Works
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl text-center max-w-2xl"
          >
            A Timeline of Our Finest Interior Design Projects
          </motion.p>
        </div>
      </motion.div>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {works.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                <div className="w-full md:w-1/2 p-4">
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedWork(work)}>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <work.icon className="w-8 h-8 mr-2 text-primary" />
                        <h3 className="text-2xl font-bold">{work.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-2">{work.category}</p>
                      <p className="text-sm text-gray-500 mb-4">
                        <Calendar className="inline w-4 h-4 mr-1" />
                        {work.year}
                      </p>
                      <Button>View Details</Button>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <div className="h-full flex items-center justify-center">
                    <div className="w-1 h-24 bg-primary"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={selectedWork !== null} onOpenChange={() => setSelectedWork(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedWork?.title}</DialogTitle>
            <DialogDescription>{selectedWork?.category} - {selectedWork?.year}</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <p className="mb-2"><strong>Client:</strong> {selectedWork?.client}</p>
            <p>{selectedWork?.description}</p>
          </div>
        </DialogContent>
      </Dialog>

      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Project?</h2>
          <Button size="lg">Get in Touch</Button>
        </div>
      </section>
    </div>
  )
}