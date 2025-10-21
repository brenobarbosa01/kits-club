import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Zap, Shield, Heart, TrendingUp, Download } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-card'

export function FAQSection() {
  const faqs = [
    {
      question: "Como funciona o Kits Club?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      icon: <Zap className="h-5 w-5" />
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      icon: <Shield className="h-5 w-5" />
    },
    {
      question: "Os templates são exclusivos?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      icon: <Heart className="h-5 w-5" />
    },
    {
      question: "Há garantia de satisfação?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      icon: <Star className="h-5 w-5" />
    },
    {
      question: "Como recebo os novos kits?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      icon: <Download className="h-5 w-5" />
    },
    {
      question: "Posso usar comercialmente?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      icon: <TrendingUp className="h-5 w-5" />
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-purple-200 px-4 py-2 text-sm font-medium">
            <Star className="w-4 h-4 mr-2" />
            FAQ
          </Badge>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-poppins">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="glass hover-lift group border-l-4 border-l-purple-500">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {faq.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}