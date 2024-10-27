'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Briefcase, Heart, Phone } from 'lucide-react'

export default function aboutus() {
  const teamMembers = [
    { name: 'John Doe', role: 'Founder & CEO', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Jane Smith', role: 'Lead Designer', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Mike Johnson', role: 'Senior Architect', image: '/placeholder.svg?height=200&width=200' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[400px] overflow-hidden bg-black"
      >
        <motion.img
          src="/placeholder.svg?height=400&width=1200"
          alt="About Us Hero"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 7 }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-center"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl text-center max-w-2xl"
          >
            Crafting Beautiful Spaces Since 2010
          </motion.p>
        </div>
      </motion.div>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-8">
            Founded in 2010, our interior design firm has been transforming spaces and enriching lives through innovative design solutions. We believe in the power of thoughtful, personalized interiors to enhance the way people live, work, and interact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Users className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-center">Our talented designers bring years of experience and creativity to every project.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Briefcase className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Tailored Approach</h3>
                <p className="text-center">We craft unique solutions that reflect each client's individual style and needs.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Heart className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Client Satisfaction</h3>
                <p className="text-center">Our commitment to excellence ensures happy clients and beautiful spaces.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mb-4 object-cover" />
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Space?</h2>
          <Button size="lg" className="mb-4">
            <Phone className="mr-2 h-4 w-4" /> Contact Us
          </Button>
          <p className="text-gray-600">Let's bring your vision to life!</p>
        </div>
      </section>
    </div>
  )
}