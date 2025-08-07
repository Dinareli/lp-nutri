import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [goal, setGoal] = useState<string>("");
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
                      contato@nutriJuliana.com.br<br />
                      agendamento@nutriJuliana.com.br
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
                    <Label htmlFor="fullName" className="text-health-dark">Nome completo</Label>
                    <Input
                      id="fullName"
                      placeholder="Seu nome completo"
                      className="border-health-secondary/30 focus:border-health-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-health-dark">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="border-health-secondary/30 focus:border-health-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="birthDate" className="text-health-dark">Data de nascimento</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      className="border-health-secondary/30 focus:border-health-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-health-dark">Telefone para contato</Label>
                    <Input
                      id="phone"
                      placeholder="(11) 99999-9999"
                      className="border-health-secondary/30 focus:border-health-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="referral" className="text-health-dark">Como soube dos serviços</Label>
                  <Select>
                    <SelectTrigger className="border-health-secondary/30 focus:border-health-primary">
                      <SelectValue placeholder="Selecione uma opção" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google</SelectItem>
                      <SelectItem value="redes">Redes sociais</SelectItem>
                      <SelectItem value="indicacao">Indicação</SelectItem>
                      <SelectItem value="site">Site</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goal" className="text-health-dark">Objetivo da consulta</Label>
                  <Select value={goal} onValueChange={setGoal}>
                    <SelectTrigger className="border-health-secondary/30 focus:border-health-primary">
                      <SelectValue placeholder="Selecione o objetivo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emagrecimento">Emagrecimento</SelectItem>
                      <SelectItem value="ganho-massa">Ganho de massa muscular</SelectItem>
                      <SelectItem value="qualidade-vida">Melhorar qualidade de vida</SelectItem>
                      <SelectItem value="controle-doencas">Controle de doenças (ex.: diabetes, hipertensão)</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {goal === "outro" && (
                  <div className="space-y-2">
                    <Label htmlFor="goalOther" className="text-health-dark">Descreva seu objetivo</Label>
                    <Input
                      id="goalOther"
                      placeholder="Digite seu objetivo"
                      className="border-health-secondary/30 focus:border-health-primary"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="careType" className="text-health-dark">Tipo de atendimento</Label>
                  <Select>
                    <SelectTrigger className="border-health-secondary/30 focus:border-health-primary">
                      <SelectValue placeholder="Selecione o tipo de atendimento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="presencial">Presencial</SelectItem>
                      <SelectItem value="online">Online</SelectItem>
                    </SelectContent>
                  </Select>
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