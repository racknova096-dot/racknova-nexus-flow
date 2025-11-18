import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LogIn, MessageCircle, Users } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.jpg"
              alt="Logo Racknova"
              className="w-12 h-12 object-contain rounded-lg"
            />

            <span className="text-xl font-bold font-heading text-foreground">
              RacknovaMx
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className="text-muted-foreground hover:text-primary transition-colors hover-underline"
            >
              Inicio
            </a>
            <a
              href="#quienes-somos"
              className="text-muted-foreground hover:text-primary transition-colors hover-underline"
            >
              Quiénes Somos
            </a>
            <a
              href="#sistema"
              className="text-muted-foreground hover:text-primary transition-colors hover-underline"
            >
              Sistema
            </a>
            <a
              href="#contacto"
              className="text-muted-foreground hover:text-primary transition-colors hover-underline"
            >
              Contacto
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-primary"
              onClick={() =>
                window.open("https://wa.me/524445397173", "_blank")
              }
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              Quiénes Somos
            </Button>

            <Button
              size="sm"
              className="corporate-button-primary"
              onClick={() =>
                (window.location.href = "http://localhost:8080/login")
              }
            >
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
