import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-health-primary text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-white/20 px-3 py-1 rounded-full">
              <span className="text-sm font-semibold">Saúde</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-health-secondary transition-colors">
              Início
            </a>
            <a href="#services" className="hover:text-health-secondary transition-colors">
              Serviços
            </a>
            <a href="#about" className="hover:text-health-secondary transition-colors">
              Sobre
            </a>
            <a href="#contact" className="hover:text-health-secondary transition-colors">
              Contato
            </a>
          </nav>

          <Button variant="health-outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-health-primary">
            Agendar Consulta
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;