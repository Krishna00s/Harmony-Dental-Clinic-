import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/layout/Container';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { BeforeAfterSlider } from '../../components/ui/BeforeAfterSlider';
import { getServices } from '../../services/servicesService';
import { getDoctors } from '../../services/doctorsService';
import { getBeforeAfterCases } from '../../services/beforeAfterService';
import { getTestimonials } from '../../services/testimonialsService';
import { getGallery } from '../../services/galleryService';
import type { Service, Doctor, BeforeAfterCase, Testimonial, GalleryItem } from '../../types';
import { ArrowRight, Star, ShieldCheck, Award, Users, HeartHandshake, CheckCircle2, Mail } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [beforeAfterCase, setBeforeAfterCase] = useState<BeforeAfterCase | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  useEffect(() => {
    document.title = 'Harmony Dental Care — Thoughtful Care, Without the Noise';

    async function loadHomeData() {
      try {
        const [sData, dData, baData, tData, gData] = await Promise.allSettled([
          getServices(),
          getDoctors(),
          getBeforeAfterCases(),
          getTestimonials(),
          getGallery(),
        ]);

        if (sData.status === 'fulfilled') setServices(sData.value.slice(0, 3));
        if (dData.status === 'fulfilled' && dData.value.length > 0) setDoctor(dData.value[0]);
        if (baData.status === 'fulfilled' && baData.value.length > 0) setBeforeAfterCase(baData.value[0]);
        if (tData.status === 'fulfilled') setTestimonials(tData.value.slice(0, 3));
        if (gData.status === 'fulfilled') setGallery(gData.value.slice(0, 4));
      } catch (err) {
        console.error('Error loading homepage data:', err);
      }
    }
    loadHomeData();
  }, []);

  return (
    <div className="space-y-24 md:space-y-36 pb-12">
      {/* 1. Hero Section */}
      <section className="pt-6 md:pt-12">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="teal">Compassionate Care. Beautiful Smiles.</Badge>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#17221F] tracking-tight leading-[1.1]">
                Your <span className="italic text-[#526E68]">Smile</span>, <br className="hidden sm:inline" />
                Our Priority
              </h1>

              <p className="text-base sm:text-lg text-[#17221F]/70 font-sans max-w-xl leading-relaxed">
                Personalized dental care built around listening, clear guidance, and a treatment plan that makes sense for you in a comfortable environment.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    <Mail className="w-4 h-4 mr-2" /> Contact Us
                  </Button>
                </Link>
                <Link to="/doctor">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Meet Our Doctor
                  </Button>
                </Link>
              </div>

              {/* Patient Proof Thumbnail */}
              <div className="pt-4 flex items-center space-x-4 text-xs text-[#17221F]/70">
                <div className="flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#F7F7F4] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" alt="Patient avatar" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#F7F7F4] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" alt="Patient avatar" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#F7F7F4] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" alt="Patient avatar" />
                </div>
                <div className="flex items-center space-x-1">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold text-[#17221F]">4.9/5</span>
                  <span>from 250+ happy patients</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E8E7E1] aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"
                  alt="Harmony Dental Care modern treatment suite"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17221F]/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/50 text-xs text-[#17221F]">
                  <p className="font-serif text-sm font-semibold">Calm & Comfortable Environment</p>
                  <p className="text-[#17221F]/70 mt-0.5">Designed specifically to alleviate dental anxiety.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Quiet Trust Bar */}
      <section className="bg-white py-10 border-y border-[#E8E7E1]">
        <Container size="lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#526E68]/10 text-[#526E68] flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-semibold text-[#17221F]">15+ Years</h4>
                <p className="text-xs text-[#17221F]/60">Clinical Experience</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#526E68]/10 text-[#526E68] flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-semibold text-[#17221F]">5,000+</h4>
                <p className="text-xs text-[#17221F]/60">Happy Patients</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#526E68]/10 text-[#526E68] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-semibold text-[#17221F]">High Standards</h4>
                <p className="text-xs text-[#17221F]/60">Hospital-Grade Hygiene</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#526E68]/10 text-[#526E68] flex items-center justify-center flex-shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-semibold text-[#17221F]">New Patients</h4>
                <p className="text-xs text-[#17221F]/60">Warmly Welcomed</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Visual Introduction to the Practice */}
      <section>
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="teal">Our Approach</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#17221F] leading-tight">
                Dental Care Built Around Listening, Clarity, and Peace of Mind
              </h2>
              <p className="text-sm md:text-base text-[#17221F]/70 leading-relaxed font-sans">
                We believe dentistry is most effective when patients feel completely heard, respected, and involved in their care choices. From your first consultation through post-treatment follow-up, our team moves at your pace.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm text-[#17221F]">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#526E68] flex-shrink-0" />
                  <span>No pressure or rushed exams</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#526E68] flex-shrink-0" />
                  <span>Transparent upfront pricing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#526E68] flex-shrink-0" />
                  <span>Low-dose 3D digital imaging</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#526E68] flex-shrink-0" />
                  <span>Hospital-grade sterilization</span>
                </div>
              </div>
              <div className="pt-2">
                <Link to="/practice">
                  <Button variant="outline">
                    Learn More About Our Practice <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                  <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" alt="Comfortable dental treatment suite" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-md mt-8">
                  <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" alt="Sterilized clinical tools" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Featured Services Preview (Links to /services and /services/:slug) */}
      <section className="bg-white py-20 border-y border-[#E8E7E1]">
        <Container size="lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <Badge variant="teal" className="mb-2">Our Services</Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#17221F]">
                Comprehensive Care for Every Smile
              </h2>
            </div>
            <Link to="/services" className="mt-4 md:mt-0">
              <Button variant="outline" size="sm">
                View All Services <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="flex flex-col justify-between group">
                <div>
                  <div className="aspect-[16/10] rounded-lg overflow-hidden mb-6 bg-[#E8E7E1]">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#17221F] mb-2">{service.name}</h3>
                  <p className="text-xs sm:text-sm text-[#17221F]/70 leading-relaxed font-sans mb-6">
                    {service.shortDescription}
                  </p>
                </div>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center text-xs font-semibold text-[#526E68] hover:text-[#17221F] transition-colors"
                >
                  Explore Service <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Smile Transformations / Before & After Preview */}
      <section className="py-12">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="teal">See The Difference</Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#17221F]">
                Precise Restorations. Natural Results.
              </h2>
              <p className="text-sm md:text-base text-[#17221F]/70 leading-relaxed">
                Drag the interactive slider handle to see before and after treatment outcomes. We focus on conservative, natural restorations that preserve your healthy enamel while harmonizing your bite.
              </p>
              <div className="pt-2">
                <Link to="/services/porcelain-veneers">
                  <Button variant="outline">
                    Explore Porcelain Veneers <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              {beforeAfterCase ? (
                <BeforeAfterSlider
                  beforeImage={beforeAfterCase.beforeImage}
                  afterImage={beforeAfterCase.afterImage}
                  beforeAlt={beforeAfterCase.beforeAlt}
                  afterAlt={beforeAfterCase.afterAlt}
                  treatment={beforeAfterCase.treatment}
                  description={beforeAfterCase.description}
                />
              ) : (
                <div className="aspect-[16/9] bg-[#E8E7E1] rounded-xl flex items-center justify-center text-xs text-[#17221F]/50">
                  Loading transformation preview...
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Doctor Introduction (Links to /doctor) */}
      <section className="bg-white py-20 border-y border-[#E8E7E1]">
        <Container size="lg">
          {doctor && (
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
                <Badge variant="teal">Meet Your Dentist</Badge>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#17221F]">
                  {doctor.name}
                </h2>
                <p className="text-xs uppercase tracking-wider text-[#526E68] font-semibold">
                  {doctor.specialty}
                </p>
                <p className="text-sm md:text-base text-[#17221F]/70 leading-relaxed">
                  {doctor.biography}
                </p>
                <div className="pt-2">
                  <Link to="/doctor">
                    <Button variant="primary">
                      Meet Dr. Sarah Mitchell <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* 7. Patient Experience / Testimonials Highlights */}
      <section>
        <Container size="lg">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <Badge variant="teal">Patient Experience</Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#17221F]">
              What Our Patients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <Card key={t.id} className="flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="font-serif text-lg text-[#17221F] italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E8E7E1] flex justify-between items-center text-xs">
                  <span className="font-semibold text-[#17221F]">{t.displayName}</span>
                  <span className="text-[#526E68]">{t.context}</span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Asymmetric Editorial Clinic Gallery Preview */}
      <section className="bg-white py-20 border-y border-[#E8E7E1]">
        <Container size="lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <Badge variant="teal" className="mb-2">Clinic Environment</Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#17221F]">
                An Atmosphere Designed for Comfort
              </h2>
            </div>
            <Link to="/practice" className="mt-4 md:mt-0">
              <Button variant="outline" size="sm">
                Explore Full Gallery →
              </Button>
            </Link>
          </div>

          {/* Asymmetric Composition Layout */}
          {gallery.length >= 4 && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-7 rounded-2xl overflow-hidden aspect-[16/10] border border-[#E8E7E1] shadow-sm group">
                <img src={gallery[0].image} alt={gallery[0].altText} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="md:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto border border-[#E8E7E1] shadow-sm group">
                <img src={gallery[1].image} alt={gallery[1].altText} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="md:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto border border-[#E8E7E1] shadow-sm group">
                <img src={gallery[2].image} alt={gallery[2].altText} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="md:col-span-7 rounded-2xl overflow-hidden aspect-[16/10] border border-[#E8E7E1] shadow-sm group">
                <img src={gallery[3].image} alt={gallery[3].altText} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* 9. Contact Us Conversion CTA Banner */}
      <section>
        <Container size="lg">
          <div className="bg-[#17221F] text-white rounded-3xl p-10 md:p-16 text-center space-y-6 shadow-xl">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight max-w-2xl mx-auto">
              Have Questions About Your Oral Health?
            </h2>
            <p className="text-sm md:text-base text-[#E8E7E1]/80 max-w-xl mx-auto font-sans leading-relaxed">
              We are here to help. Reach out to our friendly team to learn more about our practice, treatments, or location.
            </p>
            <div className="pt-4">
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
