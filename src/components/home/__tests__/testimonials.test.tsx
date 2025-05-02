import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimonials from '@/components/home/testimonials';
import { useTestimonials } from '@/hooks/useTestimonials';

jest.mock('@/hooks/useTestimonials');


describe('Testimonials', () => {
  it('renders each testimonial', () => {
    (useTestimonials as jest.Mock).mockReturnValue([
      { author: 'John Doe', text: 'Testimonial 1' },
      { author: 'Jane Smith', text: 'Testimonial 2' },
      { author: 'Peter Jones', text: 'Testimonial 3' },
      { author: 'Alice Williams', text: 'Testimonial 4' },
      { author: 'Bob Brown', text: 'Testimonial 5' },
    ]);
    render(<Testimonials />);
    expect(screen.queryByText('John Doe')).toBeTruthy();
    expect(screen.queryByText('Jane Smith')).toBeTruthy();
    expect(screen.queryByText('Peter Jones')).toBeTruthy();
    expect(screen.queryByText('Alice Williams')).toBeTruthy();
    expect(screen.queryByText('Bob Brown')).toBeTruthy();
  });
});