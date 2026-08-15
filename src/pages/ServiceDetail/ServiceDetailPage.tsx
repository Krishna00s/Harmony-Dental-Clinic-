import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../../components/layout/Container';
import { SectionHeader } from '../../components/layout/SectionHeader';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { AccordionItem } from '../../components/ui/Accordion';
import { BeforeAfterSlider } from '../../components/ui/BeforeAfterSlider';
import { servicesData } from '../../data/servicesData';
import { beforeAfterData } from '../../data/beforeAfterData';
import { ArrowLeft, Mail, CheckCircle2, AlertCircle } from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = servicesData.find((s) => s.slug === slug);
  const beforeAfterCase = beforeAfterData[0];

  useEffect(() => {
    if (service) {
      document.title = `${service.name} — Harmony Dental Care`;
    }
  }, [service]);

  if (!service) {
    return (
      <Container size="md" className="py-24 text-center space-y-6">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
        <h2 className="font-serif text-3xl font-medium text-[#17221F]">Treatment Not Found</h2>
        <p className="text-sm text-[#17221F]/70">Could not locate details for treatment "{slug}".</p>
        <Link to="/services">
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services Catalog
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Header */}
      <section className="bg-white border-b border-[#E8E7E1] py-12 md:py-20">
        <Container size="lg">
          <Link to="/services" className="inline-flex items-center text-xs font-semibold text-[#526E68] hover:text-[#17221F] mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" /> All Treatments & Services
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <Badge variant="teal">Specialized Dental Treatment</Badge>
              <h1 className="font-serif text-4xl sm:text-5xl font-medium text-[#17221F] tracking-tight">
                {service.name}
              </h1>
              <p className="text-base sm:text-lg text-[#17221F]/70 font-sans leading-relaxed">
                {service.shortDescription}
              </p>
              <div className="pt-2">
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    <Mail className="w-4 h-4 mr-2" /> Have Questions? Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#E8E7E1]">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Detailed Description */}
      <section>
        <Container size="md">
          <Card className="space-y-6 p-8 sm:p-12">
            <h2 className="font-serif text-3xl font-medium text-[#17221F]">What the Treatment Involves</h2>
            <p className="text-sm md:text-base text-[#17221F]/80 leading-relaxed font-sans">
              {service.description}
            </p>

            <div className="pt-4 border-t border-[#E8E7E1] space-y-4">
              <h3 className="font-serif text-xl font-medium text-[#17221F]">Why Choose Harmony Dental for {service.name}?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#17221F]/80">
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#526E68] mt-0.5 flex-shrink-0" />
                  <span>Personalized step-by-step treatment plan</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#526E68] mt-0.5 flex-shrink-0" />
                  <span>Hospital-grade sterilization & digital imaging</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#526E68] mt-0.5 flex-shrink-0" />
                  <span>Minimally invasive, gentle techniques</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#526E68] mt-0.5 flex-shrink-0" />
                  <span>Clear upfront pricing with no hidden fees</span>
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* Relevant Before / After Preview */}
      {beforeAfterCase && (
        <section className="bg-white py-16 border-y border-[#E8E7E1]">
          <Container size="lg">
            <SectionHeader
              eyebrow="Clinical Outcomes"
              title="Restoration Results"
              description="See how our gentle clinical approach restores both aesthetics and oral health."
              centered
            />
            <div className="max-w-4xl mx-auto">
              <BeforeAfterSlider
                beforeImage={beforeAfterCase.beforeImage}
                afterImage={beforeAfterCase.afterImage}
                beforeAlt={beforeAfterCase.beforeAlt}
                afterAlt={beforeAfterCase.afterAlt}
                treatment={beforeAfterCase.treatment}
                description={beforeAfterCase.description}
              />
            </div>
          </Container>
        </section>
      )}

      {/* Service FAQs */}
      <section>
        <Container size="md">
          <SectionHeader
            eyebrow="Frequently Asked Questions"
            title={`Common Questions About ${service.name}`}
          />
          <div className="divide-y divide-[#E8E7E1]">
            <AccordionItem
              question={`How long does a standard ${service.name} consultation take?`}
              answer="Initial consultations typically range from 30 to 45 minutes, allowing ample time for thorough examination, digital imaging, and open discussion of treatment options."
              defaultOpen={true}
            />
            <AccordionItem
              question="Is the procedure painful?"
              answer="Your comfort is our priority. We employ gentle local anesthetics and soothing clinical techniques to ensure your visit is completely pain-free."
            />
            <AccordionItem
              question="Will insurance cover this treatment?"
              answer="Many preventive and restorative treatments are partially or fully covered by major PPO plans. Our coordinator will review your coverage before proceeding."
            />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section>
        <Container size="lg">
          <div className="bg-[#17221F] text-white rounded-3xl p-10 text-center space-y-6">
            <h3 className="font-serif text-3xl font-medium">Interested in {service.name}?</h3>
            <p className="text-sm text-[#E8E7E1]/80 max-w-lg mx-auto">
              Get in touch with our team to ask questions or learn more about this treatment.
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
