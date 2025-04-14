export type Testimonial = {
  id: string;
  name: string;
  position: string;
  company: string;
  quote: string;
  imageSrc: string;
};

export const testimonialData: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    position: 'Marketing Director',
    company: 'TechGrowth Inc.',
    quote: 'We grew our YouTube channel from 0 to 50k subscribers in just 3 months with Aevitas. Their AI-powered content creation process is unmatched in quality and efficiency.',
    imageSrc: '/images/testimonials/testimonial-1.jpg',
  },
  {
    id: '2',
    name: 'Michael Chen',
    position: 'CEO',
    company: 'InnovateX',
    quote: 'Aevitas transformed our digital presence completely. The consistency and quality of videos across all platforms increased our engagement by 300% in the first month.',
    imageSrc: '/images/testimonials/testimonial-2.jpg',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    position: 'Social Media Manager',
    company: 'Global Brands Co.',
    quote: 'Working with Aevitas has been an absolute game-changer. Their 24/7 editing team delivers incredible quality on tight deadlines, and the multi-platform approach has given us incredible reach.',
    imageSrc: '/images/testimonials/testimonial-3.jpg',
  },
  {
    id: '4',
    name: 'David Williams',
    position: 'Founder',
    company: 'StreamLabs',
    quote: 'The AI avatars and voice technology from Aevitas allowed us to create content at scale without hiring on-camera talent. Our content output increased by 500% while maintaining consistent quality.',
    imageSrc: '/images/testimonials/testimonial-4.jpg',
  },
]; 