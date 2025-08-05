import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, FileText, Video } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Consulta Inicial",
      price: "R$ 150",
      duration: "60 min",
      description: "Avaliação completa do seu estado nutricional e definição de objetivos",
      features: [
        "Anamnese detalhada",
        "Avaliação antropométrica",
        "Análise de exames",
        "Plano alimentar personalizado",
        "Material educativo"
      ],
      popular: false
    },
    {
      title: "Acompanhamento",
      price: "R$ 100",
      duration: "45 min",
      description: "Consultas de retorno para ajustes e acompanhamento do progresso",
      features: [
        "Reavaliação do progresso",
        "Ajustes no plano alimentar",
        "Orientações nutricionais",
        "Suporte motivacional",
        "Receitas personalizadas"
      ],
      popular: true
    },
    {
      title: "Consulta Online",
      price: "R$ 120",
      duration: "50 min",
      description: "Atendimento à distância com a mesma qualidade da consulta presencial",
      features: [
        "Videochamada HD",
        "Envio de materiais",
        "Plano alimentar digital",
        "Suporte via WhatsApp",
        "Flexibilidade de horários"
      ],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-health-light">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-health-dark">
            Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o tipo de acompanhamento que melhor se adapta às suas necessidades 
            e estilo de vida
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative border-2 transition-all duration-200 hover:shadow-xl ${
                service.popular 
                  ? 'border-health-primary shadow-lg scale-105' 
                  : 'border-health-secondary/30 hover:border-health-primary/50'
              }`}
            >
              {service.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-health-primary text-white">
                  Mais Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-health-dark">
                  {service.title}
                </CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-health-primary">
                    {service.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {service.duration}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-health-primary flex-shrink-0" />
                      <span className="text-sm text-health-dark">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={service.popular ? "health" : "health-outline"} 
                  className="w-full"
                  size="lg"
                >
                  <Calendar className="w-4 h-4" />
                  Agendar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-health-dark">
                Como funciona o atendimento?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-health-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Calendar className="w-6 h-6 text-health-primary" />
                  </div>
                  <h4 className="font-semibold text-health-dark">1. Agendamento</h4>
                  <p className="text-sm text-muted-foreground">
                    Escolha o melhor horário através do nosso sistema online
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-health-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <FileText className="w-6 h-6 text-health-primary" />
                  </div>
                  <h4 className="font-semibold text-health-dark">2. Avaliação</h4>
                  <p className="text-sm text-muted-foreground">
                    Preencha o formulário de avaliação nutricional
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-health-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Video className="w-6 h-6 text-health-primary" />
                  </div>
                  <h4 className="font-semibold text-health-dark">3. Consulta</h4>
                  <p className="text-sm text-muted-foreground">
                    Atendimento personalizado e plano alimentar exclusivo
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <Button variant="health" size="lg" className="text-lg px-8 py-6">
                <Calendar className="w-5 h-5" />
                Iniciar Agendamento
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;