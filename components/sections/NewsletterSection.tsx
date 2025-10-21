import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Zap } from 'lucide-react'

export function NewsletterSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto text-center text-white relative z-10">
        <Badge className="mb-4 bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium">
          <Zap className="w-4 h-4 mr-2" />
          Newsletter Exclusiva
        </Badge>
        <h2 className="text-4xl md:text-5xl font-medium mb-6 font-poppins">
          Fique por dentro das novidades
        </h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90 font-inter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
        </p>
        
        <div className="justify-center items-center">
          <div className="flex flex-col justify-center items-center sm:flex-row gap-4">
            <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium hover-lift font-poppins shadow-lg">
              <Zap className="mr-2 h-5 w-5" />
              Inscrever-se
            </Button>
          </div>
          <p className="text-sm text-white/80 mt-4 font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  )
}
