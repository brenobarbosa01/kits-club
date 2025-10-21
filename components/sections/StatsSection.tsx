import { Card, CardContent } from '@/components/ui/card'
import { Users, Download, Star, Heart } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../animated-card'


export function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-poppins">
            Números que impressionam
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "2,847", label: "Membros Ativos", icon: Users },
            { number: "15.2k", label: "Downloads", icon: Download },
            { number: "4.9/5", label: "Avaliação", icon: Star },
            { number: "98%", label: "Satisfação", icon: Heart }
          ].map((stat, index) => (
            <StaggerItem key={index}>
              <Card className="glass hover-lift text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-3xl font-medium text-gray-900 mb-2 font-poppins">{stat.number}</p>
                  <p className="text-gray-600 font-inter">{stat.label}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
