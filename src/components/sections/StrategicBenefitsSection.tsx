import { GlassCard, GlassCardContent, GlassCardDescription, GlassCardHeader, GlassCardTitle } from "@/components/ui/glass-card"
import { Factory, Target, TrendingDown } from "lucide-react"

const strategicBenefits = [
  {
    icon: Factory,
    title: "Integración con Lean Manufacturing",
    description: "Perfecta sinergia con metodologías lean para eliminar desperdicios y optimizar procesos de producción.",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: Target,
    title: "Filosofía Just in Time",
    description: "Mejora el control con entregas precisas justo cuando se necesitan, reduciendo inventario y costos de almacenamiento.",
    gradient: "from-secondary/20 to-secondary/5"
  },
  {
    icon: TrendingDown,
    title: "Reducción de errores y costos",
    description: "Minimiza errores humanos y reduce costos operativos mediante automatización inteligente y monitoreo continuo.",
    gradient: "from-accent/20 to-accent/5"
  }
]

export const StrategicBenefitsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background/95 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold font-orbitron mb-6">
            Beneficios <span className="neon-text">Estratégicos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-space">
            Impulsa la transformación digital de tu empresa con metodologías 
            probadas y tecnología de última generación.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {strategicBenefits.map((benefit, index) => (
            <GlassCard 
              key={index} 
              variant="neon" 
              className="group fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <GlassCardHeader>
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 neon-glow`}>
                  <benefit.icon className="w-10 h-10 text-foreground" />
                </div>
                <GlassCardTitle className="text-xl mb-4">
                  {benefit.title}
                </GlassCardTitle>
              </GlassCardHeader>
              <GlassCardContent>
                <GlassCardDescription className="text-base leading-relaxed">
                  {benefit.description}
                </GlassCardDescription>
              </GlassCardContent>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}