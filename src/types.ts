export type Category = 'Logo Design' | 'Social Media' | 'Video Creation' | 'Brand Identity';

export interface PortfolioItem {
  id: string;
  title: string;
  category: Category;
  image: string;
  description: string;
  process?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}
