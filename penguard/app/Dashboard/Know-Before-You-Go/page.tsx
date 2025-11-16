'use client'
import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, CircleUserRound, Paperclip, Send, User } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type AIMessage = {
  role: "user" | "ai";
  content: string | null;
}
import { Avatar} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger ,DropdownMenuSeparator} from "@/components/ui/dropdown-menu"
import ReactMarkdown from "react-markdown"
import { GoogleGenerativeAI } from "@google/generative-ai";


import { toast } from "sonner"
import { redirect } from "next/navigation"

interface Message {
  id: number
  role: "user" | "assistant" | "default"
  content: string
}



  



export default function Page() {
    const [input, setInput] = useState("")
 
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "default",
      content: "Hi! I'm John your personal assistant. How may i help your safety ?",
    },
  ])

  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const [name,setName] = useState<string>('')
 async  function taskAssistant(message:string,onChunk: (chunk: string) => void){
  const geminiApiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY ||'' ;
  const genAI = new GoogleGenerativeAI(geminiApiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  systemInstruction: `You are PanGuard, a South African safety assistant. When the user enters a location, generate a structured “Know Before You Go” safety briefing no longer than 8 sections. Include:

1. Risk Level (Low/Moderate/High/Severe)
2. Short Context Summary (based on SAPS stats, GBV indicators, urban risk patterns, student safety reports, CPF info)
3. Top Crime Risks in that Area (3–5 items)
4. Actionable Safety Checklist (highly practical)
5. Transport Safety Tips (walking, ride-share, buses, taxis)
6. High-Risk Times & Zones (based on urban crime trends)
7. Emergency Contacts for that location (SAPS, Campus Security, CPFs, EMS)
8. Extra Safety Tools (PanGuard panic button, group alerts, location sharing)

Response tone: calm, authoritative, helpful.  
If the area is a campus or mall, include institution-specific safety notes.  
The final response should be easy to skim and mobile-friendly.`,
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run() {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessageStream(message);
   
  for await (const chunk of result.stream) {
    const chunkText = chunk.text()
    onChunk(chunkText);
  }
   
  }
  
 return run();
}
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    setIsLoading(true)
    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: input,
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    const assistantMessage: Message = {
      id: messages.length + 2,
      role: "assistant",
      content: "",
    }
    setMessages((prev) => [...prev, assistantMessage])

    try {
      await taskAssistant( input, (chunk) => {
        setMessages((prev) => {
          const lastMessage = prev[prev.length - 1]
          if (lastMessage.role === "assistant") {
            return [...prev.slice(0, -1), { ...lastMessage, content: lastMessage.content + chunk }]
          }
          return prev
        })
      })
    } catch (error) {
      console.error("Error in streaming response:", error)
      toast.error("An error occurred while processing your request.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />

        {/* make a full-height column so the messages area can scroll independently */}
        <div className="flex flex-col h-[calc(100vh-0px)]"> 
          {/* messages area: grows and scrolls, leave space at bottom for the footer */}
          <ScrollArea
            className="flex-1 p-4 overflow-auto"
            ref={scrollAreaRef}
            style={{ paddingBottom: 96 }} // ensure last messages aren't hidden behind footer
          >
            <div className="max-w-3xl mx-auto space-y-4">
              {/* Chat Messages */}
              {messages.map((message) => (
                <div key={message.id} className={`flex gap-1 md:gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  {message.role === "assistant" && (
                    <Avatar className="w-8 h-8">
                      <p>✦</p>
                    </Avatar>
                  )}
                  <Card className={`p-3 max-w-[80%] ${message.role === "user" ? "bg-blue-500 text-white" : "bg-white"}`}>
                    <ReactMarkdown>
                      {message.content}
                    </ReactMarkdown>
                  </Card>
                  {message.role === "user" && (
                    <Avatar className="w-8 h-8" />
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* footer is sticky at bottom and doesn't move while messages scroll */}
          <footer className="p-4 bg-white border-t sticky bottom-0 z-30">
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Send a message..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button type="submit" className="bg-blue-500 hover:bg-blue-600" disabled={isLoading}>
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </footer>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
/* 
Check what accurate information gemini can give on locations or areas with regards to safety and gbv reports

Add voice summaries of the data for different languages 

Check for predivtive analysis models or functions to add 

*/