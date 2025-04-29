# **App Name**: Module Resolver

## Core Features:

- Module Import Validation: Detect incorrect or missing module imports in Next.js projects.
- Fix Suggestions: Suggest fixes for module import errors, like incorrect paths or missing files.
- In-app Error Display: Display errors and suggestions within the Next.js development environment.

## Style Guidelines:

- Primary color: Dark blue (#1A237E) for seriousness.
- Secondary colors: Light grey (#EEEEEE) and white (#FFFFFF).
- Accent: Yellow (#FFCA28) for highlighting issues.
- Clear, structured layout with error messages.
- Use clear, recognizable icons to represent error types.
- Use less opacity in the Hero, so that the image is easier to see

## Original User Request:
I see this error with the app, reported by NextJS, please fix it. The error is reported as HTML but presented visually to the user).

A > before the line number in the error source usually indicates the line of interest: 

> Runtime Error: Error: ./src/components/home/hero.tsx:5:1
> Module not found: Can't resolve 'src/assets/PrecisionPaintPros-HomePageHeroImage.jpg'
>   3 | import { Button } from '@/components/ui/button';
>   4 | import Image from 'next/image'
> > 5 | import heroImage from 'src/assets/PrecisionPaintPros-HomePageHeroImage.jpg';
>     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
>   6 |
>   7 | export default function Hero () {
>   8 |
>
>
>
> https://nextjs.org/docs/messages/module-not-found
>
> . Error source: Call Stack
> 9
>
> Show 7 ignore-listed frame(s)
> <unknown>
> error: ./src/components/home/hero.tsx (5:1)
> <unknown> (Error:
> ./src/components/home/hero.tsx (5:1)
  