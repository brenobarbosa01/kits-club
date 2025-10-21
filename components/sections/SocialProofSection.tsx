import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../animated-card'


export function SocialProofSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-gray-100 to-blue-100 text-gray-800 border-gray-200 px-4 py-2 text-sm font-medium">
            <TrendingUp className="w-4 h-4 mr-2" />
            Empresas que Confiam
          </Badge>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 bg-gradient-to-r from-gray-600 to-blue-600 bg-clip-text text-transparent font-poppins">
            Usado por mais de 2.000 empresas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
        </AnimatedSection>

        {/* Company Logos */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          {[
            { name: "TechCorp", logo: "🏢" },
            { name: "StartupX", logo: "🚀" },
            { name: "DigitalPro", logo: "💻" },
            { name: "InnovateLab", logo: "🔬" },
            { name: "FutureTech", logo: "⚡" },
            { name: "CloudSoft", logo: "☁️" }
          ].map((company, index) => (
            <StaggerItem key={index}>
              <div className="flex flex-col items-center justify-center p-6 glass hover-lift rounded-xl">
                <div className="text-4xl mb-2">{company.logo}</div>
                <p className="text-sm font-medium text-gray-600 font-poppins">{company.name}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Success Stories */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Aumento de 300% na Produtividade",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              metric: "+300%",
              company: "TechStart Inc."
            },
            {
              title: "Redução de 50% no Tempo de Desenvolvimento",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              metric: "-50%",
              company: "Digital Agency"
            }
          ].map((story, index) => (
            <div key={index}>
              <Card className="glass hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl font-medium text-green-600 font-poppins">{story.metric}</div>
                    <Badge className="bg-green-100 text-green-800">Caso de Sucesso</Badge>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3 font-poppins">{story.title}</h3>
                  <p className="text-gray-600 mb-4 font-inter">{story.description}</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {story.company.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-gray-600">{story.company}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
