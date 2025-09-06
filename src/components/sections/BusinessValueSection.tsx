import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, TrendingUp, Clock, Scale } from "lucide-react"

const values = [
  {
    icon: CheckCircle,
    title: "Reduce errores humanos",
    description: "Automatización de procesos críticos y validaciones en tiempo real"
  },
  {
    icon: TrendingUp,
    title: "Mejora tiempos de operación",
    description: "Acceso instantáneo a información sin desplazamientos físicos"
  },
  {
    icon: Clock,
    title: "Soporta Lean Manufacturing y JIT",
    description: "Filosofías Just in Time con datos precisos y actualizados"
  },
  {
    icon: Scale,
    title: "Escalable y adaptable",
    description: "Crece con tu empresa y se adapta a diferentes configuraciones"
  }
]

export const BusinessValueSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground">
                Valor Real para tu Empresa
              </h2>
              <p className="text-xl text-muted-foreground">
                Más que un sistema de inventario, es una herramienta estratégica 
                que impulsa la eficiencia operacional y la toma de decisiones informada.
              </p>
            </div>
            
            <div className="space-y-4">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-background/50 transition-colors duration-200 fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground font-heading">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - Stats */}
          <div className="space-y-6 fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Card className="corporate-card p-8 text-center">
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary font-heading">ROI</div>
                  <div className="text-lg text-foreground font-semibold">Retorno de Inversión</div>
                  <div className="text-sm text-muted-foreground">
                    Recupera tu inversión en menos de 6 meses
                  </div>
                </div>
                
                <div className="border-t border-border pt-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-accent font-heading">↑95%</div>
                      <div className="text-xs text-muted-foreground">Precisión</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary font-heading">↓60%</div>
                      <div className="text-xs text-muted-foreground">Tiempo</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary font-heading">↓80%</div>
                      <div className="text-xs text-muted-foreground">Errores</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}