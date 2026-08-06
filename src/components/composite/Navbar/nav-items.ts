export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: "home", label: "Início" },
  { id: "services", label: "Serviços" },
  { id: "projects", label: "Projetos" },
  { id: "method", label: "Método" },
  { id: "about", label: "Sobre" },
  { id: "contact", label: "Contato" },
];
