import { Clock, Users } from 'lucide-react'

export function UrgencyBanner() {
  return (
    <section className="py-4 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      <div className="container mx-auto text-center relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 animate-pulse" />
            <span className="font-medium">Oferta Limitada!</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span className="text-sm">Apenas 47 vagas restantes</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Próximo kit em:</span>
            <div className="flex items-center space-x-1 font-mono text-lg font-medium">
              <div className="bg-white/20 px-2 py-1 rounded">05</div>
              <span>dias</span>
              <div className="bg-white/20 px-2 py-1 rounded">12</div>
              <span>h</span>
              <div className="bg-white/20 px-2 py-1 rounded">34</div>
              <span>min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
