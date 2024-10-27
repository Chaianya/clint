'use client'

import React, { useState } from "react"
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send } from 'lucide-react'
import runChat from "./runChat" // Import the runChat function

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [userInput, setUserInput] = useState("")

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const sendMessage = async () => {
    if (!userInput) return

    // Add user message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: userInput },
    ])

    try {
      // Call the Gemini API with user input
      const responseText = await runChat(userInput)

      // Add bot message to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: responseText },
      ])
    } catch (error) {
      console.error("Error communicating with Gemini API:", error)
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Sorry, something went wrong!" },
      ])
    }

    // Clear user input
    setUserInput("")
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          onClick={toggleChat}
          size="icon"
          className="shadow-lg w-14 h-14 rounded-full"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Chat with Us</span>
        </Button>
      </motion.div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-4"
        >
          <Card className="w-80 sm:w-96">
            <CardContent className="p-4">
              <div className="h-60 overflow-y-auto mb-4 space-y-2">
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                        msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-secondary"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex space-x-2">
                <Input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-grow"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      sendMessage()
                    }
                  }}
                />
                <Button onClick={sendMessage} size="icon">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}