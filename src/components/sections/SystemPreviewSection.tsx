import { GlassCard } from "@/components/ui/glass-card"
import { Eye, Grid3X3, Zap } from "lucide-react"
import rackSystemImage from "@/assets/rack-system.jpg"

export const SystemPreviewSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/90 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-primary/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold font-orbitron leading-tight">
                <span className="neon-text">Vista Previa</span>
                <br />
                del Sistema
              </h2>
              <p className="text-xl text-muted-foreground font-space leading-relaxed">
                Visualiza qué posiciones están ocupadas o libres en segundos. 
                Nuestro rack digitalizado de 3 niveles y 18 espacios te ofrece 
                control total con tecnología de vanguardia.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <GlassCard variant="benefit" className="text-center p-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Grid3X3 className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary font-orbitron">18</div>
                <div className="text-sm text-muted-foreground">Posiciones</div>
              </GlassCard>
              
              <GlassCard variant="benefit" className="text-center p-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary font-orbitron">100%</div>
                <div className="text-sm text-muted-foreground">Visibilidad</div>
              </GlassCard>
              
              <GlassCard variant="benefit" className="text-center p-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent font-orbitron">&lt;1s</div>
                <div className="text-sm text-muted-foreground">Respuesta</div>
              </GlassCard>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold font-orbitron text-foreground">
                Características principales:
              </h3>
              <ul className="space-y-3 text-muted-foreground font-space">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Indicadores LED en tiempo real para cada posición
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  Interface web responsiva y intuitiva
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  Alertas automáticas de stock bajo o alto
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Historial completo de movimientos
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right Content - System Image */}
          <div className="relative float-animation">
            <div className="relative">
              <img 
                src={rackSystemImage} 
                alt="Sistema de rack digitalizado con 3 niveles y 18 posiciones"
                className="w-full rounded-2xl shadow-[0_25px_50px_-12px_hsla(0,0%,0%,0.25)] border border-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 via-primary/20 to-accent/20 rounded-2xl blur opacity-75 animate-pulse"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 glass-card p-3 animate-pulse">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-primary font-medium">En línea</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 glass-card p-3">
                <div className="text-xs text-muted-foreground">Ocupación</div>
                <div className="text-lg font-bold text-secondary font-orbitron">78%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}