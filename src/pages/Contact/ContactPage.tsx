import React, { useEffect } from 'react';
import { Container } from '../../components/layout/Container';
import { SectionHeader } from '../../components/layout/SectionHeader';
import { ContactForm } from '../../components/forms/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us — Harmony Dental Care';
  }, []);

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Header */}
      <section className="bg-white border-b border-[#E8E7E1] py-16 md:py-24">
        <Container size="lg">
          <SectionHeader
            eyebrow="Contact Us"
            title="We're Here to Help"
            description="Whether you have questions about our treatments, need directions to our practice, or want to speak with our front desk team, reach out anytime."
          />
        </Container>
      </section>

      {/* Main Grid: Details + Contact Form */}
      <section>
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details & Practice Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-medium text-[#17221F]">Harmony Dental Care</h3>
                <p className="text-sm text-[#17221F]/70 leading-relaxed font-sans">
                  Located conveniently in the heart of San Diego's healthcare district with dedicated patient parking.
                </p>
              </div>

              {/* Location Photo */}
              <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-sm border border-[#E8E7E1]">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
                  alt="Harmony Dental Practice Exterior and Reception"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-sm text-[#17221F]/80">
                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-[#E8E7E1]">
                  <MapPin className="w-5 h-5 text-[#526E68] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#17221F]">Address</p>
                    <p className="text-xs text-[#17221F]/70 mt-0.5">123 Healthcare Way, Suite 400<br />San Diego, CA 92101</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-[#E8E7E1]">
                  <Phone className="w-5 h-5 text-[#526E68] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#17221F]">Telephone</p>
                    <p className="text-xs text-[#17221F]/70 mt-0.5">+1 (555) 234-5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-[#E8E7E1]">
                  <Mail className="w-5 h-5 text-[#526E68] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#17221F]">Email</p>
                    <p className="text-xs text-[#17221F]/70 mt-0.5">hello@harmonydental.demo</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-[#E8E7E1]">
                  <Clock className="w-5 h-5 text-[#526E68] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#17221F]">Practice Hours</p>
                    <p className="text-xs text-[#17221F]/70 mt-0.5">Mon – Thu: 8:00 AM – 5:00 PM</p>
                    <p className="text-xs text-[#17221F]/70">Friday: 8:00 AM – 2:00 PM</p>
                    <p className="text-[11px] text-[#526E68] mt-1 font-medium">Sat & Sun: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-[#E8E7E1] bg-[#E8E7E1] relative flex items-center justify-center p-6 text-center">
                <div className="space-y-2">
                  <MapPin className="w-8 h-8 text-[#526E68] mx-auto animate-bounce" />
                  <p className="font-serif text-base font-semibold text-[#17221F]">San Diego Clinic Location</p>
                  <p className="text-xs text-[#17221F]/60">Interactive Google Maps View Embed Placeholder</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
