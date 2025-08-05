import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-health-dark">
            Agende sua Consulta
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco ou preencha o formulário para agendar sua consulta. 
            Estamos aqui para ajudar você em sua jornada de saúde.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-health-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-health-dark">
                  Informações de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-health-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-health-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-health-dark">Endereço</h4>
                    <p className="text-muted-foreground">
                      Rua das Flores, 123 - Sala 456<br />
                      Centro, São Paulo - SP<br />
                      CEP: 01234-567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-health-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-health-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-health-dark">Telefone</h4>
                    <p className="text-muted-foreground">
                      (11) 99999-9999<br />
                      (11) 3333-3333
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-health-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-health-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-health-dark">E-mail</h4>
                    <p className="text-muted-foreground">
                      contato@nutrimariana.com.br<br />
                      agendamento@nutrimariana.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-health-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-health-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-health-dark">Horário de Funcionamento</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 12h</p>
                      <Badge variant="outline" className="text-xs border-health-primary text-health-primary">
                        Domingo: Fechado
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-health-light rounded-2xl p-6">
              <h3 className="text-xl font-bold text-health-dark mb-4">
                Tecnologias Utilizadas
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-health-primary/10 text-health-primary border-health-primary/20">
                  React
                </Badge>
                <Badge variant="secondary" className="bg-health-primary/10 text-health-primary border-health-primary/20">
                  Calendar API
                </Badge>
                <Badge variant="secondary" className="bg-health-primary/10 text-health-primary border-health-primary/20">
                  Forms
                </Badge>
                <Badge variant="secondary" className="bg-health-primary/10 text-health-primary border-health-primary/20">
                  TypeScript
                </Badge>
                <Badge variant="secondary" className="bg-health-primary/10 text-health-primary border-health-primary/20">
                  Tailwind CSS
                </Badge>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-health-secondary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-health-dark">
                Formulário de Agendamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-health-dark">Nome Completo</Label>
                    <Input 
                      id="name" 
                      placeholder="Seu nome completo"
                      className="border-health-secondary/30 focus:border-health-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-health-dark">Telefone</Label>
                    <Input 
                      id="phone" 
                      placeholder="(11) 99999-9999"
                      className="border-health-secondary/30 focus:border-health-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-health-dark">E-mail</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com"
                    className="border-health-secondary/30 focus:border-health-primary"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-health-dark">Tipo de Consulta</Label>
                    <Select>
                      <SelectTrigger className="border-health-secondary/30 focus:border-health-primary">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inicial">Consulta Inicial</SelectItem>
                        <SelectItem value="retorno">Retorno/Acompanhamento</SelectItem>
                        <SelectItem value="online">Consulta Online</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-health-dark">Data Preferida</Label>
                    <Input 
                      id="date" 
                      type="date"
                      className="border-health-secondary/30 focus:border-health-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-health-dark">Mensagem (Opcional)</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Conte-nos um pouco sobre seus objetivos ou dúvidas..."
                    className="border-health-secondary/30 focus:border-health-primary min-h-24"
                  />
                </div>

                <Button variant="health" size="lg" className="w-full text-lg py-6">
                  <Send className="w-5 h-5" />
                  Enviar Solicitação
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Entraremos em contato em até 24 horas para confirmar seu agendamento.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;