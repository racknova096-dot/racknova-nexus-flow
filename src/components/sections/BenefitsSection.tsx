import { GlassCard, GlassCardContent, GlassCardDescription, GlassCardHeader, GlassCardTitle } from "@/components/ui/glass-card"
import { Clock, Eye, Shield, Settings } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Ahorro de tiempo",
    description: "Ya no necesitas ir hasta el almacén. Controla todo desde tu oficina en tiempo real.",
    color: "text-primary"
  },
  {
    icon: Eye,
    title: "Control en tiempo real",
    description: "Visualiza el estado completo de tu rack 3x6 con información actualizada al instante.",
    color: "text-secondary"
  },
  {
    icon: Shield,
    title: "Seguridad avanzada",
    description: "Acceso restringido por login y control de permisos para máxima protección de datos.",
    color: "text-accent"
  },
  {
    icon: Settings,
    title: "Adaptabilidad total",
    description: "Sistema flexible que se ajusta a las necesidades específicas de cada cliente.",
    color: "text-primary"
  }
]

export const BenefitsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/95 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold font-orbitron mb-6">
            <span className="neon-text">Beneficios</span> Inmediatos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-space">
            Transforma tu gestión de inventarios con tecnología de vanguardia 
            y obtén resultados desde el primer día.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <GlassCard 
              key={index} 
              variant="benefit" 
              className="text-center group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <GlassCardHeader>
                <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-${benefit.color.split('-')[1]}/20 to-${benefit.color.split('-')[1]}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <GlassCardTitle className="text-lg">
                  {benefit.title}
                </GlassCardTitle>
              </GlassCardHeader>
              <GlassCardContent>
                <GlassCardDescription className="text-center">
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