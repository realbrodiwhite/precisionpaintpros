'use client';
import { useTestimonials } from '@/hooks/useTestimonials';

import React, { useState, useEffect } from 'react';
import { config } from '@/config';
import { Testimonial } from '@/config';
import Link from 'next/link'; // Import the Link component from next/link

/**
 * @description Testimonials component displays a list of client testimonials.
 * It fetches testimonials data from a JSON file and renders them dynamically.
 */
export default function Testimonials() {
  const testimonials = useTestimonials();

  if (!testimonials) return null;

  return (
    <section className="py-16 fade-in bg-secondary-section rounded-3xl shadow-lg mx-4 md:mx-8 lg:mx-auto lg:container mb-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-primary text-center mb-10 slide-in-bottom">
          What Our Clients Say
        </h2>
         {/* Testimonials rendering section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {/* Maps over the first 3 testimonials in the testimonials array */}
        {/* Slice is used to limit the displayed testimonials to the first three */}
        {/* For each testimonial, renders a div containing the testimonial text and author */}
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md zoom-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <p className="text-foreground mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-primary">- {testimonial.author}</p>
            </div>
          ))}
        </div>
        {/* Link to the page that contains all the testimonials */}
        <div className='flex justify-center'>
          <Link
            href="/testimonials"
            className="text-primary hover:underline font-semibold transition-colors"
          >
            View All Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
}