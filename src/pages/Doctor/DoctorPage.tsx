import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/layout/Container';
import { SectionHeader } from '../../components/layout/SectionHeader';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { doctorsData } from '../../data/doctorsData';
import { CheckCircle2, GraduationCap, Mail } from 'lucide-react';

export const DoctorPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Doctor — Dr. Sarah Mitchell, DDS | Harmony Dental Care';
  }, []);

  const doctor = doctorsData[0];

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Header Profile Section */}
      <section className="bg-white border-b border-[#E8E7E1] py-16 md:py-24">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-[#E8E7E1]">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="teal">Lead Practitioner</Badge>
              <h1 className="font-serif text-4xl sm:text-5xl font-medium text-[#17221F] tracking-tight">
                {doctor.name}
              </h1>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#526E68]">
                {doctor.specialty}
              </p>
              <p className="text-base sm:text-lg text-[#17221F]/70 font-sans leading-relaxed">
                {doctor.biography}
              </p>
              <div className="pt-2">
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    <Mail className="w-4 h-4 mr-2" /> Get in Touch with Dr. Mitchell
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Credentials & Verified Background */}
      <section>
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                eyebrow="Credentials & Qualifications"
                title="Rigorous Education & Continuous Excellence"
              />
              <div className="space-y-4">
                {doctor.credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-[#E8E7E1]">
                    <GraduationCap className="w-5 h-5 text-[#526E68] mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium text-[#17221F] font-sans">{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                eyebrow="Areas of Interest"
                title="Specialized Clinical Focus"
              />
              <Card className="space-y-4 p-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#526E68] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif text-xl font-medium text-[#17221F]">Minimally Invasive Cosmetic Dentistry</h4>
                    <p className="text-xs sm:text-sm text-[#17221F]/70 mt-1">Preserving maximum natural tooth structure while enhancing translucency and shade.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-3 border-t border-[#E8E7E1]">
                  <CheckCircle2 className="w-5 h-5 text-[#526E68] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif text-xl font-medium text-[#17221F]">Digital Implant Planning</h4>
                    <p className="text-xs sm:text-sm text-[#17221F]/70 mt-1">Utilizing precise 3D cone-beam imaging for exact titanium post placement and restoration.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-3 border-t border-[#E8E7E1]">
                  <CheckCircle2 className="w-5 h-5 text-[#526E68] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif text-xl font-medium text-[#17221F]">Anxiety-Free Patient Communication</h4>
                    <p className="text-xs sm:text-sm text-[#17221F]/70 mt-1">Dedicated to creating an environment where nervous patients feel completely safe and heard.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section>
        <Container size="lg">
          <div className="bg-[#17221F] text-white rounded-3xl p-10 text-center space-y-6">
            <h3 className="font-serif text-3xl font-medium">Have Questions for Dr. Mitchell?</h3>
            <p className="text-sm text-[#E8E7E1]/80 max-w-lg mx-auto">
              Reach out to our team anytime. We look forward to welcoming you to Harmony Dental Care.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                <Mail className="w-4 h-4 mr-2" /> Contact Our Team
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
