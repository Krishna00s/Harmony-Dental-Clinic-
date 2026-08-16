import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/layout/Container';
import { SectionHeader } from '../../components/layout/SectionHeader';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { servicesData } from '../../data/servicesData';
import { ArrowRight, Mail } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Treatments & Services — Harmony Dental Care | Dublin 2';
  }, []);

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Header */}
      <section className="bg-white border-b border-[#E8E7E1] py-16 md:py-24">
        <Container size="lg">
          <SectionHeader
            eyebrow="Treatments & Services"
            title="Comprehensive Care Tailored to Your Needs"
            description="From gentle preventive maintenance to full cosmetic transformations and implant restoration, every service is delivered with precision and patient comfort."
          />
        </Container>
      </section>

      {/* Service Catalog Grid */}
      <section>
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <Card key={service.id} className="flex flex-col justify-between group">
                <div>
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-[#E8E7E1]">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {service.featured && <Badge variant="teal" className="mb-3">Featured Specialisation</Badge>}
                  <h3 className="font-serif text-2xl font-medium text-[#17221F] mb-3">{service.name}</h3>
                  <p className="text-xs sm:text-sm text-[#17221F]/70 leading-relaxed font-sans mb-6">
                    {service.shortDescription}
                  </p>
                </div>
                <Link to={`/services/${service.slug}`}>
                  <Button variant="outline" className="w-full justify-between">
                    <span>View Treatment Details</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Banner */}
      <section>
        <Container size="lg">
          <div className="bg-[#17221F] text-white rounded-3xl p-10 md:p-14 text-center space-y-6">
            <h3 className="font-serif text-3xl md:text-4xl font-medium">Unsure Which Treatment You Need?</h3>
            <p className="text-sm text-[#E8E7E1]/80 max-w-xl mx-auto">
              Have questions about a specific procedure? Reach out to our clinical team in Dublin 2 and we will be happy to assist you.
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
