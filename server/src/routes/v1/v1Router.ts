import { Router } from 'express';
import { practiceController } from '../../controllers/practiceController.js';
import { doctorsController } from '../../controllers/doctorsController.js';
import { servicesController } from '../../controllers/servicesController.js';
import { testimonialsController } from '../../controllers/testimonialsController.js';
import { faqsController } from '../../controllers/faqsController.js';
import { galleryController } from '../../controllers/galleryController.js';
import { beforeAfterController } from '../../controllers/beforeAfterController.js';
import { availabilityController } from '../../controllers/availabilityController.js';
import { appointmentsController } from '../../controllers/appointmentsController.js';
import { contactController } from '../../controllers/contactController.js';
import { validateBody } from '../../middleware/validateRequest.js';
import { appointmentSchema } from '../../schemas/appointmentSchema.js';
import { contactSchema } from '../../schemas/contactSchema.js';

const router = Router();

// Practice
router.get('/practice', practiceController.getPractice);

// Doctors
router.get('/doctors', doctorsController.getDoctors);
router.get('/doctors/:id', doctorsController.getDoctorById);

// Services
router.get('/services', servicesController.getServices);
router.get('/services/:slug', servicesController.getServiceBySlug);

// Testimonials, FAQs, Gallery
router.get('/testimonials', testimonialsController.getTestimonials);
router.get('/faqs', faqsController.getFaqs);
router.get('/gallery', galleryController.getGallery);

// Before / After
router.get('/before-after', beforeAfterController.getCases);
router.get('/before-after/:id', beforeAfterController.getCaseById);

// Availability & Submissions
router.get('/availability', availabilityController.getAvailability);
router.post('/appointments', validateBody(appointmentSchema), appointmentsController.createAppointment);
router.post('/contact', validateBody(contactSchema), contactController.createContact);

export default router;
