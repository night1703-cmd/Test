
export interface ServiceItem {
  title: string;
  description: string;
  category: 'facilities' | 'security' | 'technical';
  details: string[];
}

export interface ValueCard {
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
