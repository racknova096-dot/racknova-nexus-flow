import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Shield, BarChart3, Settings } from "lucide-react"

const benefits = [
  {
    icon: Activity,
    title: "Control en Tiempo Real",
    description: "Estado del rack 3×6 al instante. Visualiza qué posiciones están ocupadas o libres en segundos.",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Seguridad por Roles",
    description: "Sistema de permisos admin/operador con auditoría completa de todas las operaciones.",
    color: "text-primary"
  },
  {
    icon: BarChart3,
    title: "Reportes Ejecutivos",
    description: "Métricas clave y reportes exportables para toma de decisiones informada.",
    color: "text-accent"
  },
  {
    icon: Settings,
    title: "Integración con Sensores/ERP",
    description: "Compatible y escalable. Se integra con sistemas existentes sin complicaciones.",
    color: "text-secondary"
  }
]

export const BenefitsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-foreground">
            Beneficios Inmediatos para tu Operación
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Optimiza tu gestión de inventarios con herramientas profesionales 
            diseñadas para empresas que buscan eficiencia y control.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="corporate-card text-center group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`mx-auto w-16 h-16 rounded-lg bg-${benefit.color.split('-')[1]}/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <CardTitle className="text-lg font-heading">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}