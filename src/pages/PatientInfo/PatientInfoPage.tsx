import React, { useEffect } from 'react';
import { Container } from '../../components/layout/Container';
import { SectionHeader } from '../../components/layout/SectionHeader';
import { Card } from '../../components/ui/Card';
import { AccordionItem } from '../../components/ui/Accordion';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import { faqsData } from '../../data/faqsData';
import { Shield, CreditCard, Mail } from 'lucide-react';

export const PatientInfoPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Patient Information & FAQ — Harmony Dental Care';
  }, []);

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Header */}
      <section className="bg-white border-b border-[#E8E7E1] py-16 md:py-24">
        <Container size="lg">
          <SectionHeader
            eyebrow="Patient Information"
            title="Everything You Need to Know Before Your Visit"
            description="We want your experience with us to be transparent, smooth, and stress-free from the moment you step through our doors."
          />
        </Container>
      </section>

      {/* 3 Step New Patient Guide */}
      <section>
        <Container size="lg">
          <SectionHeader
            eyebrow="First Visit Guide"
            title="What to Expect on Your First Visit"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#526E68]/10 text-[#526E68] flex items-center justify-center font-serif text-lg font-bold">
                1
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#17221F]">Warm Welcome & Intake</h3>
              <p className="text-xs sm:text-sm text-[#17221F]/70 leading-relaxed font-sans">
                Arrive 10 minutes prior to your scheduled time. Enjoy our quiet living area while completing basic contact preferences.
              </p>
            </Card>

            <Card className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#526E68]/10 text-[#526E68] flex items-center justify-center font-serif text-lg font-bold">
                2
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#17221F]">Comprehensive Exam</h3>
              <p className="text-xs sm:text-sm text-[#17221F]/70 leading-relaxed font-sans">
                Dr. Mitchell will review your oral health history, conduct a gentle examination, and take low-dose digital images as needed.
              </p>
            </Card>

            <Card className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#526E68]/10 text-[#526E68] flex items-center justify-center font-serif text-lg font-bold">
                3
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#17221F]">Open Discussion</h3>
              <p className="text-xs sm:text-sm text-[#17221F]/70 leading-relaxed font-sans">
                We present clear findings and options. No pressure, no unexpected costs — just honest guidance built around your timeline.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Insurance & Payment Info */}
      <section className="bg-white py-16 border-y border-[#E8E7E1]">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="space-y-4 p-8">
              <CreditCard className="w-8 h-8 text-[#526E68]" />
              <h3 className="font-serif text-2xl font-medium text-[#17221F]">Insurance & Billing</h3>
              <p className="text-xs sm:text-sm text-[#17221F]/70 leading-relaxed">
                We accept most major PPO dental insurance plans. Our front desk staff will handle claims processing directly on your behalf to maximize your benefits.
              </p>
            </Card>

            <Card className="space-y-4 p-8">
              <Shield className="w-8 h-8 text-[#526E68]" />
              <h3 className="font-serif text-2xl font-medium text-[#17221F]">Patient Safety & Hygiene</h3>
              <p className="text-xs sm:text-sm text-[#17221F]/70 leading-relaxed">
                We follow strict hospital-grade sterilization protocols exceeding CDC and ADA recommendations to ensure complete peace of mind during every procedure.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* FAQ Accordion */}
      <section>
        <Container size="md">
          <SectionHeader
            eyebrow="Frequently Asked Questions"
            title="Common Questions from New & Returning Patients"
          />

          <div className="divide-y divide-[#E8E7E1]">
            {faqsData.map((faq, idx) => (
              <AccordionItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={idx === 0}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section>
        <Container size="lg">
          <div className="bg-[#17221F] text-white rounded-3xl p-10 text-center space-y-6">
            <h3 className="font-serif text-3xl font-medium">Have Additional Questions?</h3>
            <p className="text-sm text-[#E8E7E1]/80 max-w-lg mx-auto">
              Our friendly administrative team is happy to assist you by phone or email.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg">
                  <Mail className="w-4 h-4 mr-2" /> Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
