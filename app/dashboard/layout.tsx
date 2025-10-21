'use client'

// import { UserButton, useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Zap, 
  Home, 
  Package, 
  BarChart3, 
  Calendar, 
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const { user } = useUser()
  const pathname = usePathname()

  const navigation = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: Home,
      description: 'Visão geral da sua conta'
    },
    {
      name: 'Kits',
      href: '/dashboard/kits',
      icon: Package,
      description: 'Todos os seus kits'
    },
    {
      name: 'Analytics',
      href: '/dashboard/analytics',
      icon: BarChart3,
      description: 'Suas estatísticas'
    },
    {
      name: 'Cronograma',
      href: '/dashboard/calendar',
      icon: Calendar,
      description: 'Próximos lançamentos'
    },
 
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-white/20 backdrop-blur-md">
        <div className="container mx-auto py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Kits Club
              </span>
              <p className="text-sm text-gray-600">Área do Membro</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <Button 
                    variant={pathname === item.href ? "default" : "ghost"}
                    className={`flex items-center space-x-2 ${
                      pathname === item.href 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                        : 'text-gray-700 hover:text-purple-600'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Button>
                </Link>
              ))}
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Zap className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="glass border-0 bg-white/50 backdrop-blur-sm sticky top-24">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-medium text-gray-900">Seu Status</h3>
                    <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200">
                      Membro Ativo
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <div className={`p-3 rounded-lg transition-all duration-300 hover:bg-purple-50 ${
                          pathname === item.href ? 'bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200' : ''
                        }`}>
                          <div className="flex items-center space-x-3">
                            <item.icon className={`h-5 w-5 ${
                              pathname === item.href ? 'text-purple-600' : 'text-gray-500'
                            }`} />
                            <div>
                              <p className={`font-medium ${
                                pathname === item.href ? 'text-purple-900' : 'text-gray-900'
                              }`}>
                                {item.name}
                              </p>
                              <p className="text-xs text-gray-600">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Quick Stats */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-900 mb-4">Resumo Rápido</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Kits Baixados</span>
                        <span className="font-medium text-purple-600">12</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Sequência</span>
                        <span className="font-medium text-green-600">5 meses</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Próximo Kit</span>
                        <span className="font-medium text-blue-600">3 dias</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}