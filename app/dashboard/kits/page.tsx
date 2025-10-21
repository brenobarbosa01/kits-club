'use client'

export const dynamic = 'force-dynamic'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Download, 
  Star, 
  Search, 
  Package,
  Calendar,
  Users,
  Clock,
  Eye,
  Bookmark
} from 'lucide-react'
import { useState } from 'react'

export default function KitsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const mockKits = [
    {
      id: 1,
      title: "Kit de Automação Completo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      category: "Automação",
      downloads: 1247,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      gradient: "from-blue-500 to-purple-500",
      isNew: true,
      releaseDate: "2024-01-15",
      tags: ["Automação", "Produtividade", "Workflow"],
      author: "Tech Expert",
      duration: "2h 30min",
      level: "Intermediário"
    },
    {
      id: 2,
      title: "Templates de Marketing Digital",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      category: "Marketing",
      downloads: 892,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      gradient: "from-green-500 to-blue-500",
      isNew: false,
      releaseDate: "2024-01-01",
      tags: ["Marketing", "Templates", "Social Media"],
      author: "Marketing Pro",
      duration: "1h 45min",
      level: "Iniciante"
    },
    {
      id: 3,
      title: "Sistema de Vendas Avançado",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      category: "Vendas",
      downloads: 1563,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      gradient: "from-purple-500 to-pink-500",
      isNew: true,
      releaseDate: "2024-01-20",
      tags: ["Vendas", "CRM", "Automação"],
      author: "Sales Master",
      duration: "3h 15min",
      level: "Avançado"
    },
    {
      id: 4,
      title: "Templates de Design UI/UX",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      category: "Design",
      downloads: 743,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop",
      gradient: "from-pink-500 to-red-500",
      isNew: false,
      releaseDate: "2023-12-15",
      tags: ["Design", "UI/UX", "Templates"],
      author: "Design Guru",
      duration: "2h 00min",
      level: "Intermediário"
    },
    {
      id: 5,
      title: "Automação de E-mail Marketing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      category: "Automação",
      downloads: 1105,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      gradient: "from-indigo-500 to-purple-500",
      isNew: false,
      releaseDate: "2023-12-01",
      tags: ["E-mail", "Marketing", "Automação"],
      author: "Email Expert",
      duration: "1h 30min",
      level: "Iniciante"
    },
    {
      id: 6,
      title: "Sistema de Gestão Financeira",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      category: "Financeiro",
      downloads: 634,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      gradient: "from-emerald-500 to-teal-500",
      isNew: true,
      releaseDate: "2024-01-10",
      tags: ["Financeiro", "Gestão", "Controle"],
      author: "Finance Pro",
      duration: "2h 45min",
      level: "Intermediário"
    }
  ]

  const categories = [
    { id: 'all', name: 'Todos', count: mockKits.length },
    { id: 'Automação', name: 'Automação', count: mockKits.filter(kit => kit.category === 'Automação').length },
    { id: 'Marketing', name: 'Marketing', count: mockKits.filter(kit => kit.category === 'Marketing').length },
    { id: 'Vendas', name: 'Vendas', count: mockKits.filter(kit => kit.category === 'Vendas').length },
    { id: 'Design', name: 'Design', count: mockKits.filter(kit => kit.category === 'Design').length },
    { id: 'Financeiro', name: 'Financeiro', count: mockKits.filter(kit => kit.category === 'Financeiro').length }
  ]

  const filteredKits = mockKits.filter(kit => {
    const matchesSearch = kit.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         kit.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || kit.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Biblioteca de Kits</h1>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Package className="h-4 w-4" />
              <span>{filteredKits.length} kits disponíveis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div>
        <Card className="glass border-0 bg-white/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Buscar kits..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={selectedCategory === category.id ? 
                      "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : 
                      "hover:bg-purple-50"
                    }
                  >
                    {category.name}
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Kits Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredKits.map((kit, index) => (
          <div key={kit.id}>
            <Card className="glass hover-lift group overflow-hidden">
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={kit.image} 
                  alt={kit.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  {kit.isNew && (
                    <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200">
                      Novo
                    </Badge>
                  )}
                  <Button size="sm" variant="ghost" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 text-white text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{kit.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span>{kit.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{kit.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                      {kit.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 line-clamp-2 mb-3">
                      {kit.description}
                    </CardDescription>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {kit.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{kit.author}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {kit.level}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(kit.releaseDate).toLocaleDateString('pt-BR')}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {kit.category}
                  </Badge>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline" className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>Ver</span>
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Baixar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredKits.length === 0 && (
        <div>
          <Card className="glass border-0 bg-white/50 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Nenhum kit encontrado</h3>
              <p className="text-gray-600 mb-6">Tente ajustar seus filtros de busca</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
              >
                Limpar Filtros
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Featured Section */}
 
    </div>
  )
}