import type { Doctor } from '../types';

export const doctorsData: Doctor[] = [
  {
    id: 'doc-1',
    name: 'Dr. Sarah Mitchell, DDS',
    specialty: 'Cosmetic & Restorative Dental Specialist',
    biography: 'Dr. Sarah Mitchell has dedicated over 15 years to providing patient-centered dental care. She earned her Doctor of Dental Surgery degree with high honors from UCSF School of Dentistry and regularly completes advanced international training in minimally invasive aesthetic restoration and digital implantology. Her philosophy centers on active listening, clinical precision, and creating a calming environment where every patient feels completely heard and comfortable.',
    credentials: [
      'DDS — Doctor of Dental Surgery (UCSF School of Dentistry, Class Honors)',
      'Fellowship — International Congress of Oral Implantologists (ICOI)',
      'Member — American Academy of Cosmetic Dentistry (AACD)',
      'Member — American Dental Association (ADA) & California Dental Association (CDA)',
      'Advanced Certification in Low-Dose 3D Cone Beam Imaging & CAD/CAM Restorations',
    ],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1000',
    featured: true,
    active: true,
    displayOrder: 1,
  },
];
