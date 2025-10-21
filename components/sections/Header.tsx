'use client'

// import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Zap } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  // const { isSignedIn } = useUser()
  const isSignedIn = false

  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-white/20">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center animate-glow">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Kits Club
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          {isSignedIn ? (
            <div className="flex items-center space-x-3">
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  <Zap className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" />
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Link href="/dashboard">
                <Button variant="ghost" className="text-gray-700 hover:text-purple-600">
                  Entrar
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Começar Agora
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
