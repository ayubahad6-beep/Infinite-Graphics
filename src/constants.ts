import { PortfolioItem, Service } from './types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'Modern Tech Logo',
    category: 'Logo Design',
    image: 'https://picsum.photos/seed/logo1/800/600',
    description: 'A minimalist logo for a software development firm.',
    process: 'Sketched 5 concepts, refined 2, finalized the geometric mark.'
  },
  {
    id: '2',
    title: 'Summer Fashion Campaign',
    category: 'Social Media',
    image: 'https://picsum.photos/seed/social1/800/600',
    description: 'Instagram grid design for a boutique brand.',
    process: 'Focused on vibrant colors and lifestyle imagery.'
  },
  {
    id: '3',
    title: 'Product Launch Teaser',
    category: 'Video Creation',
    image: 'https://picsum.photos/seed/video1/800/600',
    description: '30-second motion graphics for a gadget reveal.',
    process: 'Storyboarding followed by high-energy transitions.'
  },
  {
    id: '4',
    title: 'Corporate Identity Kit',
    category: 'Brand Identity',
    image: 'https://picsum.photos/seed/brand1/800/600',
    description: 'Complete stationery and brand guidelines.',
    process: 'Defined typography, color palette, and usage rules.'
  },
  {
    id: '5',
    title: 'Eco-Friendly Packaging',
    category: 'Logo Design',
    image: 'https://picsum.photos/seed/logo2/800/600',
    description: 'Logo and packaging for an organic food brand.',
    process: 'Used earthy tones and organic shapes.'
  },
  {
    id: '6',
    title: 'Fitness App UI Assets',
    category: 'Social Media',
    image: 'https://picsum.photos/seed/social2/800/600',
    description: 'Visual assets for a fitness tracking application.',
    process: 'Created high-contrast icons and bold typography.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'logo',
    title: 'Logo Design',
    description: 'Crafting unique and memorable visual identities that stand out.',
    icon: 'PenTool',
    features: ['Custom Concepts', 'Vector Files', 'Brand Guidelines']
  },
  {
    id: 'social',
    title: 'Social Media',
    description: 'Engaging content tailored for Instagram, Facebook, and LinkedIn.',
    icon: 'Share2',
    features: ['Post Design', 'Story Templates', 'Ad Creatives']
  },
  {
    id: 'video',
    title: 'Video Creation',
    description: 'Dynamic motion graphics and video editing for your brand.',
    icon: 'Video',
    features: ['Motion Graphics', 'Promo Videos', 'Reels Editing']
  },
  {
    id: 'brand',
    title: 'Brand Identity',
    description: 'Comprehensive branding packages for businesses of all sizes.',
    icon: 'Layout',
    features: ['Color Palettes', 'Typography', 'Stationery Design']
  }
];
