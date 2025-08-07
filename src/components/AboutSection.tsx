import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Clock, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-health-dark">
            Nutri Juliana
          </h2>
          <p className="text-xl text-health-primary font-medium">
            Nutricionista Clínica e Esportiva
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Página de consulta nutricional com agendamento online e formulário de avaliação. 
            Ajudando pessoas a transformarem sua relação com a alimentação 
            e alcançarem seus objetivos de saúde!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 border-health-secondary/20 hover:shadow-lg transition-all duration-200">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-health-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-health-primary" />
              </div>
              <h3 className="text-xl font-semibold text-health-dark">8+ Anos</h3>
              <p className="text-muted-foreground">de experiência clínica</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-health-secondary/20 hover:shadow-lg transition-all duration-200">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-health-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-health-primary" />
              </div>
              <h3 className="text-xl font-semibold text-health-dark">500+</h3>
              <p className="text-muted-foreground">Pacientes atendidos</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-health-secondary/20 hover:shadow-lg transition-all duration-200">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-health-primary/10 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="w-8 h-8 text-health-primary" />
              </div>
              <h3 className="text-xl font-semibold text-health-dark">CRN</h3>
              <p className="text-muted-foreground">Certificada pelo Conselho</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-health-secondary/20 hover:shadow-lg transition-all duration-200">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-health-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-health-primary" />
              </div>
              <h3 className="text-xl font-semibold text-health-dark">24h</h3>
              <p className="text-muted-foreground">Suporte online</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-health-light rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-health-dark">
                Especializações
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-health-primary rounded-full"></div>
                  <span className="text-health-dark">Emagrecimento saudável</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-health-primary rounded-full"></div>
                  <span className="text-health-dark">Ganho de massa muscular</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-health-primary rounded-full"></div>
                  <span className="text-health-dark">Nutrição esportiva</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-health-primary rounded-full"></div>
                  <span className="text-health-dark">Transtornos alimentares</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-health-primary rounded-full"></div>
                  <span className="text-health-dark">Nutrição clínica</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-health-dark">
                Formação
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-health-dark">Graduação em Nutrição</h4>
                  <p className="text-sm text-muted-foreground">Universidade Federal - 2016</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-health-dark">Pós-graduação em Nutrição Clínica</h4>
                  <p className="text-sm text-muted-foreground">Instituto de Pesquisa - 2018</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-health-dark">Especialização em Nutrição Esportiva</h4>
                  <p className="text-sm text-muted-foreground">Centro de Estudos - 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;