
'use client';
import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { useForm, useFormState } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { sendEmail } from '@/app/contact/actions';

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const { isSubmitting } = useFormState({ control });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any): Promise<void> => {
    try {
      await sendEmail(data.name, data.email, data.message);
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-primary-section rounded-3xl shadow-lg mx-4 md:mx-8 lg:mx-auto lg:container mb-12 overflow-hidden fade-in">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-6">Contact Us</h2>
        <form action={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="name">Name <span className="text-red-500">*</span></Label>
            <Input
              type="text"
              id="name"
              placeholder="Enter your name"
              {...register('name', { required: true })}
              className="border border-gray-300 px-4 py-2 w-full"
            />
            {errors.name && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register('email', { required: true })}
              className="border border-gray-300 px-4 py-2 w-full"
            />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
            <Textarea
              id="message"
              placeholder="Enter your message"
              {...register('message', { required: true })}
              className="border border-gray-300 px-4 py-2 w-full h-32"
            />
            {errors.message && <span className="text-red-500">This field is required</span>}
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </div>
    </section>
  );
}
