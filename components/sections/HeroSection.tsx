'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Users, Download, Star, Rocket, Play, Sparkles } from 'lucide-react'
import Link from 'next/link'
// import { useUser } from '@clerk/nextjs'
import { useState, useEffect } from 'react'

export function HeroSection() {
  // const { isSignedIn } = useUser()
  const isSignedIn = false
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-purple-200 px-4 py-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            Mais de 2.000 membros ativos
          </Badge>
        
          <h1 className="text-6xl md:text-8xl font-medium mb-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent font-poppins">
            Transforme suas
            <br />
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              ideias em realidade
            </span>
          </h1>
        
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-inter">
            Receba <span className="font-medium text-purple-600">kits exclusivos</span> todo mês com templates, automações e ferramentas que vão acelerar seus projetos em <span className="font-medium text-pink-600">10x</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            {!isSignedIn ? (
              <Button size="xl" variant="default" className="w-full sm:w-auto font-poppins animate-bounce-in">
                <Rocket className="mr-3 h-6 w-6" />
                Começar Agora - R$ 39/mês
              </Button>
            ) : (
              <Link href="/dashboard">
                <Button size="xl" variant="success" className="w-full sm:w-auto font-poppins animate-slide-in-left">
                  <Rocket className="mr-3 h-6 w-6" />
                  Acessar Dashboard
                </Button>
              </Link>
            )}
            <Button variant="outline" size="xl" className="w-full sm:w-auto font-poppins animate-slide-in-right">
              <Play className="mr-3 h-6 w-6" />
              Ver Exemplos
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2 glass px-6 py-3 rounded-full">
              <Users className="h-5 w-5 text-purple-600" />
              <span className="font-medium">2.847 membros ativos</span>
            </div>
            <div className="flex items-center space-x-2 glass px-6 py-3 rounded-full">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="font-medium">4.9/5 avaliação</span>
            </div>
            <div className="flex items-center space-x-2 glass px-6 py-3 rounded-full">
              <Download className="h-5 w-5 text-green-600" />
              <span className="font-medium">15.2k downloads</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
