import { Zap } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-2xl font-bold">Kits Club</span>
        </div>
        <p className="text-gray-400 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos</a>
          <a href="#" className="hover:text-white transition-colors">Suporte</a>
        </div>
      </div>
    </footer>
  )
}
