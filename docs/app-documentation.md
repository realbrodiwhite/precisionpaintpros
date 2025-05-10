# Precision Paint Pros Application Documentation

## Overview

The Precision Paint Pros application is a modern web application built for a painting business. Its primary purpose is to showcase the company's services, provide information about the company, facilitate contact with potential clients, and offer a client/employee dashboard for management. The application is designed to be responsive and visually appealing, with a focus on showcasing the company's brand and professionalism.

## Technologies Used

*   **Next.js:** A React framework for building performant and scalable web applications.
*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A superset of JavaScript that adds static typing.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **Genkit:** An AI framework used for integrating AI features.
* **Google AI**: Google AI is used as the AI model for Genkit.
*   **Radix UI:** A component library used for UI elements.
*   **Lucide React:** A library of icons, used in the header.
*   **React Hook Form:** For handling forms.
* **Zod**: For schema validation.
* **clsx**: For conditional classes.
* **tailwind-merge**: For merging tailwind classes.
* **date-fns**: for date manipulation.
* **Recharts**: for creating charts.
* **Firebase**: likely for authentication.
* **React Query**: For data fetching.

## Project Structure

The project follows a standard Next.js structure with some custom directories:

*   `README.md`: The main documentation file.
*   `components.json`: Likely a file used for some UI components.
*   `jest.setup.ts`: Configuration for the Jest testing framework.
*   `next.config.ts`: Next.js configuration.
*   `package-lock.json`, `package.json`: Node.js project files for dependencies.
*   `postcss.config.mjs`: PostCSS configuration.
*   `tailwind.config.ts`: Tailwind CSS configuration.
*   `tsconfig.jest.json`, `tsconfig.json`: TypeScript configuration files.
*   `.idx/`: Files used by nix.
*   `.vscode/`: files for VSCode settings.
*   `docs/`: Contains the `blueprint.md` file, used for documentation.
*   `src/`: The main application source code directory.
    *   `config.ts`, `config/index.ts`: Configuration files.
    *   `ai/`: AI-related files.
        *   `ai-instance.ts`: Configures the Genkit AI instance.
        *   `dev.ts`: Entry point for Genkit during development.
    * `app/`: The main app pages.
        *   `favicon.ico`: The website favicon.
        * `globals.css`: global styles.
        * `layout.tsx`: The root layout.
        * `page.tsx`: The main home page.
        * `about/page.tsx`: The about page.
        * `blog/page.tsx`: The blog page.
        * `client/page.tsx`: The client page.
        * `contact/`: Files for the contact page.
            * `actions.ts`: contact form actions.
            * `page.tsx`: The contact page.
        * `employee/page.tsx`: The employee page.
        * `faq/page.tsx`: The faq page.
        * `portfolio/page.tsx`: The portfolio page.
        * `services/page.tsx`: The main services page.
        * `testimonials/page.tsx`: The testimonials page.
        * `services/*/page.tsx`: All the service specific pages.
    *   `assets/`: Static assets (images).
    *   `data/`: Static data, such as `testimonials.json`.
    *   `hooks/`: Custom React hooks.
        * `use-auth.tsx`: Authentication hook.
        * `use-mobile.tsx`: Hook related to mobile detection.
        * `use-toast.ts`: Hook related to toasts.
        * `useTestimonials.ts`: Hook for managing testimonials.
    * `lib/`: helper files.
        * `utils.ts`: Utility functions.
    *   `components/`: Reusable UI components.
        *   `navigation/`: Components for the header and footer.
        *   `home/`: Components for the home page.
        *   `ui/`: Radix UI components.
    * `hooks/__tests__/useTestimonials.test.ts`: tests for useTestimonials.
    * `components/home/__tests__/testimonials.test.tsx`: tests for the testimonials component.

## Application Structure and Functionality

### Pages

The application uses Next.js pages in the `src/app/` directory:

*   **Home (`/`):** The main landing page, displaying the hero, services, testimonials, and contact sections.
*   **About (`/about`):** An about page for the company.
*   **Blog (`/blog`):** A blog page.
*   **Client (`/client`):** The client dashboard page.
*   **Contact (`/contact`):** A page with a contact form.
*   **Employee (`/employee`):** The employee dashboard page.
* **FAQ (`/faq`):** A frequently asked questions page.
*   **Portfolio (`/portfolio`):** A page to showcase the company's work.
*   **Services (`/services`):** A page listing all painting services.
*   **Testimonials (`/testimonials`):** A page displaying testimonials.
* **Service Pages (`/services/*`):** Pages for each service.
    * `cabinet-refinishing/page.tsx`
    * `color-consultation/page.tsx`
    * `commercial-painting/page.tsx`
    * `concrete-painting/page.tsx`
    * `curb-face-address-painting/page.tsx`
    * `driveway-painting/page.tsx`
    * `exterior-painting/page.tsx`
    * `fence-painting/page.tsx`
    * `interior-painting/page.tsx`
    * `parking-lot-line-painting/page.tsx`
    * `residential-painting/page.tsx`
    * `traffic-painting/page.tsx`
    * `trim-refinishing/page.tsx`

### Components

The application uses reusable components in the `src/components/` directory:

*   **Navigation:**
    *   **`Header`:** The main header, including the logo, navigation menus (desktop and mobile), "Get Estimate" button, and user avatar/login link. It uses dropdown menus for services and "more" links.
    *   **`Footer`:** The footer, containing the copyright notice and address.
*   **Home:**
    *   **`Hero`:** The main hero section of the home page.
    *   **`LimitedTimeOffer`:** A section for displaying a limited-time offer.
    *   **`Services`:** A section listing the company's services.
    *   **`Testimonials`:** A section to display customer testimonials.
    *   **`Contact`:** A section to display contact information or a form.
    * **`PromotionalBanner`:** A banner for displaying a promotion.
*   **UI:**
    *   **`Button`:** A styled button component.
    *   **`DropdownMenu`:** Components for creating dropdown menus.
    *   **`Avatar`:** Components for user avatars.
    * **And many more**: this includes components for cards, inputs, labels, selects, etc.

### Hooks

The application uses custom React hooks in the `src/hooks/` directory:

*   **`useTestimonials`:** Returns an array of testimonial objects. Currently, the data is hardcoded, but it could be replaced to fetch from a database or the `testimonials.json` file.
* **`use-auth`**: Authentication hook, that exposes whether the user is logged in, the user role, etc.
* **`use-mobile`**: Hook related to mobile detection.
* **`use-toast`**: Hook related to the toasts, used to display messages.

### Styling

*   **Tailwind CSS:** The primary styling framework.
*   **`globals.css`:** Defines global styles, CSS variables (color schemes), and custom animations.
    *   **Light and Dark Modes:** The application defines CSS variables for both light and dark modes, making it easy to switch between them.
    *   **Animations:** Custom animations like `slide-in-bottom`, `fade-in`, `slide-in-left`, and `zoom-in` are defined.
    * **Section specific backgrounds:** Light blue, light gray and light red backgrounds for different sections.
    * **Marquee animation**: Animation for the announcement bar.
    * **Gradient**: Animation for the announcement bar.
    * **Spray on/off animation**: A custom animation that can be applied.
    * **Fonts**: Uses Geist and Geist mono as the main font, and Arial as a fallback.

## AI Integration

*   **Genkit:** The application uses the Genkit AI framework, configured in `src/ai/ai-instance.ts`.
*   **Google AI:** The Google AI plugin is used for AI functionality.
*   **Gemini Model:** The `gemini-2.0-flash` model is specified as the default AI model.
*   **API Key:** An environment variable (`GOOGLE_GENAI_API_KEY`) is used to provide the Google AI API key.
* **Flows:** The AI functionality is meant to be used through flows, and the flows will be imported in `src/ai/dev.ts`.
* **Prompts:** The prompts should be created in a folder named `prompts`.

## Navigation

*   **Configuration:** The navigation is configured in `src/config.ts`.
*   **Header:** The `Header` component displays the navigation menus.
*   **Dropdowns:** Dropdown menus are used for the services and "more" links.
* **Mobile**: The header is responsive and has a different menu for mobile.
* **Annoucement bar**: The header contains an animated announcement bar.

## Key Features

*   **Responsive Design:** The website is designed to be responsive and work well on all screen sizes.
*   **Authentication:** The application has user authentication and different pages depending on whether the user is logged in, or whether they are a client or an employee.
*   **Service Showcase:** The website prominently features the painting services offered by the company.
*   **Client and Employee Dashboards:** The website has client and employee dashboards.
* **Animations**: The website has animations to make the UI look more interesting.
*   **SEO and Social Sharing:** The `layout.tsx` file is set up with metadata for search engines and social media sharing.
* **Customization**: The app is highly customizable due to the extensive use of CSS variables.

## Conclusion

The Precision Paint Pros application is a well-structured and feature-rich website built using modern web development technologies. It effectively showcases the company's brand, services, and professionalism. The use of Next.js, Tailwind CSS, TypeScript, Genkit, and other modern tools allows for a performant, scalable, and maintainable codebase.