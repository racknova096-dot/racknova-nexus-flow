import { GlassButton } from "@/components/ui/glass-button"
import { ArrowRight, Zap } from "lucide-react"
import dashboardImage from "@/assets/dashboard-hero.jpg"

export const HeroSection = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm font-medium text-primary mb-4">
                <Zap className="w-4 h-4" />
                RacknovaMx - Inventario 4.0
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold font-orbitron leading-tight">
                <span className="neon-text">Sistema de Gestión</span>
                <br />
                <span className="text-foreground">de Inventarios</span>
                <br />
                <span className="text-primary">Semiautomático</span>
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-2xl font-space leading-relaxed">
              Control en tiempo real, seguridad avanzada y eficiencia para tu empresa. 
              Revoluciona tu almacén con tecnología del futuro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <GlassButton variant="neon" size="lg" className="group">
                Solicitar información
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </GlassButton>
              <GlassButton variant="hero" size="lg">
                Ver demo
              </GlassButton>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-orbitron">99.9%</div>
                <div className="text-sm text-muted-foreground">Precisión</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary font-orbitron">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoreo</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent font-orbitron">-75%</div>
                <div className="text-sm text-muted-foreground">Tiempo</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Dashboard Image */}
          <div className="relative float-animation">
            <div className="relative">
              <img 
                src={dashboardImage} 
                alt="Dashboard futurista de gestión de inventarios"
                className="w-full rounded-2xl shadow-[0_25px_50px_-12px_hsla(0,0%,0%,0.25)] border border-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}