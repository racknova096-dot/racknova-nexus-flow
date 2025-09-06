import { Separator } from "@/components/ui/separator"

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold font-heading text-primary">
                RacknovaMx
              </h3>
              <p className="text-sm text-muted-foreground">
                Inventario 4.0 - Sistema de gestión semiautomático para operaciones confiables
              </p>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground font-heading">Navegación</h4>
            <nav className="space-y-2">
              <a href="#inicio" className="block text-muted-foreground hover:text-primary transition-colors hover-underline">
                Inicio
              </a>
              <a href="#sistema" className="block text-muted-foreground hover:text-primary transition-colors hover-underline">
                Sistema
              </a>
              <a href="#contacto" className="block text-muted-foreground hover:text-primary transition-colors hover-underline">
                Contacto
              </a>
            </nav>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground font-heading">Contacto</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>contacto@racknovamx.com</p>
              <p>+52 (55) 1234-5678</p>
              <p>Ciudad de México, México</p>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 RacknovaMx - Proyecto Inventario 4.0. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <button className="hover:text-primary transition-colors hover-underline">
              Privacidad
            </button>
            <button className="hover:text-primary transition-colors hover-underline">
              Términos
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}