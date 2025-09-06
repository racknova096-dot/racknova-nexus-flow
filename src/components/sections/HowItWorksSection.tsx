import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Package, Database, Eye, FileText } from "lucide-react"

const steps = [
  {
    icon: Package,
    title: "Recibe",
    description: "Registra productos entrantes con códigos únicos"
  },
  {
    icon: Database,
    title: "Registra", 
    description: "Asigna ubicaciones automáticamente en el rack 3×6"
  },
  {
    icon: Eye,
    title: "Monitorea",
    description: "Visualiza estado en tiempo real desde cualquier dispositivo"
  },
  {
    icon: FileText,
    title: "Reporta",
    description: "Genera reportes ejecutivos y métricas de rendimiento"
  }
]

export const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-foreground">
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proceso simple y eficiente en 4 pasos para digitalizar completamente tu inventario.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="corporate-card text-center fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-heading">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}