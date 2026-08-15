# Zenova Healthcare Demo — Frontend

## Project Vision

Build a production-quality website for a fictional private dental practice that feels **calm, credible, human, modern, and trustworthy**.

This is a **sales/demo project for Zenova Enterprises**. It should be good enough to show real dental practices that already have websites but whose online presence could be significantly improved.

The goal is NOT to make a website that shouts “WE ARE THE BEST DENTIST. BOOK NOW!”

The goal is to make a patient think:

> “I’ve seen plenty of doctors making big claims. This one feels different. I understand who they are, what they do, what I can expect, and I feel comfortable contacting them.”

The website should communicate confidence without aggressive selling.

---

## 1. Core Patient Experience

The emotional journey should be:

**Comfortable → Curious → Informed → Reassured → Ready to book**

The visitor should gradually feel:

1. This looks professional.
2. I understand what this practice does.
3. I know who the doctor is.
4. Their services are relevant to me.
5. I can see evidence of their work.
6. I understand their approach to patient care.
7. Other patients trust them.
8. I know exactly how to contact or book with them.

Do not overload the homepage with every piece of information. The homepage should create interest and guide users into dedicated pages.

---

## 2. Multi-Page Architecture

**This is NOT a single-page scrolling website.**

Use React Router and create dedicated pages:

```text
/                         Home
/practice                 Our Practice
/services                 All Services
/services/:slug           Individual Service
/doctor                   Our Doctor
/patient-info             Patient Information
/reviews                  Patient Reviews
/contact                  Contact
/book-appointment         Appointment Request
```

Navbar links MUST navigate to these routes. Do **not** make the primary navbar work by scrolling to sections on the homepage.

The homepage should contain previews and links:

```text
Home
 ├── Hero
 ├── Trust Preview
 ├── Practice Introduction
 ├── Featured Services → /services
 ├── Smile Transformation Preview
 ├── Doctor Preview → /doctor
 ├── Review Preview → /reviews
 ├── Clinic Preview → /practice
 └── Booking CTA → /book-appointment
```

This should feel like a real multi-page business website, not one extremely long landing page.

---

## 3. Design Direction

### Mood

- Calm
- Human
- Modern
- Warm
- Editorial
- Professional
- Premium without being flashy
- Clinical without feeling sterile
- Spacious
- Trustworthy

Avoid:

- Hospital portal aesthetics
- Medical SaaS aesthetics
- Generic WordPress medical themes
- AI-generated template patterns
- Aggressive lead-generation funnels
- Luxury fashion aesthetics

Use generous whitespace, strong typography hierarchy, high-quality photography, soft borders, subtle shadows, controlled rounded corners, intentional spacing, and minimal visual clutter.

Avoid excessive gradients, giant medical illustrations, excessive pills, repetitive card grids, fake urgency, and shouting typography.

Cards should only be used when they improve information structure.

---

## 4. Reference Image

`Docs/reference.png` is visual inspiration only.

Do NOT copy its branding, text, exact layout, imagery, or components.

Use it to understand:

- Typography
- Spacing
- Visual rhythm
- Composition
- Color restraint
- Photography
- CTA treatment
- Desktop/mobile relationship
- Calm premium feeling

Create an original design that belongs to the same visual family.

The project must remain understandable and buildable without the reference image.

---

## 5. Brand

Fictional practice:

**HARMONY DENTAL CARE**

Fictional doctor:

**Dr. Sarah Mitchell, DDS**

All doctor information, credentials, statistics, testimonials, address, phone number, images and practice information are demo content.

Do not present fabricated credentials or testimonials as genuine.

Keep business content structured and replaceable.

---

## 6. Color & Typography

Suggested palette:

- Warm White `#F7F7F4`
- Deep Ink `#17221F`
- Muted Teal `#526E68`
- Soft Stone `#E8E7E1`
- Warm Sand `#D9CFC0`
- White `#FFFFFF`

The palette should feel quiet and harmonious. Avoid bright medical blue everywhere and decorative gradients.

Use a refined serif display typeface with a modern sans-serif.

Possible display fonts:

- DM Serif Display
- Cormorant Garamond
- Playfair Display

Possible body/UI fonts:

- Manrope
- Plus Jakarta Sans
- Inter

Create a coherent hierarchy for display, H1, H2, H3, body, small text, eyebrow, metadata, and buttons.

---

## 7. Navbar

Desktop navigation:

- Our Practice → `/practice`
- Services → `/services`
- Our Doctor → `/doctor`
- Patient Info → `/patient-info`
- Reviews → `/reviews`
- Contact → `/contact`

Primary CTA:

**Book Appointment** → `/book-appointment`

The navbar should have an elegant scroll transition without becoming visually dominant.

Mobile:

- Accessible hamburger menu
- Clean open/close animation
- Clear appointment CTA
- Proper keyboard focus
- Touch-friendly controls

---

## 8. Homepage — `/`

The homepage should be a concise, emotionally strong overview:

```text
Navbar
↓
Hero
↓
Quiet Trust Bar
↓
Practice Introduction
↓
Featured Services Preview
↓
Smile Transformation Preview
↓
Doctor Preview
↓
Patient Experience Preview
↓
Review Preview
↓
Clinic Preview
↓
Appointment CTA
↓
Footer
```

Every preview should link to its dedicated page.

### Hero

Suggested direction:

**Your smile, our priority.**

Supporting message:

> Personalized dental care in a comfortable environment, with clear guidance and treatment designed around you.

Primary CTA:

**Book an Appointment**

Secondary CTA:

**Meet Our Doctor**

Use authentic-feeling modern dental clinic imagery. Avoid cheesy stock smiles, doctors holding toothbrushes, exaggerated medical imagery, and unrealistic clinic scenes.

### Trust Preview

Use restrained proof such as:

- Years of Experience
- Patients Served
- Advanced Technology
- Personalized Care

Store statistics as replaceable data and do not make them louder than the hero.

---

## 9. Our Practice — `/practice`

Provide the deeper practice story:

- Practice philosophy
- Patient experience
- Clinic environment
- Care standards
- Clinic gallery
- Location
- Hours
- Contact information

Core message:

> We listen first. We explain clearly. We build a plan around the patient.

Use strong photography and generous whitespace.

---

## 10. Services — `/services`

Overview page for:

- General Dentistry
- Cosmetic Dentistry
- Dental Implants
- Orthodontics
- Emergency Care

Services must be data-driven.

```ts
type Service = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  featured: boolean;
  active: boolean;
};
```

Do not create individual service pages by copying JSX.

---

## 11. Individual Service — `/services/:slug`

Use dynamic routes such as:

```text
/services/dental-implants
/services/cosmetic-dentistry
/services/general-dentistry
```

Load service content through the backend API using its slug.

Suggested structure:

```text
Service Hero
↓
What the Treatment Is
↓
Who It May Be For
↓
What to Expect
↓
Relevant Before/After Preview
↓
FAQ
↓
Appointment CTA
```

Avoid unsupported medical claims or diagnosing/recommending treatment.

---

## 12. Smile Transformations / Before & After

Create a reusable **BeforeAfterSlider** component.

Do NOT simply place two images beside each other.

The component must contain:

- Before image
- After image
- Horizontal draggable divider
- Visible handle
- BEFORE label
- AFTER label

Interaction:

- Drag divider toward the **left** → reveal more of the **After** image.
- Drag divider toward the **right** → reveal more of the **Before** image.

It must support:

- Mouse
- Touch
- Mobile
- Keyboard interaction where practical

The component should feel smooth and precise.

Use reusable data:

```ts
type BeforeAfterCase = {
  id: string;
  treatment: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  beforeAlt: string;
  afterAlt: string;
};
```

For the demo, use clearly fictional/sample imagery. Do not imply these are real patients of Dr. Sarah Mitchell. Real client sites should use approved client-provided cases and applicable disclosures.

---

## 13. Doctor — `/doctor`

Create a dedicated doctor page with:

- Portrait
- Name
- Specialty
- Biography
- Professional philosophy
- Credentials placeholder
- Areas of interest

The goal is:

> “I know who I am trusting.”

Keep it human rather than corporate. Never invent real qualifications.

---

## 14. Patient Information — `/patient-info`

Include:

- New patient information
- What to expect
- Preparing for an appointment
- Clinic location
- Hours
- Payment/insurance placeholder
- Common questions
- Appointment guidance

Keep medical information general and client-approved.

---

## 15. Reviews — `/reviews`

Create a dedicated reviews page.

Use a small number of clearly marked demo testimonials:

- Quote
- Patient identifier
- Context where appropriate
- Rating

Real client testimonials must be genuine and approved. Do not invent review counts.

---

## 16. Contact — `/contact`

Create a dedicated contact page with:

- Practice details
- Address
- Opening hours
- Phone
- Email
- Location/map area
- Contact form

The form must submit through the backend.

Collect only necessary contact information.

---

## 17. Booking — `/book-appointment`

Create a dedicated appointment request page.

Flow:

1. Choose appointment type
2. Choose preferred date
3. Choose preferred time
4. Enter name
5. Enter email
6. Enter phone
7. Add optional short note
8. Submit

The frontend MUST communicate with the backend.

Handle:

- Loading
- Validation
- Success
- API errors
- Network errors
- Unavailable slots

Do not collect diagnosis, medical history, medication, insurance numbers, or other sensitive health information.

This is an appointment request system, not a medical-record system.

---

## 18. Data-Driven Architecture

Do not build one giant hard-coded React page.

Business content should be structured and loaded from the backend.

Relevant data:

- Practice
- Doctors
- Services
- Testimonials
- FAQs
- Gallery
- Before/After cases
- Availability
- Appointment settings

Architecture:

```text
React Components
       ↓
Hooks / API Layer
       ↓
Backend API
       ↓
Services / Business Logic
       ↓
Prisma
       ↓
PostgreSQL
```

Keep API logic outside visual components where practical.

Do not put business content directly inside repeated JSX.

---

## 19. Reusable Components

Create reusable components such as:

```text
Navbar
Button
SectionHeader
ServiceCard
DoctorProfile
Testimonial
FAQAccordion
BeforeAfterSlider
Gallery
BookingForm
ContactForm
Footer
```

Do not duplicate components unnecessarily.

The same service card, testimonial component, gallery, and BeforeAfterSlider should work with different data.

---

## 20. SEO

Every important route must have its own SEO metadata.

Implement:

- Semantic HTML
- Correct H1/H2/H3 hierarchy
- Unique title
- Meta description
- Canonical URL
- Open Graph metadata
- Descriptive alt text
- Clean URLs
- Sitemap
- robots.txt
- Internal linking
- Appropriate structured data
- Local practice information
- Optimized images
- Performance-conscious loading

Routes such as `/services/:slug` must generate appropriate metadata from the service data.

SEO-ready does not guarantee rankings.

Do not make unsupported medical or SEO claims.

---

## 21. Accessibility

Target strong WCAG 2.2 AA practices where practical.

Include:

- Keyboard navigation
- Visible focus states
- Semantic HTML
- Accessible labels
- Accessible forms
- Sufficient contrast
- Proper button semantics
- Reduced-motion support
- Useful alt text
- Touch-friendly controls

The BeforeAfterSlider must have an accessible interaction strategy.

---

## 22. Responsive Design

Mobile is a primary experience, not a desktop afterthought.

Test:

```text
320px
375px
390px
430px
768px
1024px
1280px
1440px
```

Pay special attention to:

- Navigation
- Hero image crop
- Typography
- Service layouts
- Before/After slider
- Doctor page
- Gallery
- Booking form
- Contact form
- Footer

The BeforeAfterSlider must work properly with touch.

---

## 23. Performance

Use:

- Optimized images
- Responsive image sizes
- Lazy loading where appropriate
- Minimal dependencies
- Code splitting where useful
- Stable layouts
- Limited JavaScript
- Sensible animation

The site should feel fast on a normal mobile connection.

---

## 24. Animation

Use motion to improve flow, not to show off.

Good:

- Gentle page transitions
- Section reveals
- Small image movement
- Button transitions
- Navbar transitions
- Accordion animation
- Before/After slider movement

Avoid:

- Scroll hijacking
- Excessive parallax
- Bouncing elements
- Constant floating
- Long loading animations
- Excessive motion

Respect reduced-motion preferences.

---

## 25. Image Requirements

Every image must correspond to its content.

Examples:

- Hero → modern dental clinic
- Doctor → professional doctor portrait
- Services → relevant treatment imagery
- Before/After → correct comparison pair
- Practice → reception, treatment room, clinic environment

Do not reuse one generic stock image everywhere.

Do not use unrelated medical imagery under misleading captions.

---

## 26. Content Rules

Keep copy concise.

Prefer:

- Strong short headlines
- Clear supporting text
- Meaningful labels
- Short service descriptions
- Useful patient information

Avoid:

- Empty marketing paragraphs
- Repeated claims
- Keyword stuffing
- Fake authority
- Fake urgency
- Overuse of “best”, “leading”, “number one”, or “guaranteed”

Let typography, photography, whitespace, and layout communicate quality.

---

## 27. Backend Integration

This frontend is NOT allowed to fake backend functionality.

Consume the backend API for appropriate data.

Expected API areas:

```text
/api/v1/practice
/api/v1/doctors
/api/v1/services
/api/v1/services/:slug
/api/v1/testimonials
/api/v1/faqs
/api/v1/gallery
/api/v1/before-after
/api/v1/availability
/api/v1/appointments
/api/v1/contact
```

Use a clean API/service layer.

Do not put fetch/axios logic directly into every UI component.

---

## 28. Future Admin Panel Compatibility

The first version does NOT need an admin panel.

However, the architecture must support one later.

A future practice administrator should be able to manage:

- Practice information
- Services
- Doctors
- Testimonials
- FAQs
- Gallery
- Before/After cases
- Appointment requests
- Availability

Possible future admin API:

```text
/api/v1/admin/practice
/api/v1/admin/services
/api/v1/admin/doctors
/api/v1/admin/testimonials
/api/v1/admin/faqs
/api/v1/admin/gallery
/api/v1/admin/before-after
/api/v1/admin/appointments
/api/v1/admin/availability
```

Do not build fake admin screens merely for appearance.

---

## 29. Healthcare Data Boundary

This is a production-quality demo architecture, not a medical records platform.

Do not claim:

- HIPAA compliance
- GDPR compliance
- Medical-data security certification
- Clinical accuracy
- Real appointment confirmation

unless those systems and requirements are actually implemented and verified for the target jurisdiction.

Use fictional demo data.

Do not store unnecessary sensitive health information.

---

## 30. Recommended Frontend Structure

```text
src/
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── ui/
│   ├── forms/
│   └── sections/
├── pages/
│   ├── Home/
│   ├── Practice/
│   ├── Services/
│   ├── ServiceDetail/
│   ├── Doctor/
│   ├── PatientInfo/
│   ├── Reviews/
│   ├── Contact/
│   └── BookAppointment/
├── hooks/
├── lib/
├── services/
├── types/
├── assets/
├── App.tsx
├── main.tsx
└── index.css
```

Use route-level page components.

Keep reusable UI, API logic, and business content separate.

---

## 31. Definition of Done

The frontend is complete when:

- The site feels calm and trustworthy.
- It does not look AI-generated.
- The homepage is not overloaded.
- Navbar links navigate to dedicated pages.
- Service pages use dynamic routes.
- Important content is data-driven.
- Before/After slider works with mouse and touch.
- Appointment requests work through the backend.
- Loading/error/success states work.
- SEO foundations are implemented for every important page.
- Accessibility has been considered.
- Mobile feels intentionally designed.
- Images match their content.
- There are no console errors.
- The project builds cleanly.
- API logic is separated from UI components.
- The architecture can support an admin panel later.

The final website should demonstrate:

**Design + React + TypeScript + Tailwind CSS + Routing + Responsive UI + Backend Integration + Database + API + Appointment Requests + SEO + Accessibility + Scalable Architecture**

The result should feel like a real Zenova healthcare product demo that can be customized for an actual private dental practice.
