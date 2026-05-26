# Real Estate Platform — Production-Grade Full-Stack Development Prompt

## Context and Role

You are a Frontend Developer with experience in modern real estate web platforms and are responsible for developing a high-performance real estate property showcase website. The website must offer a top-notch user experience. It needs to have a design. The layout should adapt to screen sizes. The interactions should be seamless. The overall quality should be high. The website has to look premium. It should have a UI design. The website layout must be responsive. Smooth interactions are a must. The quality of the website should be at a production level.

The website should let people look for homes, narrow down the search results, see all the details about a property, and get in touch with real estate agents using a way to send messages. The website should have a search function for properties so users can find what they want. Users can then filter the properties to see the ones they like. When users find a property they like, they can look at the property pages for that property. The detailed property pages for the property will have all the information users need. Users can then contact the real estate agents for the property through an inquiry system. It should also include backend form processing, secure data processing, and email notifications for property inquiries.

---

## Objective

Develop a real estate platform that:

* Shows the latest properties for sale or rent in a clean layout. The platform should display properties in a way that's easy to look at.
* Allows users to search for homes using filters like where the property is, how much it costs, what type of property it is and how many rooms it has. Users can filter properties by location, price, type and number of rooms.
* Provides pages for each property where users can see pictures, what amenities are included, the property specs and where it is located. Each property has its own page with images, amenities, details and location information.
* Includes a "Contact Agent" system so people can send questions directly to real estate agents. The platform should have a way for visitors to contact agents directly.
* Automatically sends emails to agents when someone sends an inquiry. The system should notify agents by email when someone asks a question.
* Works well on computers, tablets and phones. The platform should be easy to use on any device.
* Is built to handle a lot of traffic, runs smoothly, is accessible to everyone and follows SEO practices. The platform should be fast, accessible, and follow best practices for search engines.

---

## Project Structure

```
real-estate-platform/
├── .env.example                         # Environment variable template
├── prisma.config.ts                     # Prisma configuration
├── next.config.ts                       # Next.js configuration
├── postcss.config.mjs                   # PostCSS / Tailwind config
├── tsconfig.json                        # TypeScript configuration
├── eslint.config.mjs                    # ESLint configuration
├── package.json                         # Dependencies and scripts
│
├── prisma/
│   ├── schema.prisma                    # Database schema (Agent, Property, Inquiry)
│   └── seed.ts                          # Database seed data (12 luxury properties)
│
├── public/
│   └── images/
│       ├── hero.png                     # Hero section background
│       ├── apartment.png                # Property image asset
│       └── penthouse.png               # Property image asset
│
└── src/
    ├── types/
    │   └── index.ts                     # Shared TypeScript interfaces & types
    │
    ├── hooks/
    │   └── useDebounce.ts               # Reusable debounce hook
    │
    ├── lib/
    │   ├── prisma.ts                    # Prisma client singleton
    │   └── mock-data.ts                 # Mock property data + query helpers
    │
    ├── components/
    │   ├── Navbar.tsx                   # Responsive navigation with scroll effects
    │   ├── Footer.tsx                   # Footer with newsletter & links
    │   ├── HeroSection.tsx              # Animated hero with stats bar
    │   ├── FeaturedListings.tsx         # Featured properties grid section
    │   ├── PropertyCard.tsx             # Reusable property card component
    │   ├── SearchFilters.tsx            # Advanced filter bar (search, city, type, price)
    │   ├── ImageGallery.tsx             # Lightbox image gallery with thumbnails
    │   ├── ContactAgentForm.tsx         # Modal inquiry form with validation
    │   └── NewsletterForm.tsx           # Email newsletter subscribe form
    │
    └── app/
        ├── globals.css                  # Design system, tokens, animations
        ├── layout.tsx                   # Root layout with metadata & fonts
        ├── page.tsx                     # Homepage (Hero + Featured + Stats + CTA)
        │
        ├── properties/
        │   ├── page.tsx                 # Browse all properties with filters & pagination
        │   └── [id]/
        │       ├── page.tsx             # SSG property detail page + JSON-LD SEO
        │       └── PropertyDetailClient.tsx  # Client component (gallery, agent, modal)
        │
        └── api/
            ├── properties/
            │   └── route.ts             # GET /api/properties — filter, sort, paginate
            └── inquiry/
                └── route.ts             # POST /api/inquiry — validate & submit inquiry
```

---

## UI and Layout Requirements

### Hero Section

Create a visually engaging hero section that acts as the main entry point of the website. The section should immediately highlight featured properties and encourage users to begin searching for homes.

The hero section should include:

* Large background banner or featured property image
* Property search bar
* Location input field
* Property type selector
* Price range selector
* Call-to-action buttons

The hero section should also:

* Be fully responsive across all screen sizes
* Support flexible layouts for desktop and mobile
* Maintain clean spacing and premium visual styling
* Use smooth transitions and modern UI patterns

### Property Listings Section

Build a responsive property listings section that displays multiple properties in a clean grid layout. Each property card should provide enough information for users to quickly understand the listing before opening the details page.

Each property card should include:

* Property image
* Property title
* Price information
* Location details
* Property type
* Bedrooms and bathrooms
* Area size
* "View Details" button

The listings section should also support:

* Smooth hover animations and interactions
* Lazy-loaded images for performance optimization
* Responsive grid layouts
* Pagination or infinite scrolling for large datasets

---

## Search and Filter Requirements

Implement an advanced search and filtering experience that allows users to quickly narrow down property listings based on their preferences. The filtering system should feel fast, intuitive, and mobile-friendly.

Include support for:

* Search by property name or location
* Filter by price range
* Filter by property type
* Filter by bedrooms and bathrooms
* Filter by property status (sale/rent)
* Sort by latest listings, price, or popularity

Ensure the search system includes:

* Debounced search inputs for better performance
* Responsive filter layouts
* Fast filtering behaviour with smooth updates

---

## Property Details Page Requirements

There should be a separate page for each property that offers full details on the listing. The following details must appear on the property details page:

* Image gallery or carousel
* Detailed property description
* Amenities section
* Property specifications
* Google Maps location embed
* Agent details section
* Similar properties recommendations

The page should also:

* Use responsive layouts
* Optimize image loading and rendering
* Maintain a clean information hierarchy for readability

---

## Contact Agent System Requirements

### Contact Form Behaviour

When users click "Contact Agent" the platform should open a modal or a special section for inquiries. This section should allow users to safely send messages to the property agent. Users should get a message after they submit their inquiry to let them know it was successful.

### Contact Form Fields

The inquiry form must include:

* Full Name (required)
* Email Address (required and validated)
* Phone Number (required and validated)
* Inquiry Message (required)

### Validation Requirements

Implement:

* Client-side validation
* Required field validation
* Email format validation
* Phone number validation
* Clear and user-friendly error messages
* Proper error handling for failed submissions

Prevent form submission when:

* Required fields are empty
* Email format is invalid
* Phone number format is incorrect

---

## Email Notification Requirements

Whenever a user sends in a question about a property the system should send an email to the property agent who is in charge of that property. This email should be sent automatically when the user submits the property inquiry.

The email should include:

* User name
* Email address
* Phone number
* Inquiry message
* Property name
* Timestamp of inquiry

Use:

* Nodemailer with SMTP
* Or a transactional email API service

All credentials and secrets need to be secured via environment variables.

---

## Requirements for Data Processing

Sanitization and validation need to be performed on all form input data and API requests in order to prevent:

* XSS attacks
* SQL or NoSQL injection attacks
* Malicious form submissions

Ensure all API responses return structured JSON responses including:

* Success responses
* Validation errors
* Error handling responses

---

## Performance Requirements

Optimize the platform for high performance and smooth user experience by implementing:

* Fast page loading
* Optimized image rendering
* Lazy loading strategies
* Minimal bundle sizes
* Responsive image delivery
* Smooth UI interactions and transitions

The application should work efficiently across:

* Mobile devices
* Tablets
* Desktop screens

---

## Accessibility Needs

Make sure that your platform follows accessibility guidelines through:

* Using semantic HTML
* Adding ARIA labels where required
* Supporting keyboard navigation
* Maintaining proper colour contrast
* Providing screen-reader-friendly layouts

---

## SEO Requirements

Implement SEO optimization strategies including:

* SEO-friendly URLs
* Meta titles and descriptions
* Open Graph tags
* Structured property data
* Optimized heading hierarchy
* Proper image alt attributes

---

## Error Handling and Documentation

Handle and manage:

* Frontend validation errors
* Backend API failures
* Database connection failures
* Email delivery failures

Provide documentation for:

* Folder structure
* API routes
* Setup instructions
* Environment variables
* Deployment process

---

## Performance and Scalability

The system should be designed to scale efficiently as the platform grows. Implement strategies for:

* Handling large property datasets
* Optimized database queries
* Scalable backend architecture
* API rate limiting
* Caching where appropriate

---

## Technology Stack

### Frontend

Use:

* React or Next.js
* Tailwind CSS
* Axios or Fetch API

Optional integrations:

* Framer Motion for smooth animations
* Swiper.js for image carousels

### Backend

Use:

* Node.js
* Express.js or Next.js API Routes
* Nodemailer
* dotenv

Optional database integrations:

* MongoDB
* PostgreSQL

---

## Output Requirements

The final application should provide:

* A modern real estate browsing experience
* Advanced property search and filtering
* Responsive property detail pages
* Secure contact agent inquiry workflows
* Automated email notification functionality
* Production-ready full-stack architecture
* Optimized accessibility, SEO, and performance improvements
