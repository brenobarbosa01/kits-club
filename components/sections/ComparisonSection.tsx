import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Target } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-card'

export function ComparisonSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 border-orange-200 px-4 py-2 text-sm font-medium">
            <Target className="w-4 h-4 mr-2" />
            Comparação
          </Badge>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-poppins">
            Kits Club vs Concorrência
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Competitor 1 */}
          <Card className="glass hover-lift">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900">Concorrente A</CardTitle>
              <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Templates</span>
                  <span className="font-medium">5/mês</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Suporte</span>
                  <span className="font-medium">Email</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Comunidade</span>
                  <span className="font-medium">Limitada</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Preço</span>
                  <span className="font-medium">R$ 49/mês</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-6">
                Ver Detalhes
              </Button>
            </CardContent>
          </Card>

          {/* Kits Club */}
          <Card className="glass hover-lift border-2 border-orange-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1">
                Melhor Escolha
              </Badge>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900">Kits Club</CardTitle>
              <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Templates</span>
                  <span className="font-medium">15/mês</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Suporte</span>
                  <span className="font-medium">24/7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Comunidade</span>
                  <span className="font-medium">Exclusiva</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Preço</span>
                  <span className="font-medium">R$ 39/mês</span>
                </div>
              </div>
              <Button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                Começar Agora
              </Button>
            </CardContent>
          </Card>

          {/* Competitor 2 */}
          <Card className="glass hover-lift">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900">Concorrente B</CardTitle>
              <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Templates</span>
                  <span className="font-medium">8/mês</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Suporte</span>
                  <span className="font-medium">Chat</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Comunidade</span>
                  <span className="font-medium">Básica</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Preço</span>
                  <span className="font-medium">R$ 59/mês</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-6">
                Ver Detalhes
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}