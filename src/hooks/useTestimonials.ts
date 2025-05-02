// This file returns the testimonials data.
import { config } from "@/config";

const testimonialType = config.testimonialType;

type Testimonial = typeof testimonialType;

export const useTestimonials = (): Testimonial[] => {
  return [
    { author: 'John Doe', text: 'Testimonial 1' },
    { author: 'Jane Smith', text: 'Testimonial 2' },
    { author: 'Peter Jones', text: 'Testimonial 3' },
    { author: 'Alice Williams', text: 'Testimonial 4' },
    { author: 'Bob Brown', text: 'Testimonial 5' },
  ];
};