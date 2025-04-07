export interface Item {
  href: string;
  icon: React.ReactNode;
}

export interface NavBarItem {
  nav: Item[];
  sub: Item[];
}
