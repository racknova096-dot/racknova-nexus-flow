import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

export const TestimonialSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto fade-in-up">
          <Card className="corporate-card">
            <CardContent className="p-8 lg:p-12">
              <div className="space-y-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-4 -left-2 w-8 h-8 text-primary/20" />
                  <blockquote className="text-xl lg:text-2xl text-center text-foreground font-medium leading-relaxed pl-6">
                    "RacknovaMx transformó completamente nuestra operación de almacén. 
                    Redujimos los tiempos de búsqueda en un 75% y eliminamos prácticamente 
                    todos los errores de inventario. La inversión se pagó sola en 4 meses."
                  </blockquote>
                </div>
                
                <div className="text-center pt-6 border-t border-border">
                  <div className="space-y-2">
                    <div className="font-semibold text-foreground font-heading">
                      María González
                    </div>
                    <div className="text-muted-foreground">
                      Directora de Operaciones, Industrias MexPro
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Cliente desde 2024
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}