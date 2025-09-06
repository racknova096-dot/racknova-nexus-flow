import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export const CTASection = () => {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 fade-in-up">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground">
              Optimiza tu Almacén con Tecnología Confiable
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Únete a empresas que ya confían en RacknovaMx para digitalizar 
              sus operaciones de inventario con resultados medibles.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="corporate-button-primary group">
              Solicitar información
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="corporate-button-outline">
              Agendar demostración
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Sin compromisos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Implementación rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Soporte técnico incluido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}