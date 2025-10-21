'use client'

export const dynamic = 'force-dynamic'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Download, 
  Star, 
  Clock, 
  Target,
  Zap,
  Users,
  Calendar,
  Award,
  Trophy,
  ArrowUp,
  ArrowDown,
  Activity
} from 'lucide-react'

export default function AnalyticsPage() {
  const stats = [
    {
      title: "Total de Downloads",
      value: "47",
      change: "+12%",
      changeType: "positive" as const,
      icon: Download,
      color: "from-blue-500 to-purple-500",
      description: "Últimos 30 dias"
    },
    {
      title: "Sequência Ativa",
      value: "5 meses",
      change: "+2 meses",
      changeType: "positive" as const,
      icon: Star,
      color: "from-green-500 to-emerald-500",
      description: "Recorde pessoal"
    },
    {
      title: "Tempo Economizado",
      value: "127h",
      change: "+23h",
      changeType: "positive" as const,
      icon: Clock,
      color: "from-orange-500 to-red-500",
      description: "Este mês"
    },
    {
      title: "Avaliação Média",
      value: "4.9/5",
      change: "+0.2",
      changeType: "positive" as const,
      icon: Target,
      color: "from-purple-500 to-pink-500",
      description: "Baseado em uso"
    }
  ]

  const achievements = [
    {
      title: "Primeiro Download",
      description: "Você baixou seu primeiro kit!",
      icon: Award,
      unlocked: true,
      date: "2024-01-15"
    },
    {
      title: "Sequência de 3 Meses",
      description: "Mantendo a consistência!",
      icon: Trophy,
      unlocked: true,
      date: "2024-03-15"
    },
    {
      title: "Power User",
      description: "Mais de 50 downloads",
      icon: Zap,
      unlocked: false,
      date: null
    },
    {
      title: "Especialista",
      description: "100+ horas economizadas",
      icon: Users,
      unlocked: false,
      date: null
    }
  ]

  const recentActivity = [
    {
      action: "Download",
      item: "Kit de Automação Completo",
      time: "2 horas atrás",
      icon: Download,
      color: "text-blue-600"
    },
    {
      action: "Avaliação",
      item: "Templates de Marketing",
      time: "1 dia atrás",
      icon: Star,
      color: "text-yellow-600"
    },
    {
      action: "Sequência",
      item: "5 meses consecutivos",
      time: "3 dias atrás",
      icon: Calendar,
      color: "text-green-600"
    },
    {
      action: "Meta",
      item: "50% da meta mensal",
      time: "1 semana atrás",
      icon: Target,
      color: "text-purple-600"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Analytics</h1>
            <p className="text-gray-600">Acompanhe seu progresso e performance</p>
          </div>
          <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200">
            <Activity className="mr-2 h-4 w-4" />
            Ativo
          </Badge>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index}>
            <Card className="glass hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className={`flex items-center space-x-1 text-sm ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.changeType === 'positive' ? (
                      <ArrowUp className="h-4 w-4" />
                    ) : (
                      <ArrowDown className="h-4 w-4" />
                    )}
                    <span>{stat.change}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                <p className="text-xs text-gray-500">{stat.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Progress Section */}
      <div>
        <Card className="glass border-0 bg-gradient-to-r from-indigo-50 to-purple-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-purple-600" />
              <span>Seu Progresso</span>
            </CardTitle>
            <CardDescription>
              Acompanhe suas metas e conquistas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Meta de Downloads (20/mês)</span>
                <span className="font-medium text-purple-600">12/20</span>
              </div>
              <Progress value={60} className="h-3" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Tempo Economizado (100h/mês)</span>
                <span className="font-medium text-green-600">127/100</span>
              </div>
              <Progress value={100} className="h-3" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Sequência Ativa (6 meses)</span>
                <span className="font-medium text-blue-600">5/6</span>
              </div>
              <Progress value={83} className="h-3" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Achievements */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Conquistas</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index}>
              <Card className={`glass hover-lift ${
                achievement.unlocked ? 'border-green-200 bg-green-50/50' : 'border-gray-200'
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      achievement.unlocked 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                        : 'bg-gray-300'
                    }`}>
                      <achievement.icon className={`h-6 w-6 ${
                        achievement.unlocked ? 'text-white' : 'text-gray-500'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-medium ${
                        achievement.unlocked ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {achievement.title}
                      </h3>
                      <p className={`text-sm ${
                        achievement.unlocked ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {achievement.description}
                      </p>
                      {achievement.unlocked && achievement.date && (
                        <p className="text-xs text-green-600 mt-1">
                          Desbloqueado em {new Date(achievement.date).toLocaleDateString('pt-BR')}
                        </p>
                      )}
                    </div>
                    {achievement.unlocked && (
                      <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200">
                        Conquistado
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Atividade Recente</h2>
        <Card className="glass border-0 bg-white/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center`}>
                    <activity.icon className={`h-5 w-5 ${activity.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.item}</p>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
