import { Heart, Instagram, Facebook, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-health-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Nutri Mariana</h3>
            <p className="text-health-secondary text-sm">
              Transformando vidas através da nutrição personalizada e cuidado integral com a saúde.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-health-primary/20 rounded-full flex items-center justify-center hover:bg-health-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-health-primary/20 rounded-full flex items-center justify-center hover:bg-health-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-health-primary/20 rounded-full flex items-center justify-center hover:bg-health-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-health-primary/20 rounded-full flex items-center justify-center hover:bg-health-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-health-secondary hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" className="text-health-secondary hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#services" className="text-health-secondary hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#contact" className="text-health-secondary hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-health-secondary">Consulta Inicial</span></li>
              <li><span className="text-health-secondary">Acompanhamento</span></li>
              <li><span className="text-health-secondary">Consulta Online</span></li>
              <li><span className="text-health-secondary">Nutrição Esportiva</span></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <ul className="space-y-2 text-sm text-health-secondary">
              <li>(11) 99999-9999</li>
              <li>contato@nutrimariana.com.br</li>
              <li>Rua das Flores, 123<br />Centro, São Paulo - SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-health-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-health-secondary">
              © 2024 Nutri Mariana. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-1 text-sm text-health-secondary">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-health-primary" />
              <span>para sua saúde</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;