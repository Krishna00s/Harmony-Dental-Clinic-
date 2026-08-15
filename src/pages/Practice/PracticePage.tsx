import React, { useEffect, useState } from 'react';
import { Container } from '../../components/layout/Container';
import { SectionHeader } from '../../components/layout/SectionHeader';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Modal } from '../../components/ui/Modal';
import { Link } from 'react-router-dom';
import { galleryData } from '../../data/galleryData';
import type { GalleryItem } from '../../types';
import { Maximize2, Mail } from 'lucide-react';

export const PracticePage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    document.title = 'Our Practice — Harmony Dental Care';
  }, []);

  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      {/* Hero Header */}
      <section className="bg-white border-b border-[#E8E7E1] py-16 md:py-24">
        <Container size="lg">
          <SectionHeader
            eyebrow="Our Practice Story"
            title="Care Built Around Listening, Clarity, and Trust"
            description="We founded Harmony Dental Care on a simple principle: dentistry should feel comfortable, transparent, and tailored entirely to the individual."
          />
          <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-md border border-[#E8E7E1] mt-8">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1600"
              alt="Harmony Dental Practice Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </Container>
      </section>

      {/* 4 Pillars of Philosophy */}
      <section>
        <Container size="lg">
          <SectionHeader
            eyebrow="Our Philosophy"
            title="The 4 Pillars of Patient-Centered Care"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#526E68]/10 text-[#526E68] flex items-center justify-center font-serif text-lg font-bold">
                1
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#17221F]">We Listen</h3>
              <p className="text-xs sm:text-sm text-[#17221F]/70 leading-relaxed">
                Before any exam, we take time to understand your goals, concerns, and past dental experiences.
              </p>
            </Card>

            <Card className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#526E68]/10 text-[#526E68] flex items-center justify-center font-serif text-lg font-bold">
                2
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#17221F]">We Explain</h3>
              <p className="text-xs sm:text-sm text-[#17221F]/70 leading-relaxed">
                Clear diagnostic images and transparent explanations ensure you understand all treatment options without pressure.
              </p>
            </Card>

            <Card className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#526E68]/10 text-[#526E68] flex items-center justify-center font-serif text-lg font-bold">
                3
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#17221F]">We Plan</h3>
              <p className="text-xs sm:text-sm text-[#17221F]/70 leading-relaxed">
                Custom step-by-step treatment plans designed around your timeline, comfort, and financial preferences.
              </p>
            </Card>

            <Card className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#526E68]/10 text-[#526E68] flex items-center justify-center font-serif text-lg font-bold">
                4
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#17221F]">We Care</h3>
              <p className="text-xs sm:text-sm text-[#17221F]/70 leading-relaxed">
                Gentle procedures, soothing modern environment, and attentive post-care follow-up every step of the way.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Complete Clinic Gallery with Lightbox */}
      <section className="bg-white py-20 border-y border-[#E8E7E1]">
        <Container size="lg">
          <SectionHeader
            eyebrow="Clinic Gallery"
            title="Designed for Peace of Mind"
            description="Click any photo to view in high-resolution detail."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryData.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-xl overflow-hidden shadow-sm border border-[#E8E7E1] bg-[#F7F7F4] cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#17221F]/0 group-hover:bg-[#17221F]/30 transition-colors flex items-center justify-center">
                    <Maximize2 className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <Badge variant="stone" className="mb-1">{item.category}</Badge>
                  <h4 className="font-serif text-lg font-medium text-[#17221F]">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Accessible Lightbox Modal */}
      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        title={selectedImage?.title}
      >
        {selectedImage && (
          <div className="space-y-4">
            <div className="aspect-[16/10] rounded-xl overflow-hidden bg-[#17221F]">
              <img src={selectedImage.image} alt={selectedImage.altText} className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center justify-between text-xs text-[#17221F]/70">
              <Badge variant="teal">{selectedImage.category}</Badge>
              <span>{selectedImage.altText}</span>
            </div>
          </div>
        )}
      </Modal>

      {/* Contact CTA */}
      <section>
        <Container size="lg">
          <div className="bg-[#17221F] text-white rounded-3xl p-10 text-center space-y-6">
            <h3 className="font-serif text-3xl md:text-4xl font-medium">Experience the Harmony Difference</h3>
            <p className="text-sm text-[#E8E7E1]/80 max-w-lg mx-auto">
              Get in touch with our team today and discover dental care designed entirely around your comfort.
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
