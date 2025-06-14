export const config = {
  navigation: {
    navLinks: [
      { href: "/", label: "Home", hideBelow: 'always' },
      { href: "/services", label: "Services", hideBelow: 'always' }, // Assuming a main services page or category
      { href: "/projects", label: "Projects", hideBelow: 'always' }, // Assuming a projects page
      { href: "/blog/painting-tips", label: "Painting Tips", hideBelow: 'sm' },
      { href: "/testimonials", label: "Testimonials", hideBelow: 'sm' },
      { href: "/about-us", label: "About Us", hideBelow: 'md' },
      { href: "/contact", label: "Contact", hideBelow: 'lg' },
    ],
    serviceLinks: [
      { href: "/services/interior-painting", label: "Interior Painting" },
      { href: "/services/exterior-painting", label: "Exterior Painting" },
      { href: "/services/commercial-painting", label: "Commercial Painting" },
      { href: "/services/residential-painting", label: "Residential Painting" },
      { href: "/services/curb-face-address-painting", label: "Curb Face Address Painting" },
      { href: "/services/parking-lot-line-painting", label: "Parking Lot Line Painting" },
      { href: "/services/color-consultation", label: "Color Consultation" },
      { href: "/services/fence-painting", label: "Fence Painting" },
      { href: "/services/trim-refinishing", label: "Trim Refinishing" },
      { href: "/services/cabinet-refinishing", label: "Cabinet Refinishing" },
      { href: "/services/driveway-painting", label: "Driveway Painting" },
      { href: "/services/traffic-painting", label: "Traffic Painting" },
      { href: "/services/concrete-painting", label: "Concrete Painting" },

    ],
    moreLinks: [
      { href: "/testimonials", label: "Testimonials" },
      { href: "/about-us", label: "About Us" },
      { href: "/contact", label: "Contact" },
    ],
  },
  imagePaths: {
    logo: "/assets/PrecisionPaintProsLogo.webp",
  },
};