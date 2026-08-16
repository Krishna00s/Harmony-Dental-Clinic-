import type { Doctor } from '../types';

export const doctorsData: Doctor[] = [
  {
    id: 'doc-1',
    name: "Dr. Siobhán O'Connor, BDS",
    specialty: 'General & Restorative Dental Specialist',
    biography: "Dr. Siobhán O'Connor has dedicated over 15 years to providing patient-centred dental care in Dublin. Born and raised in Co. Dublin, she earned her Bachelor of Dental Surgery degree with first class honours from Trinity College Dublin and holds Membership of the Faculty of Dentistry at the Royal College of Surgeons in Ireland (RCSI). She regularly completes postgraduate training in minimally invasive aesthetic restoration and digital dentistry. Her clinical philosophy focuses on active listening, precise technique, and creating a calm environment where nervous patients feel completely supported.",
    credentials: [
      'BDS — Bachelor of Dental Surgery (Trinity College Dublin, First Class Honours)',
      'MFD — Member of the Faculty of Dentistry (Royal College of Surgeons in Ireland — RCSI)',
      'PgDip — Postgraduate Diploma in Aesthetic Restorative Dentistry',
      'Member — Irish Dental Association (IDA)',
      'Advanced Training in Low-Dose Digital Radiography & Minimally Invasive Care',
    ],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1000',
    featured: true,
    active: true,
    displayOrder: 1,
  },
];
