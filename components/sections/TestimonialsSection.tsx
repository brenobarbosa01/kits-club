import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../animated-card'


export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200 px-4 py-2 text-sm font-medium">
            <Star className="w-4 h-4 mr-2" />
            Depoimentos Reais
          </Badge>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-poppins">
            O que nossos membros dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Maria Silva",
              role: "Empreendedora Digital",
              avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
              rating: 5
            },
            {
              name: "João Santos",
              role: "CEO TechStart",
              avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
              rating: 5
            },
            {
              name: "Ana Costa",
              role: "Marketing Manager",
              avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
              rating: 5
            },
            {
              name: "Carlos Oliveira",
              role: "Freelancer",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
              rating: 5
            },
            {
              name: "Fernanda Lima",
              role: "Designer UX/UI",
              avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
              rating: 5
            },
            {
              name: "Roberto Alves",
              role: "Product Manager",
              avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
              rating: 5
            }
          ].map((testimonial, index) => (
            <StaggerItem key={index}>
              <Card className="glass hover-lift group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 font-inter italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center space-x-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900 font-poppins">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
