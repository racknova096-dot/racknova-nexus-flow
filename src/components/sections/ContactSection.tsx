import { GlassButton } from "@/components/ui/glass-button"
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle } from "@/components/ui/glass-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background/90 to-background relative" id="contacto">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold font-orbitron mb-6">
            <span className="neon-text">Contáctanos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-space">
            ¿Listo para transformar tu gestión de inventarios? 
            Contáctanos y descubre cómo RacknovaMx puede ayudarte.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <GlassCard variant="neon" className="fade-in-up">
            <GlassCardHeader>
              <GlassCardTitle className="text-2xl mb-2">
                Solicita información
              </GlassCardTitle>
              <p className="text-muted-foreground font-space">
                Completa el formulario y nos pondremos en contacto contigo.
              </p>
            </GlassCardHeader>
            <GlassCardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground font-space">
                      Nombre completo
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="glass-button border-white/20 bg-white/5 text-foreground placeholder-muted-foreground"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-foreground font-space">
                      Empresa
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="glass-button border-white/20 bg-white/5 text-foreground placeholder-muted-foreground"
                      placeholder="Nombre de tu empresa"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground font-space">
                    Correo electrónico
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="glass-button border-white/20 bg-white/5 text-foreground placeholder-muted-foreground"
                    placeholder="tu.email@empresa.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground font-space">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="glass-button border-white/20 bg-white/5 text-foreground placeholder-muted-foreground min-h-[120px] resize-y"
                    placeholder="Cuéntanos sobre tu proyecto y necesidades..."
                    required
                  />
                </div>
                
                <GlassButton type="submit" variant="neon" size="lg" className="w-full group">
                  Enviar mensaje
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </GlassButton>
              </form>
            </GlassCardContent>
          </GlassCard>
          
          {/* Contact Info */}
          <div className="space-y-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-semibold font-orbitron mb-6 text-foreground">
                Información de contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-1">Email</div>
                    <div className="text-muted-foreground font-space">contacto@racknovamx.com</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-1">Teléfono</div>
                    <div className="text-muted-foreground font-space">+52 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-1">Ubicación</div>
                    <div className="text-muted-foreground font-space">Ciudad de México, México</div>
                  </div>
                </div>
              </div>
            </div>
            
            <GlassCard variant="benefit" className="p-6">
              <div className="text-center">
                <div className="text-lg font-semibold font-orbitron text-foreground mb-2">
                  Respuesta garantizada
                </div>
                <div className="text-muted-foreground font-space mb-4">
                  Te contactaremos en menos de 24 horas
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-primary">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  Disponible de lunes a viernes
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}