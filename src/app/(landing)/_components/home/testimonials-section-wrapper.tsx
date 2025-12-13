import TestimonialsSection from './testimonials-section';
import { fetchTestimonials } from '@/lib/cms';

export default async function TestimonialsSectionWrapper() {
  const items = await fetchTestimonials();
  return <TestimonialsSection testimonials={items} />;
}
