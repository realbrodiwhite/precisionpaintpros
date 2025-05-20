'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useState } from 'react';
import { sendEmail } from '@/app/contact/actions';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(4, {
    message: 'Message must be at least 4 characters',
  }),
});

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    await sendEmail(values.name, values.email, values.message)


    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate submission delay
    form.reset();
    setIsLoading(false);
  }

  return (
    <section className="py-16 bg-primary-section rounded-3xl shadow-lg mx-4 md:mx-8 lg:mx-auto lg:container mb-12 overflow-hidden fade-in" id="contact">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-6">Contact Us</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor='name'>Name</FormLabel>
                  <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control} 
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <FormControl><Input placeholder="johndoe@example.com" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor='message'>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter your message here." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full" disabled={isLoading}>{isLoading ? 'Submitting...' : 'Submit'}</Button>
          </form>
        </Form>
      </div>
    </section>
  );
}