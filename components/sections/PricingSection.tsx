'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Star, Zap, Crown } from 'lucide-react'
import Link from 'next/link'
import { AnimatedSection } from '@/components/animated-card'
// import { useUser } from '@clerk/nextjs'

export function PricingSection() {
  // const { isSignedIn } = useUser()
  const isSignedIn = false

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-blue-600/5">
      <div className="container mx-auto text-center">
        <AnimatedSection>
        <Badge className="mb-4 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 text-green-800 dark:text-green-200 border-green-200 dark:border-green-700 px-4 py-2 text-sm font-medium">
          <Star className="w-4 h-4 mr-2" />
          Plano Único
        </Badge>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          Acesso completo
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            por apenas R$ 39/mês
          </span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </AnimatedSection>

        <Card className="max-w-2xl mx-auto glass border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover-lift">
          <CardHeader className="text-center pb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center animate-glow">
              <Crown className="h-10 w-10 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Kits Club
            </CardTitle>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                R$ 39
              </span>
              <span className="text-gray-600 dark:text-gray-400">/mês</span>
            </div>
            <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              "✅ Lorem ipsum dolor sit amet",
              "✅ Consectetur adipiscing elit",
              "✅ Sed do eiusmod tempor",
              "✅ Incididunt ut labore et dolore",
              "✅ Magna aliqua ut enim ad minim",
              "✅ Veniam quis nostrud exercitation",
              "✅ Ullamco laboris nisi ut aliquip"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 text-left">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
            
            <div className="pt-6">
              {!isSignedIn ? (
                <Button size="lg" className="w-full py-4 text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                <Star className="mr-2 h-5 w-5" />
                Começar Agora - R$ 39/mês
              </Button>
              ) : (
                <Link href="/dashboard">
                  <Button size="lg" className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 text-lg font-bold">
                    <Zap className="mr-2 h-5 w-5" />
                    Acessar Dashboard
                  </Button>
                </Link>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
