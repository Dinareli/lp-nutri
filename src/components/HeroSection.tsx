import { Button } from "@/components/ui/button";
import { Calendar, Heart, Users } from "lucide-react";
import nutritionistImage from "@/assets/nutritionist-hero.jpg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-health-light to-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-health-dark leading-tight">
                Nutritionist
                <span className="block text-health-primary">Consultation</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Seja qual for seu objetivo: perder peso, ganhar massa muscular ou cuidar da 
                sua saúde, vou ajudá-la(o) a criar o plano alimentar perfeito para você.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="health" size="lg" className="text-lg px-8 py-6">
                <Calendar className="w-5 h-5" />
                Agendar Agora
              </Button>
              <Button variant="health-outline" size="lg" className="text-lg px-8 py-6">
                Saiba Mais
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-health-secondary/30">
              <div className="text-center">
                <div className="w-12 h-12 bg-health-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Heart className="w-6 h-6 text-health-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Cuidado Personalizado</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-health-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Calendar className="w-6 h-6 text-health-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Agendamento Fácil</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-health-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-health-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Acompanhamento</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={nutritionistImage} 
                alt="Nutricionista Mariana" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-health-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-health-primary rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-health-dark">500+ Pacientes</p>
                  <p className="text-sm text-muted-foreground">Transformados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;