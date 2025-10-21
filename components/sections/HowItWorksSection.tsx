import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Zap, Crown, Download, Rocket } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../animated-card'


export function HowItWorksSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 px-4 py-2 text-sm font-medium">
            <Zap className="w-4 h-4 mr-2" />
            Como Funciona
          </Badge>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-poppins">
            Simples em 3 passos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Assine o Plano",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              icon: <Crown className="h-8 w-8" />
            },
            {
              step: "02",
              title: "Receba os Kits",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              icon: <Download className="h-8 w-8" />
            },
            {
              step: "03",
              title: "Transforme seu Negócio",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              icon: <Rocket className="h-8 w-8" />
            }
          ].map((step, index) => (
            <StaggerItem key={index}>
              <Card className="glass hover-lift text-center relative">
              <CardContent className="p-8">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                  {step.step}
                </div>
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                  {step.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4 font-poppins">{step.title}</h3>
                <p className="text-gray-600 font-inter">{step.description}</p>
              </CardContent>
            </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
