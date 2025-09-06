import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Heart, Lightbulb, Shield, Zap } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Desarrollamos soluciones tecnológicas de vanguardia para revolucionar la gestión de inventarios."
  },
  {
    icon: Shield,
    title: "Confiabilidad",
    description: "Garantizamos sistemas robustos y seguros que funcionan 24/7 sin comprometer la operación."
  },
  {
    icon: Zap,
    title: "Eficiencia",
    description: "Optimizamos procesos para maximizar la productividad y minimizar costos operativos."
  },
  {
    icon: Heart,
    title: "Compromiso",
    description: "Nos dedicamos completamente al éxito de nuestros clientes con soporte continuo y personalizado."
  }
]

export const MissionVisionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background" id="quienes-somos">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-foreground">
            Quiénes Somos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos pioneros en la transformación digital de almacenes, 
            comprometidos con el futuro de la gestión inteligente de inventarios.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <Card className="corporate-card group fade-in-up">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-heading">Nuestra Misión</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Transformar la gestión de inventarios a través de tecnología inteligente y automatización, 
                proporcionando a las empresas herramientas innovadoras que optimicen sus operaciones, 
                reduzcan costos y mejoren la toma de decisiones estratégicas en tiempo real.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="corporate-card group fade-in-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-2xl font-heading">Nuestra Visión</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Ser la empresa líder en soluciones de inventario inteligente en México y Latinoamérica, 
                reconocida por nuestra innovación tecnológica, excelencia en el servicio y por democratizar 
                el acceso a herramientas de gestión avanzada para empresas de todos los tamaños.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold font-heading mb-4 text-foreground">
              Nuestros Valores
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada decisión y acción en RacknovaMx
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="corporate-card text-center group fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                    <value.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-lg font-heading">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="mt-20 fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Card className="corporate-card p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary font-heading">2024</div>
                <div className="text-sm text-muted-foreground">Año de Fundación</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent font-heading">50+</div>
                <div className="text-sm text-muted-foreground">Empresas Atendidas</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-secondary font-heading">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime del Sistema</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary font-heading">24/7</div>
                <div className="text-sm text-muted-foreground">Soporte Técnico</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}