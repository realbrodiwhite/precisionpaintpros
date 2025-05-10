// src/lib/actions.ts
'use server';

export async function sendEmail(name: string, email: string, message: string) {
  console.log('Email sent:', { name, email, message });
}