import React, { useEffect } from 'react';
import { Container } from '../../components/layout/Container';
import { SectionHeader } from '../../components/layout/SectionHeader';
import { AppointmentForm } from '../../components/forms/AppointmentForm';
import { Calendar, ShieldCheck, Clock } from 'lucide-react';

export const BookAppointmentPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Request an Appointment — Harmony Dental Care';
  }, []);

  return (
    <div className="space-y-12 md:space-y-16 pb-16">
      {/* Header */}
      <section className="bg-white border-b border-[#E8E7E1] py-12 md:py-20">
        <Container size="lg">
          <SectionHeader
            eyebrow="Appointment Request"
            title="Book Your Visit with Harmony Dental"
            description="Select your preferred date, time slot, and treatment type below. Our scheduling coordinator will confirm your request within 24 hours."
            centered
          />

          <div className="flex flex-wrap justify-center gap-6 text-xs text-[#17221F]/70 font-sans mt-6">
            <div className="flex items-center space-x-1.5 bg-[#F7F7F4] px-3 py-1.5 rounded-full border border-[#E8E7E1]">
              <Calendar className="w-3.5 h-3.5 text-[#526E68]" />
              <span>Real-Time Date & Time Selection</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-[#F7F7F4] px-3 py-1.5 rounded-full border border-[#E8E7E1]">
              <Clock className="w-3.5 h-3.5 text-[#526E68]" />
              <span>Fast 24h Coordinator Response</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-[#F7F7F4] px-3 py-1.5 rounded-full border border-[#E8E7E1]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#526E68]" />
              <span>Zero-Pressure Consultation</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Booking Form Section */}
      <section>
        <Container size="lg">
          <AppointmentForm />
        </Container>
      </section>
    </div>
  );
};
