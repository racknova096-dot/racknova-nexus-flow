import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export const ContactSection = () => {
  return (
    <section className="py-24 bg-muted/30" id="contacto">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-foreground">
            Contacto
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Listo para digitalizar tu inventario? Contáctanos para una demostración 
            personalizada de RacknovaMx.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="corporate-card fade-in-up">
            <CardHeader>
              <CardTitle className="font-heading">Solicitar Información</CardTitle>
              <CardDescription>
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input id="nombre" placeholder="Tu nombre completo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input id="empresa" placeholder="Nombre de tu empresa" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input id="email" type="email" placeholder="correo@empresa.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="telefono">Teléfono</Label>
                <Input id="telefono" type="tel" placeholder="+52 (55) 1234-5678" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea 
                  id="mensaje" 
                  placeholder="Cuéntanos sobre tu operación actual y cómo podemos ayudarte..."
                  className="min-h-24"
                />
              </div>
              
              <Button className="w-full corporate-button-primary">
                Enviar Solicitud
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-heading text-foreground">
                Información de Contacto
              </h3>
              <p className="text-muted-foreground">
                Nuestro equipo de especialistas está listo para ayudarte a optimizar 
                tu gestión de inventarios.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">Email</div>
                  <div className="text-muted-foreground">contacto@racknovamx.com</div>
                  <div className="text-muted-foreground">soporte@racknovamx.com</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">Teléfono</div>
                  <div className="text-muted-foreground">+52 (55) 1234-5678</div>
                  <div className="text-muted-foreground">Lun - Vie: 9:00 AM - 6:00 PM</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">Oficinas</div>
                  <div className="text-muted-foreground">Ciudad de México, México</div>
                  <div className="text-muted-foreground">Atención presencial con cita previa</div>
                </div>
              </div>
            </div>
            
            <Card className="corporate-card p-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground font-heading">
                  ¿Necesitas una demostración?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Agenda una demo personalizada de 30 minutos y descubre cómo 
                  RacknovaMx puede transformar tu operación de inventarios.
                </p>
                <Button variant="outline" className="w-full corporate-button-outline">
                  Agendar Demo
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}