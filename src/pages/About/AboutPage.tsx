import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/layout/Container';
import { SectionHeader } from '../../components/layout/SectionHeader';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Mail, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { doctorsData } from '../../data/doctorsData';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us — Harmony Dental Care | Dublin 2';
  }, []);

  const doctor = doctorsData[0];

  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      {/* Hero Header */}
      <section className="bg-white border-b border-[#E8E7E1] py-16 md:py-24">
        <Container size="lg">
          <SectionHeader
            eyebrow="About Harmony Dental Care"
            title="A Calm, Thoughtful Approach to Modern Dentistry"
            description="Founded with the belief that healthcare should feel personal, reassuring, and transparent. We exist to provide dental care centred entirely around your comfort and long-term well-being."
          />
          <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-md border border-[#E8E7E1] mt-8">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600"
              alt="Harmony Dental Care practice environment in Dublin 2"
              className="w-full h-full object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Why We Exist & Our Origins */}
      <section>
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="teal">Why We Exist</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#17221F] leading-tight">
                Redefining the Dental Visit Experience
              </h2>
              <p className="text-sm md:text-base text-[#17221F]/70 leading-relaxed font-sans">
                Dental appointments often evoke anxiety or feel transactional. At Harmony Dental Care, we designed our Dublin practice from the ground up to counteract that norm. We prioritise unhurried conversations, acoustic comfort, and gentle clinical mastery.
              </p>
              <p className="text-sm md:text-base text-[#17221F]/70 leading-relaxed font-sans">
                Every member of our team is trained not only in advanced clinical techniques, but in active listening and empathetic patient communication.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                    alt="Dr. Siobhán O'Connor listening to a patient"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800"
                    alt="Private patient consultation lounge"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Patient-First Values */}
      <section className="bg-white py-20 border-y border-[#E8E7E1]">
        <Container size="lg">
          <SectionHeader
            eyebrow="Our Core Values"
            title="The Principles That Guide Every Treatment"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="space-y-4 p-8">
              <div className="w-12 h-12 rounded-full bg-[#526E68]/10 text-[#526E68] flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#17221F]">Respect & Empathy</h3>
              <p className="text-xs sm:text-sm text-[#17221F]/70 leading-relaxed font-sans">
                We respect your time, your comfort levels, and your choices. We never judge past dental delays and always move at your preferred pace.
              </p>
            </Card>

            <Card className="space-y-4 p-8">
              <div className="w-12 h-12 rounded-full bg-[#526E68]/10 text-[#526E68] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#17221F]">Clinical Precision</h3>
              <p className="text-xs sm:text-sm text-[#17221F]/70 leading-relaxed font-sans">
                We utilise state-of-the-art 3D imaging, digital shade matching, and hospital-grade sterilisation to deliver long-lasting, predictable results.
              </p>
            </Card>

            <Card className="space-y-4 p-8">
              <div className="w-12 h-12 rounded-full bg-[#526E68]/10 text-[#526E68] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#17221F]">Transparent Guidance</h3>
              <p className="text-xs sm:text-sm text-[#17221F]/70 leading-relaxed font-sans">
                No hidden fees, no sales tactics, and no unexpected procedures. Every step of your care plan is explained clearly upfront.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Clinic Culture & Doctor Introduction */}
      <section>
        <Container size="lg">
          <div className="bg-[#E8E7E1]/40 rounded-3xl p-8 sm:p-14 border border-[#E8E7E1]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <Badge variant="teal">Lead Practitioner</Badge>
                <h3 className="font-serif text-3xl sm:text-4xl font-medium text-[#17221F]">
                  {doctor.name}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#526E68] font-semibold">
                  {doctor.specialty}
                </p>
                <p className="text-sm md:text-base text-[#17221F]/80 leading-relaxed font-sans">
                  "{doctor.biography}"
                </p>
                <div className="pt-2">
                  <Link to="/doctor">
                    <Button variant="outline">
                      Read Full Doctor Profile →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final Contact CTA */}
      <section>
        <Container size="lg">
          <div className="bg-[#17221F] text-white rounded-3xl p-10 md:p-14 text-center space-y-6">
            <h3 className="font-serif text-3xl md:text-4xl font-medium">Get in Touch with Harmony Dental</h3>
            <p className="text-sm text-[#E8E7E1]/80 max-w-lg mx-auto">
              We warmly welcome new private patients. Contact our Dublin practice team to learn more about our philosophy and services.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                <Mail className="w-4 h-4 mr-2" /> Contact Us
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
