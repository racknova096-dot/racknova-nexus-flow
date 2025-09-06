import { GlassButton } from "@/components/ui/glass-button"
import { ArrowRight, Sparkles } from "lucide-react"

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/15 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto fade-in-up">
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 text-sm font-medium text-primary mb-8">
            <Sparkles className="w-4 h-4" />
            Tecnología del Futuro
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-orbitron mb-8 leading-tight">
            <span className="neon-text">Optimiza tu almacén</span>
            <br />
            con tecnología del <span className="text-primary">futuro</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 font-space max-w-2xl mx-auto leading-relaxed">
            No esperes más para revolucionar tu gestión de inventarios. 
            Descubre cómo RacknovaMx puede transformar tu empresa hoy mismo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <GlassButton variant="neon" size="lg" className="group text-lg px-8 py-4">
              Pedir demo gratuita
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </GlassButton>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                Sin compromiso
              </div>
              <div className="w-px h-4 bg-border"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                Instalación gratuita
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary font-orbitron mb-2">+500</div>
              <div className="text-muted-foreground">Empresas confían en nosotros</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary font-orbitron mb-2">24/7</div>
              <div className="text-muted-foreground">Soporte técnico</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent font-orbitron mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime garantizado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}