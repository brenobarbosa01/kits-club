import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Target, Zap, Rocket, Heart, Shield, TrendingUp } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animated-card'


export function FeaturesSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 px-4 py-2 text-sm font-medium">
            <Target className="w-4 h-4 mr-2" />
            Por que escolher nossa plataforma?
          </Badge>
          <h2 className="text-5xl md:text-6xl font-medium mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-poppins">
            Tudo que você precisa
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              em um só lugar
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="h-8 w-8" />,
              title: "Templates Profissionais",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
              gradient: "from-purple-500 to-pink-500"
            },
            {
              icon: <Rocket className="h-8 w-8" />,
              title: "Automações Avançadas",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
              gradient: "from-blue-500 to-purple-500"
            },
            {
              icon: <Target className="h-8 w-8" />,
              title: "Foco em Resultados",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
              gradient: "from-green-500 to-blue-500"
            },
            {
              icon: <Heart className="h-8 w-8" />,
              title: "Comunidade Exclusiva",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
              gradient: "from-pink-500 to-red-500"
            },
            {
              icon: <Shield className="h-8 w-8" />,
              title: "Suporte 24/7",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
              gradient: "from-indigo-500 to-purple-500"
            },
            {
              icon: <TrendingUp className="h-8 w-8" />,
              title: "Atualizações Constantes",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
              gradient: "from-yellow-500 to-orange-500"
            }
          ].map((feature, index) => (
            <StaggerItem key={index}>
              <Card className="glass hover-lift group border-0 bg-white/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center font-inter">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
