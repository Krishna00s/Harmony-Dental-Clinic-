import React, { useEffect } from 'react';
import { Container } from '../../components/layout/Container';
import { SectionHeader } from '../../components/layout/SectionHeader';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import { testimonialsData } from '../../data/testimonialsData';
import { Star, Quote, Mail } from 'lucide-react';

export const ReviewsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Patient Reviews & Testimonials — Harmony Dental Care';
  }, []);

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Header */}
      <section className="bg-white border-b border-[#E8E7E1] py-16 md:py-24">
        <Container size="lg">
          <SectionHeader
            eyebrow="Patient Feedback"
            title="Stories of Trust, Comfort, and Renewed Smiles"
            description="Read authentic experiences shared by our patients about our care standards, atmosphere, and clinical results."
          />
        </Container>
      </section>

      {/* Testimonials Catalog Grid */}
      <section>
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((t) => (
              <Card key={t.id} className="flex flex-col justify-between space-y-6 p-8">
                <div className="space-y-4">
                  <div className="flex text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#526E68]/20" />
                  <p className="font-serif text-xl text-[#17221F] italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E8E7E1] flex justify-between items-center text-xs">
                  <span className="font-semibold text-[#17221F]">{t.displayName}</span>
                  <span className="text-[#526E68] font-medium">{t.context}</span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section>
        <Container size="lg">
          <div className="bg-[#17221F] text-white rounded-3xl p-10 text-center space-y-6">
            <h3 className="font-serif text-3xl font-medium">Have Questions for Our Practice?</h3>
            <p className="text-sm text-[#E8E7E1]/80 max-w-lg mx-auto">
              Get in touch with our team anytime. We are happy to answer your questions.
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
