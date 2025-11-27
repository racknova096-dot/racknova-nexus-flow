import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import dashboardImage from "@/assets/dashboard-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-16">
          {/* Left Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                ✨ Nueva Era del Inventario Inteligente
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold font-heading text-foreground leading-tight">
                Una nueva era de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                  gestión de inventarios
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Revoluciona tu almacén con tecnología de vanguardia. Control en
                tiempo real.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="corporate-button-primary group px-8 py-4 text-lg"
              >
                Explorar Plataforma
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="corporate-button-outline px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver DEMOSTRACION
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-heading">
                  99.9%
                </div>
                <div className="text-sm text-muted-foreground">Precisión</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent font-heading">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">Monitoreo</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary font-heading">
                  -85%
                </div>
                <div className="text-sm text-muted-foreground">Errores</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Image */}
          <div
            className="relative fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <img
                src={dashboardImage}
                alt="Dashboard inteligente de gestión de inventarios con IA - RacknovaMx"
                className="relative w-full rounded-xl shadow-2xl border border-border/50 transform group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up"
        style={{ animationDelay: "1s" }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Descubre más</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
