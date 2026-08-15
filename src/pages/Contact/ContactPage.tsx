import React, { useEffect } from 'react';
import { Container } from '../../components/layout/Container';
import { SectionHeader } from '../../components/layout/SectionHeader';
import { ContactForm } from '../../components/forms/ContactForm';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { Button } from '../../components/ui/Button';

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

      {/* Main Grid: Balanced 2-Column Composition */}
      <section>
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Practice Info, Image, 2x2 Info Grid & Location */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <h3 className="font-serif text-3xl font-medium text-[#17221F]">Harmony Dental Care</h3>
                <p className="text-sm text-[#17221F]/70 leading-relaxed font-sans max-w-lg">
                  Located conveniently in San Diego’s healthcare district with dedicated, free patient parking and step-free access.
                </p>
              </div>

              {/* Clinic Environment Visual */}
              <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-sm border border-[#E8E7E1]">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"
                  alt="Harmony Dental Practice Reception Area"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 2x2 Balanced Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-[#E8E7E1] space-y-1">
                  <div className="flex items-center space-x-2 text-[#526E68]">
                    <MapPin className="w-4 h-4" />
                    <span className="font-semibold text-xs text-[#17221F]">Address</span>
                  </div>
                  <p className="text-xs text-[#17221F]/70 font-sans leading-relaxed">
                    123 Healthcare Way, Suite 400<br />San Diego, CA 92101
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#E8E7E1] space-y-1">
                  <div className="flex items-center space-x-2 text-[#526E68]">
                    <Phone className="w-4 h-4" />
                    <span className="font-semibold text-xs text-[#17221F]">Telephone</span>
                  </div>
                  <p className="text-xs text-[#17221F]/70 font-sans leading-relaxed">
                    +1 (555) 234-5678<br />
                    <span className="text-[10px] text-[#526E68]">Mon–Fri 8am–5pm</span>
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#E8E7E1] space-y-1">
                  <div className="flex items-center space-x-2 text-[#526E68]">
                    <Mail className="w-4 h-4" />
                    <span className="font-semibold text-xs text-[#17221F]">Email</span>
                  </div>
                  <p className="text-xs text-[#17221F]/70 font-sans leading-relaxed">
                    hello@harmonydental.demo<br />
                    <span className="text-[10px] text-[#526E68]">24h email response</span>
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#E8E7E1] space-y-1">
                  <div className="flex items-center space-x-2 text-[#526E68]">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold text-xs text-[#17221F]">Practice Hours</span>
                  </div>
                  <p className="text-xs text-[#17221F]/70 font-sans leading-relaxed">
                    Mon–Thu: 8am – 5pm<br />
                    Fri: 8am – 2pm (Sat/Sun Closed)
                  </p>
                </div>
              </div>

              {/* Location & Map Area */}
              <div className="p-6 bg-white rounded-2xl border border-[#E8E7E1] space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-[#526E68]" />
                    <h4 className="font-serif text-lg font-semibold text-[#17221F]">San Diego Clinic Location</h4>
                  </div>
                  <span className="text-[11px] font-semibold text-[#526E68] bg-[#526E68]/10 px-2.5 py-1 rounded-full">
                    Free Parking Available
                  </span>
                </div>
                <p className="text-xs text-[#17221F]/70 leading-relaxed font-sans">
                  Located near Balboa Park on Healthcare Way. Dedicated patient parking spaces are located immediately adjacent to the building entrance.
                </p>
                <div className="pt-1">
                  <a
                    href="https://maps.google.com/?q=123+Healthcare+Way+San+Diego+CA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Button variant="outline" size="sm">
                      Get Directions on Google Maps <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Prominent Contact Form */}
            <div className="lg:col-span-6 sticky top-28">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
