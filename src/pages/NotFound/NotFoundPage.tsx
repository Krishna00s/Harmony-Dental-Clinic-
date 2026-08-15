import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/layout/Container';
import { Button } from '../../components/ui/Button';
import { ArrowLeft, AlertCircle } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found — Harmony Dental Care';
  }, []);

  return (
    <Container size="md" className="py-24 md:py-36 text-center space-y-6">
      <div className="w-16 h-16 bg-[#526E68]/10 text-[#526E68] rounded-full flex items-center justify-center mx-auto">
        <AlertCircle className="w-8 h-8" />
      </div>
      <h1 className="font-serif text-4xl sm:text-5xl font-medium text-[#17221F]">Page Not Found</h1>
      <p className="text-base text-[#17221F]/70 font-sans max-w-md mx-auto">
        The page you are looking for might have been moved, removed, or is temporarily unavailable.
      </p>
      <div className="pt-4">
        <Link to="/">
          <Button variant="primary" size="lg">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Button>
        </Link>
      </div>
    </Container>
  );
};
