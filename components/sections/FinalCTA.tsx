'use client'

import { Button } from '@/components/ui/button'
import { Rocket, Zap } from 'lucide-react'
import Link from 'next/link'
// import { useUser } from '@clerk/nextjs'

export function FinalCTA() {
  // const { isSignedIn } = useUser()
  const isSignedIn = false

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto text-center text-white relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Pronto para transformar
          <br />
          <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            seu negócio?
          </span>
        </h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
        {!isSignedIn ? (
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-6 text-xl font-bold hover-lift">
            <Rocket className="mr-3 h-6 w-6" />
            Começar Agora - R$ 39/mês
          </Button>
        ) : (
          <Link href="/dashboard">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-6 text-xl font-bold hover-lift">
              <Zap className="mr-3 h-6 w-6" />
              Acessar Dashboard
            </Button>
          </Link>
        )}
      </div>
    </section>
  )
}
