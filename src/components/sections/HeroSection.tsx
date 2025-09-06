import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import dashboardImage from "@/assets/dashboard-hero.jpg"

export const HeroSection = () => {
  return (
    <section className="split-hero bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-16">
          {/* Left Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold font-heading text-foreground leading-tight">
                Inventario 4.0 para{" "}
                <span className="text-primary">Operación Confiable</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Control en tiempo real, seguridad y reportes para decisiones rápidas.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="corporate-button-primary group">
                Probar demo
                <Play className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="corporate-button-outline">
                Ver características
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-heading">99.9%</div>
                <div className="text-sm text-muted-foreground">Precisión</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent font-heading">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoreo</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary font-heading">-75%</div>
                <div className="text-sm text-muted-foreground">Tiempo</div>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="split-hero-divider"></div>
          
          {/* Right Content - Dashboard Image */}
          <div className="relative fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img 
                src={dashboardImage} 
                alt="Dashboard profesional de gestión de inventarios RacknovaMx"
                className="w-full rounded-lg shadow-lg border border-border"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}