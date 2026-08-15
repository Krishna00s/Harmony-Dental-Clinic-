# Harmony Dental Care — Modern Dental Practice Website

A modern, responsive, and scalable dental practice website demo built as part of **Zenova Enterprises' healthcare website portfolio**.

The project is designed around a simple idea: a medical website should create **trust without aggressively selling**. Instead of overwhelming visitors with claims, the experience uses calm editorial design, strong typography, purposeful photography, clear information architecture, and subtle interactions to help potential patients understand the practice, its services, doctor, patient experience, and how to get in touch.

This project is also built with a **real data-driven architecture**, rather than being a collection of hard-coded frontend pages. The frontend communicates with a REST API backed by PostgreSQL and Prisma, allowing the website to be extended later with features such as content management and an administrative dashboard.

## ✦ Project Goals

- Create a modern healthcare website suitable for today's private dental practices
- Build a calm and trustworthy patient experience
- Avoid generic medical/AI-generated website aesthetics
- Use dedicated pages instead of putting the entire website into one scrolling landing page
- Build reusable and data-driven components
- Implement real frontend-to-backend communication
- Create a foundation that can be extended for real clients
- Maintain strong responsive design across desktop, tablet, and mobile
- Build SEO-ready pages with accessible UI

## ✦ Main Pages

The website uses a multi-page architecture with React Router:

- **Home** — `/`
- **Our Practice** — `/practice`
- **Services** — `/services`
- **Individual Service** — `/services/:slug`
- **Our Doctor** — `/doctor`
- **Patient Information** — `/patient-info`
- **Contact** — `/contact`

Appointment functionality exists in the underlying architecture but is intentionally **not exposed publicly in the current demo**. This keeps the demo within the capabilities we can confidently deliver to a potential client while keeping the system ready for future activation.

## ✦ Key Features

### Modern Healthcare UI

A calm visual system built around:

- Editorial serif typography
- Modern sans-serif UI typography
- Warm neutral backgrounds
- Muted teal/green accents
- Strong photography
- Generous whitespace
- Responsive layouts
- Subtle animations and interactions

### Data-Driven Services

Services are stored as structured data rather than duplicated inside React pages.

Individual services use dynamic routes such as:

`/services/dental-implants`

The frontend retrieves the corresponding service through the backend API.

### Before & After Comparison

A reusable interactive before/after slider allows visitors to drag between treatment results.

Supports:

- Mouse interaction
- Touch interaction
- Responsive layouts
- Keyboard interaction
- Accessible controls

### Patient Reviews

A compact animated testimonial marquee appears near the footer.

Reviews continuously move horizontally and pause when hovered, allowing the selected review to become more prominent without taking over the page.

### Practice Gallery

The website uses multiple images throughout the experience to demonstrate:

- Clinic environment
- Treatment spaces
- Technology
- Doctor/team
- Patient experience
- Treatment-related imagery

Images are intentionally mapped to the content they represent rather than being randomly reused throughout the website.

### Responsive Design

Designed for:

- Mobile
- Tablet
- Laptop
- Desktop

The mobile experience is treated as a first-class interface rather than simply shrinking the desktop layout.

### SEO Foundations

Pages are structured with:

- Semantic HTML
- Proper heading hierarchy
- Page-specific metadata
- Canonical URLs
- Open Graph metadata
- Descriptive image alt text
- Clean URLs
- Sitemap/robots configuration
- Internal linking
- Structured data where appropriate

### Contact System

The public conversion path currently focuses on **Contact Us** rather than appointment scheduling.

The contact system supports:

- Business information
- Location
- Phone
- Email
- Opening hours
- Contact form

## ✦ Backend

The project includes a real backend architecture rather than relying entirely on hard-coded frontend data.

The backend provides APIs for content such as:

- Practice information
- Doctors
- Services
- Testimonials
- FAQs
- Gallery
- Before/After cases
- Availability
- Contact messages
- Appointment infrastructure for future use

### Architecture

```text
React + TypeScript
        ↓
API Service Layer
        ↓
REST API
        ↓
Express + TypeScript
        ↓
Service Layer
        ↓
Prisma ORM
        ↓
PostgreSQL
