# Zenova Healthcare Demo — Backend

## Project Purpose

Build a small but real backend for the **Harmony Dental Care** demo.

This is not a fake API and not a frontend-only demonstration.

The backend should provide real:

- PostgreSQL database
- Prisma ORM
- REST API
- Appointment requests
- Contact enquiries
- Practice content
- Doctor content
- Services
- FAQs
- Gallery
- Before/After cases
- Availability data

The architecture must also be ready for a future admin panel without requiring the frontend to be rebuilt.

This is a **production-quality demo architecture**, not a medical-record platform.

---

# 1. Recommended Stack

Use:

- Node.js
- TypeScript
- Express
- PostgreSQL
- Prisma ORM
- Zod
- dotenv
- Helmet
- CORS
- Rate limiting
- Structured error handling
- Logging where appropriate

Keep the stack simple and maintainable.

Do not add unnecessary dependencies.

---

# 2. Backend Architecture

Recommended structure:

```text
server/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── repositories/
│   ├── schemas/
│   ├── types/
│   ├── utils/
│   ├── app.ts
│   └── server.ts
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── docs/
│   └── API.md
├── .env.example
├── package.json
└── tsconfig.json
```

Responsibilities:

### Routes
Define endpoints and middleware.

### Controllers
Handle HTTP requests and responses.

### Services
Contain business logic.

### Repositories
Handle database access.

### Schemas
Validate incoming requests with Zod.

### Prisma
Handle database models and queries.

Keep database logic out of controllers where practical.

---

# 3. API Versioning

All public API routes should use:

```text
/api/v1
```

This gives us room to evolve the API later without breaking existing frontend clients.

---

# 4. Database Models

Use PostgreSQL with Prisma.

## Practice

Fields:

```text
id
name
specialty
description
phone
email
address
city
state
country
postalCode
timezone
website
createdAt
updatedAt
```

The practice information should be editable later through an admin panel.

---

## Doctor

Fields:

```text
id
name
specialty
biography
credentials
image
featured
active
createdAt
updatedAt
```

Do not invent real credentials.

---

## Service

Fields:

```text
id
name
slug
shortDescription
description
image
featured
active
createdAt
updatedAt
```

The `slug` is important because the frontend uses dynamic routes.

Example:

```text
/services/dental-implants
```

The frontend should request:

```http
GET /api/v1/services/dental-implants
```

This allows new services to be added without creating a new React page manually.

---

## Testimonial

Fields:

```text
id
displayName
quote
context
rating
approved
featured
createdAt
updatedAt
```

Only approved testimonials should be publicly returned.

Demo testimonials must remain clearly replaceable.

---

## FAQ

Fields:

```text
id
question
answer
order
active
createdAt
updatedAt
```

Return active FAQs in the desired display order.

---

## GalleryItem

Fields:

```text
id
title
image
category
altText
active
order
createdAt
updatedAt
```

The image must correspond to the content it represents.

---

## BeforeAfterCase

This model powers the interactive before/after comparison component.

Fields:

```text
id
treatment
beforeImage
afterImage
description
beforeAlt
afterAlt
active
featured
order
createdAt
updatedAt
```

The frontend should receive the two image URLs and render the draggable comparison slider.

The backend does NOT control the slider interaction itself.

---

## AvailabilitySlot

Fields:

```text
id
date
startTime
endTime
appointmentType
available
createdAt
updatedAt
```

This represents basic appointment availability.

The initial demo can use simple slots rather than a full scheduling engine.

---

## AppointmentRequest

Fields:

```text
id
patientName
email
phone
preferredDate
preferredTime
appointmentType
note
status
createdAt
updatedAt
```

Statuses:

```text
PENDING
CONFIRMED
CANCELLED
COMPLETED
```

The initial demo is an **appointment request system**.

Do not claim that a request is confirmed unless the backend actually confirms a valid slot.

---

## ContactMessage

Fields:

```text
id
name
email
phone
message
status
createdAt
updatedAt
```

This stores general contact enquiries.

---

# 5. Public API

Create these public endpoints.

## Practice

```http
GET /api/v1/practice
```

Returns the practice information.

---

## Doctors

```http
GET /api/v1/doctors
GET /api/v1/doctors/:id
```

---

## Services

```http
GET /api/v1/services
GET /api/v1/services/:slug
```

The slug endpoint is required for:

```text
/services/:slug
```

frontend pages.

Example:

```http
GET /api/v1/services/cosmetic-dentistry
```

---

## Testimonials

```http
GET /api/v1/testimonials
```

Only return public/approved testimonials.

---

## FAQs

```http
GET /api/v1/faqs
```

Only return active FAQs.

---

## Gallery

```http
GET /api/v1/gallery
```

Only return active gallery items.

---

## Before / After

```http
GET /api/v1/before-after
GET /api/v1/before-after/:id
```

These endpoints provide the data for the reusable frontend `BeforeAfterSlider`.

---

## Availability

```http
GET /api/v1/availability?date=YYYY-MM-DD
```

Return available appointment slots for the requested date.

Validate the date.

Do not expose internal database information.

---

# 6. Appointment Request API

Endpoint:

```http
POST /api/v1/appointments
```

Example request:

```json
{
  "patientName": "Example Patient",
  "email": "patient@example.com",
  "phone": "+1 555 000 0000",
  "preferredDate": "2026-09-15",
  "preferredTime": "10:30",
  "appointmentType": "General Consultation",
  "note": ""
}
```

Validate using Zod.

Validate:

- Required fields
- Email format
- Date format
- Time format
- Appointment type
- String lengths
- Safe input

Success response:

```json
{
  "success": true,
  "message": "Appointment request received."
}
```

Do not claim:

```text
Appointment confirmed
```

unless an actual availability check and confirmation process exists.

---

# 7. Contact API

Endpoint:

```http
POST /api/v1/contact
```

Example:

```json
{
  "name": "Example User",
  "email": "user@example.com",
  "phone": "+1 555 000 0000",
  "message": "I would like to learn more about the practice."
}
```

Validate the request.

Store the message.

Do not collect unnecessary medical information.

---

# 8. Frontend Data Flow

The intended architecture is:

```text
User
 ↓
React Page
 ↓
Reusable Component
 ↓
API Service / Hook
 ↓
REST API
 ↓
Controller
 ↓
Service Layer
 ↓
Repository
 ↓
Prisma
 ↓
PostgreSQL
```

Do not put database queries directly inside route handlers.

Do not make React components responsible for backend business logic.

---

# 9. Multi-Page Website Support

The backend should support the frontend's dedicated routes:

```text
/
 /practice
 /services
 /services/:slug
 /doctor
 /patient-info
 /reviews
 /contact
 /book-appointment
```

The backend does NOT need page-specific endpoints such as:

```text
/api/v1/pages/services
```

Instead, provide content-oriented endpoints:

```text
/api/v1/practice
/api/v1/services
/api/v1/services/:slug
/api/v1/doctors
/api/v1/testimonials
/api/v1/faqs
/api/v1/gallery
/api/v1/before-after
```

This keeps the API reusable.

---

# 10. Patient Information

The `/patient-info` page can initially use structured frontend content for general informational text if it does not require database management.

However, information that a future practice administrator should be able to change should eventually be represented as editable data.

Do not create unnecessary database models simply to avoid every line of static content.

Use judgment.

---

# 11. SEO Support

The backend should provide stable, clean content that allows the frontend to generate unique metadata for dynamic pages.

For example:

```text
/services/dental-implants
```

should be able to retrieve:

```text
service.name
service.description
service.image
service.slug
```

so the frontend can generate appropriate:

- Title
- Meta description
- Canonical URL
- Open Graph data
- Structured data where appropriate

The backend itself does not need to generate HTML metadata.

---

# 12. Admin-Ready Architecture

The first version does NOT need an admin dashboard.

However, the API should be structured so an authenticated admin API can be added later.

Future routes:

```text
/api/v1/admin/practice
/api/v1/admin/doctors
/api/v1/admin/services
/api/v1/admin/testimonials
/api/v1/admin/faqs
/api/v1/admin/gallery
/api/v1/admin/before-after
/api/v1/admin/appointments
/api/v1/admin/availability
```

Future capabilities:

### Practice
- Edit practice details
- Edit hours
- Edit contact information

### Doctors
- Add
- Edit
- Activate/deactivate

### Services
- Add
- Edit
- Delete
- Reorder
- Activate/deactivate

### Testimonials
- Add
- Approve
- Hide
- Feature

### Gallery
- Add
- Edit
- Reorder
- Remove

### Before/After
- Add cases
- Edit descriptions
- Replace images
- Activate/deactivate
- Feature

### Appointments
- View
- Filter
- Confirm
- Cancel
- Complete

### Availability
- Create slots
- Block slots
- Change hours

Do not build fake authentication or a fake admin dashboard for this demo.

---

# 13. Future Authentication

When an admin panel is actually required, add:

- Authentication
- Secure password hashing
- Session/token management
- Authorization
- Role-based access
- Protected admin routes

Do not implement insecure placeholder authentication.

---

# 14. Security

Implement responsible fundamentals:

- Helmet
- Configured CORS
- Rate limiting
- Zod validation
- Safe Prisma queries
- Centralized error handling
- Request-size limits
- Environment variables
- No secrets in Git
- No sensitive data in logs

Never commit `.env`.

Provide:

```text
.env.example
```

---

# 15. Error Handling

Use a consistent response structure.

Success:

```json
{
  "success": true,
  "data": {}
}
```

Error:

```json
{
  "success": false,
  "message": "Invalid appointment details.",
  "errors": []
}
```

Use appropriate HTTP status codes.

Do not expose:

- Stack traces
- Database errors
- Internal file paths
- Secrets
- Implementation details

in production responses.

---

# 16. Database Seed

Create a development seed script with fictional demo data.

Include:

- One fictional practice
- One fictional doctor
- Several services
- Several FAQs
- Several demo testimonials
- Gallery items
- Before/After sample cases
- Example availability slots

Clearly keep this data fictional.

The seed should make it possible to run the complete project locally without manually entering database records.

---

# 17. Environment Variables

Provide:

```env
PORT=5000
NODE_ENV=development
DATABASE_URL="postgresql://..."
FRONTEND_URL="http://localhost:5173"
```

Never commit real credentials.

---

# 18. Development Commands

Expected workflow:

```bash
npm install
npx prisma generate
npx prisma migrate dev
npm run seed
npm run dev
```

Production:

```bash
npm run build
npm start
```

The exact scripts can be adapted to the existing project setup.

---

# 19. Testing

At minimum test:

- Practice endpoint
- Doctors
- Services
- Dynamic service lookup
- Testimonials
- FAQs
- Gallery
- Before/After
- Availability
- Appointment creation
- Contact creation
- Validation failures
- Invalid IDs/slugs
- Database errors
- CORS
- Rate limiting

Test the complete frontend-to-backend appointment flow.

---

# 20. API Documentation

Maintain:

```text
docs/API.md
```

Document every endpoint with:

- URL
- Method
- Purpose
- Parameters
- Request body
- Response
- Error responses
- Authentication requirements where applicable

Keep the documentation updated when endpoints change.

---

# 21. Healthcare Data Boundary

This is a production-quality website/appointment-request demo, not a medical-record platform.

Do NOT store:

- Diagnoses
- Medical history
- Medication lists
- Insurance identifiers
- Clinical records
- Sensitive treatment notes

unless the entire system is later redesigned specifically for secure healthcare data and the applicable legal/security requirements are addressed.

Do not claim:

- HIPAA compliance
- GDPR compliance
- Medical-data security certification
- Clinical accuracy
- Real appointment confirmation

unless genuinely implemented and verified for the target jurisdiction.

---

# 22. Scalability Principle

The purpose of using a database and API now is to avoid rebuilding the project when a real client asks for additional functionality.

The architecture should allow us to add:

```text
Current:
Website
+
Services
+
Doctor
+
Gallery
+
Before/After
+
Appointment Requests
+
Contact

Future:
Admin Dashboard
+
Authentication
+
Appointment Management
+
Real Availability
+
Doctor Management
+
Service Management
+
Content Management
+
Notifications
```

The frontend should not need to be fundamentally rewritten when these capabilities are introduced.

---

# 23. Definition of Done

The backend is complete when:

- PostgreSQL works.
- Prisma schema works.
- Migrations work.
- Seed data works.
- Public content endpoints work.
- Dynamic service lookup works.
- Before/After data works.
- Availability endpoint works.
- Appointment requests work.
- Contact requests work.
- Zod validation works.
- Error handling is consistent.
- Security middleware is configured.
- Environment variables are separated.
- API is versioned.
- Frontend successfully consumes the API.
- Important business content is not unnecessarily hard-coded.
- The architecture can support a future admin panel.
- The complete appointment-request flow works from browser to database.

The backend should be technically credible enough to demonstrate that Zenova can build a real data-driven website rather than only static frontend designs.
