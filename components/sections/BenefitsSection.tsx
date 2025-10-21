import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, Zap, TrendingUp, Users, Shield, Clock, Star } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-card'

export function BenefitsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 border-indigo-200 px-4 py-2 text-sm font-medium">
            <Heart className="w-4 h-4 mr-2" />
            Benefícios Exclusivos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-poppins">
            Por que escolher o Kits Club?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="h-8 w-8" />,
              title: "Economia de Tempo",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
              icon: <TrendingUp className="h-8 w-8" />,
              title: "Produtividade",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: "Comunidade",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
              icon: <Shield className="h-8 w-8" />,
              title: "Segurança",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
              icon: <Clock className="h-8 w-8" />,
              title: "Suporte 24/7",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
              icon: <Star className="h-8 w-8" />,
              title: "Qualidade Premium",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          ].map((benefit, index) => (
            <Card key={index} className="glass hover-lift group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}