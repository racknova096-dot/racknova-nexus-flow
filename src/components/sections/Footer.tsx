import { GlassButton } from "@/components/ui/glass-button"
import { ArrowUp, Home, Settings, Mail } from "lucide-react"

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="py-16 bg-gradient-to-b from-background to-background/95 border-t border-white/10 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-orbitron">
                <span className="neon-text">RacknovaMx</span>
              </h3>
              <p className="text-muted-foreground font-space max-w-md leading-relaxed">
                Sistema de gestión de inventarios semiautomático del futuro. 
                Transformamos almacenes con tecnología de vanguardia y control en tiempo real.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                Proyecto Inventario 4.0 - 2025
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold font-orbitron text-foreground mb-6">
              Navegación
            </h4>
            <nav className="space-y-4">
              <button
                onClick={() => scrollToTop()}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-space group"
              >
                <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('sistema')}
                className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors font-space group"
              >
                <Settings className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Sistema
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors font-space group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Contacto
              </button>
            </nav>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold font-orbitron text-foreground mb-6">
              Contacto rápido
            </h4>
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground font-space">
                <div className="font-medium text-foreground mb-1">Email</div>
                contacto@racknovamx.com
              </div>
              <div className="text-sm text-muted-foreground font-space">
                <div className="font-medium text-foreground mb-1">Teléfono</div>
                +52 (555) 123-4567
              </div>
              <GlassButton
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection('contacto')}
                className="mt-4"
              >
                Solicitar información
              </GlassButton>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground font-space text-center md:text-left">
            © 2025 RacknovaMx - Proyecto Inventario 4.0. Todos los derechos reservados.
          </div>
          
          <GlassButton
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="group"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </GlassButton>
        </div>
      </div>
    </footer>
  )
}