'use client'

export const dynamic = 'force-dynamic'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Calendar, 
  Clock, 
  Download, 
  Star, 
  Sparkles, 
  Target
} from 'lucide-react'

export default function CalendarPage() {
  const upcomingReleases = [
    {
      id: 1,
      title: "Kit de Automação Avançada",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      releaseDate: "2024-02-01",
      status: "upcoming",
      category: "Automação",
      image: "🤖",
      gradient: "from-blue-500 to-purple-500",
      countdown: "3 dias"
    },
    {
      id: 2,
      title: "Templates de Vendas Premium",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      releaseDate: "2024-02-15",
      status: "upcoming",
      category: "Vendas",
      image: "💰",
      gradient: "from-green-500 to-emerald-500",
      countdown: "17 dias"
    },
    {
      id: 3,
      title: "Sistema de Analytics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      releaseDate: "2024-03-01",
      status: "upcoming",
      category: "Analytics",
      image: "📊",
      gradient: "from-purple-500 to-pink-500",
      countdown: "31 dias"
    }
  ]

  const pastReleases = [
    {
      id: 4,
      title: "Kit de Marketing Digital",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      releaseDate: "2024-01-15",
      status: "released",
      category: "Marketing",
      image: "📈",
      gradient: "from-orange-500 to-red-500",
      downloads: 1247,
      rating: 4.9
    },
    {
      id: 5,
      title: "Templates de Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      releaseDate: "2024-01-01",
      status: "released",
      category: "Design",
      image: "🎨",
      gradient: "from-pink-500 to-purple-500",
      downloads: 892,
      rating: 4.8
    }
  ]

  const milestones = [
    {
      title: "Meta de 100 Downloads",
      description: "Continue baixando kits para alcançar sua meta!",
      progress: 47,
      target: 100,
      icon: Target,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Sequência de 6 Meses",
      description: "Mantenha sua assinatura ativa!",
      progress: 5,
      target: 6,
      icon: Star,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Tempo Economizado",
      description: "Economize 200 horas este ano!",
      progress: 127,
      target: 200,
      icon: Clock,
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Cronograma</h1>
            <p className="text-gray-600">Acompanhe os próximos lançamentos e seu progresso</p>
          </div>
          <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200">
            <Calendar className="mr-2 h-4 w-4" />
            Atualizado
          </Badge>
        </div>
      </div>

      {/* Next Release Countdown */}
      <div>
        <Card className="glass border-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          
          <CardContent className="p-8 relative z-10">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-5 w-5" />
              <Badge className="bg-white/20 text-white border-white/30">
                Próximo Lançamento
              </Badge>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              {upcomingReleases[0].title}
            </h2>
            <p className="text-xl opacity-90 mb-6">
              {upcomingReleases[0].description}
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-4xl font-bold">3</div>
                <div className="text-sm opacity-80">Dias</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">12</div>
                <div className="text-sm opacity-80">Horas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">34</div>
                <div className="text-sm opacity-80">Minutos</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Milestones */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Suas Metas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {milestones.map((milestone, index) => (
            <div key={index}>
              <Card className="glass hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${milestone.color} flex items-center justify-center`}>
                      <milestone.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{milestone.title}</h3>
                      <p className="text-sm text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Progresso</span>
                      <span className="font-medium text-purple-600">
                        {milestone.progress}/{milestone.target}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(milestone.progress / milestone.target) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Releases */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Próximos Lançamentos</h2>
        <div className="space-y-6">
          {upcomingReleases.map((release, index) => (
            <div key={release.id}>
              <Card className="glass hover-lift border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${release.gradient} flex items-center justify-center text-2xl`}>
                      {release.image}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{release.title}</h3>
                          <p className="text-gray-600 mb-2">{release.description}</p>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 mb-2">
                            {release.countdown}
                          </Badge>
                          <p className="text-sm text-gray-500">
                            {new Date(release.releaseDate).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline" className="text-xs">
                          {release.category}
                        </Badge>
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>Em breve</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Past Releases */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Lançamentos Anteriores</h2>
        <div className="space-y-6">
          {pastReleases.map((release, index) => (
            <div key={release.id}>
              <Card className="glass hover-lift border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${release.gradient} flex items-center justify-center text-2xl`}>
                      {release.image}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{release.title}</h3>
                          <p className="text-gray-600 mb-2">{release.description}</p>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200 mb-2">
                            Disponível
                          </Badge>
                          <p className="text-sm text-gray-500">
                            {new Date(release.releaseDate).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Badge variant="outline" className="text-xs">
                            {release.category}
                          </Badge>
                          <div className="flex items-center space-x-1 text-sm text-gray-600">
                            <Download className="h-4 w-4" />
                            <span>{release.downloads} downloads</span>
                          </div>
                          <div className="flex items-center space-x-1 text-sm text-gray-600">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span>{release.rating}</span>
                          </div>
                        </div>
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                          <Download className="mr-2 h-4 w-4" />
                          Baixar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
