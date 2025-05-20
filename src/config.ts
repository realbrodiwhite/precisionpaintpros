
type NavLink = {
  href: string;
  label: string;
  hideBelow?: string; // Added hideBelow property
};

type Service = {
  href: string;
  label: string;
}

type ImagePaths = {
    logo: string;
};

type Navigation = {
    navLinks: NavLink[];
    serviceLinks: Service[];
    moreLinks: NavLink[];
}

type Testimonial = {
  author: string;
  text: string;
}




 

export const config = {
  navigation: {
    navLinks: [
      { href: "/blog/painting-tips", label: "Painting Tips" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" }, // Keeping contact for completeness, can be moved to 'More' if needed
    ],
    serviceLinks: [
        { href: "/services", label: "All Services" },
        { href: "/services/interior-painting", label: "Interior Painting" },
        { href: "/services/exterior-painting", label: "Exterior Painting" },
        { href: "/services/commercial-painting", label: "Commercial Painting" },
        { href: "/services/residential-painting", label: "Residential Painting" },
        { href: "/services/color-consultation", label: "Color Consultation" },
      ] as Service[],
      moreLinks: [
      { href: "/faq", label: "FAQ" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/careers", label: "Careers" },
      { href: "/testimonials", label: "Testimonials" },
    ],
  } as Navigation,
    imagePaths: {
        logo: "/assets/PrecisionPaintProsLogo.webp",
    } as ImagePaths,
    testimonialType: {} as Testimonial,
    
} as {navigation: Navigation, imagePaths: ImagePaths} ;


