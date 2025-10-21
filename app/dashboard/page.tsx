'use client'

export const dynamic = 'force-dynamic'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { 
  Download, 
  Star, 
  TrendingUp, 
  Clock,
  Package,
  BarChart3,
  Calendar,
  ArrowRight,
  Sparkles,
  Target,
  Heart
} from 'lucide-react'
import Link from 'next/link'

export default function AppPage() {
  const mockKits = [
    {
      id: 1,
      title: "Kit de Automação Completo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      category: "Automação",
      downloads: 1247,
      rating: 4.9,
      image: "🤖",
      gradient: "from-blue-500 to-purple-500",
      isNew: true
    },
    {
      id: 2,
      title: "Templates de Marketing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      category: "Marketing",
      downloads: 892,
      rating: 4.8,
      image: "📈",
      gradient: "from-green-500 to-blue-500",
      isNew: false
    },
    {
      id: 3,
      title: "Sistema de Vendas",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      category: "Vendas",
      downloads: 1563,
      rating: 4.9,
      image: "💰",
      gradient: "from-purple-500 to-pink-500",
      isNew: true
    }
  ]

  const stats = [
    { label: "Kits Baixados", value: "12", icon: Download, color: "text-blue-600" },
    { label: "Sequência Ativa", value: "5 meses", icon: Star, color: "text-green-600" },
    { label: "Avaliação Média", value: "4.9/5", icon: TrendingUp, color: "text-purple-600" },
    { label: "Tempo Economizado", value: "47h", icon: Clock, color: "text-orange-600" }
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-5 w-5" />
              <Badge className="bg-white/20 text-white border-white/30">
                Bem-vindo de volta!
              </Badge>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Que bom te ver aqui! 👋
            </h1>
            <p className="text-xl opacity-90 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 font-medium">
                <Download className="mr-2 h-4 w-4" />
                Baixar Último Kit
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Calendar className="mr-2 h-4 w-4" />
                Ver Cronograma
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index}>
            <Card className="glass hover-lift text-center">
              <CardContent className="p-6">
                <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Recent Kits */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Seus Kits Recentes</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <Link href="/app/kits">
            <Button variant="outline" className="flex items-center space-x-2">
              <span>Ver Todos</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockKits.map((kit, index) => (
            <div key={kit.id}>
              <Card className="glass hover-lift group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${kit.gradient} flex items-center justify-center text-2xl`}>
                      {kit.image}
                    </div>
                    {kit.isNew && (
                      <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200">
                        Novo
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {kit.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {kit.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-xs">
                      {kit.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span>{kit.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span>{kit.downloads} downloads</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Baixar Kit
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Ações Rápidas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <Card className="glass hover-lift group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Explorar Kits</h3>
                <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link href="/app/kits">
                  <Button variant="outline" size="sm" className="w-full">
                    Ver Kits
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="glass hover-lift group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics</h3>
                <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link href="/app/analytics">
                  <Button variant="outline" size="sm" className="w-full">
                    Ver Stats
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="glass hover-lift group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Cronograma</h3>
                <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link href="/app/calendar">
                  <Button variant="outline" size="sm" className="w-full">
                    Ver Agenda
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div>
        <Card className="glass border-0 bg-gradient-to-r from-indigo-50 to-purple-50">
          <CardContent className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Target className="h-6 w-6 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-900">Seu Progresso</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Meta de Downloads</span>
                <span className="font-medium text-purple-600">12/20</span>
              </div>
              <Progress value={60} className="h-2" />
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Sequência Ativa</span>
                <span className="font-medium text-green-600">5 meses</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-pink-600" />
                <span className="text-sm font-medium text-gray-700">
                  Você está indo muito bem! Continue assim! 🚀
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
