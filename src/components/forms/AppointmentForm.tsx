import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { CheckCircle2, Calendar as CalendarIcon, Clock, User, Mail, Phone, FileText, AlertCircle } from 'lucide-react';

interface AppointmentFormProps {
  initialServiceSlug?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ initialServiceSlug }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [appointmentType, setAppointmentType] = useState('General Dentistry');
  const [preferredDate, setPreferredDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [preferredTime, setPreferredTime] = useState('09:00 AM');

  // Form Fields
  const [patientName, setPatientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');

  // Status
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Set initial service if provided
  useEffect(() => {
    if (initialServiceSlug === 'cosmetic-dentistry') setAppointmentType('Cosmetic Dentistry');
    if (initialServiceSlug === 'dental-implants') setAppointmentType('Dental Implants');
    if (initialServiceSlug === 'orthodontics') setAppointmentType('Orthodontics');
    if (initialServiceSlug === 'emergency-care') setAppointmentType('Emergency Care');
  }, [initialServiceSlug]);

  const availableTimes = ['08:30 AM', '10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM'];

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!preferredDate || !preferredTime) {
      setErrorMsg('Please select both a date and an available time slot.');
      return;
    }
    setErrorMsg(null);
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!patientName.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg('Please fill in all required contact details.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 400);
  };

  if (success) {
    return (
      <div className="bg-white border border-[#E8E7E1] rounded-2xl p-8 text-center max-w-lg mx-auto shadow-sm">
        <div className="w-14 h-14 bg-[#526E68]/10 text-[#526E68] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl font-medium text-[#17221F]">Request Submitted</h3>
        <p className="mt-3 text-sm text-[#17221F]/70 leading-relaxed font-sans">
          Thank you, <span className="font-semibold text-[#17221F]">{patientName}</span>. Your appointment request for{' '}
          <span className="font-semibold text-[#17221F]">{appointmentType}</span> on{' '}
          <span className="font-semibold text-[#17221F]">{preferredDate}</span> at{' '}
          <span className="font-semibold text-[#17221F]">{preferredTime}</span> has been submitted for this demo.
        </p>
        <div className="mt-6 p-4 bg-[#F7F7F4] rounded-xl text-xs text-[#17221F]/60 text-left space-y-1">
          <p className="font-medium text-[#17221F]">Demo Information:</p>
          <p>This request is a client frontend demo presentation and has been validated locally.</p>
        </div>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setSuccess(false);
            setStep(1);
            setPatientName('');
            setEmail('');
            setPhone('');
            setNote('');
          }}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E8E7E1] rounded-2xl p-6 sm:p-10 shadow-sm max-w-2xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E8E7E1]">
        <div className="flex items-center space-x-3">
          <span
            className={`w-7 h-7 rounded-full text-xs font-semibold flex items-center justify-center ${
              step === 1 ? 'bg-[#17221F] text-white' : 'bg-[#526E68] text-white'
            }`}
          >
            1
          </span>
          <span className="text-xs md:text-sm font-medium text-[#17221F]">Treatment & Time</span>
        </div>
        <div className="w-12 h-0.5 bg-[#E8E7E1]" />
        <div className="flex items-center space-x-3">
          <span
            className={`w-7 h-7 rounded-full text-xs font-semibold flex items-center justify-center ${
              step === 2 ? 'bg-[#17221F] text-white' : 'bg-[#E8E7E1] text-[#17221F]/50'
            }`}
          >
            2
          </span>
          <span className="text-xs md:text-sm font-medium text-[#17221F]/70">Patient Details</span>
        </div>
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm rounded-xl flex items-start space-x-2">
          <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {step === 1 ? (
        <form onSubmit={handleNextStep} className="space-y-6">
          {/* Service Selection */}
          <div>
            <label className="block text-xs font-semibold text-[#17221F] uppercase tracking-wider mb-2">
              Select Appointment Type
            </label>
            <select
              value={appointmentType}
              onChange={(e) => setAppointmentType(e.target.value)}
              className="w-full bg-[#F7F7F4] border border-[#D9CFC0] rounded-xl px-4 py-3 text-sm text-[#17221F] focus:outline-none focus:ring-2 focus:ring-[#526E68]"
            >
              <option value="General Dentistry">General Dentistry & Consultation</option>
              <option value="Cosmetic Dentistry">Cosmetic Consultation & Veneers</option>
              <option value="Dental Implants">Dental Implants Evaluation</option>
              <option value="Orthodontics">Orthodontics & Clear Aligners</option>
              <option value="Emergency Care">Emergency Care</option>
            </select>
          </div>

          {/* Date Picker */}
          <div>
            <label className="block text-xs font-semibold text-[#17221F] uppercase tracking-wider mb-2 flex items-center">
              <CalendarIcon className="w-3.5 h-3.5 mr-1 text-[#526E68]" /> Preferred Date
            </label>
            <input
              type="date"
              value={preferredDate}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="w-full bg-[#F7F7F4] border border-[#D9CFC0] rounded-xl px-4 py-3 text-sm text-[#17221F] focus:outline-none focus:ring-2 focus:ring-[#526E68]"
              required
            />
          </div>

          {/* Available Time Slots */}
          <div>
            <label className="block text-xs font-semibold text-[#17221F] uppercase tracking-wider mb-2 flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-[#526E68]" /> Available Time Slots
            </label>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {availableTimes.map((timeStr) => (
                <button
                  key={timeStr}
                  type="button"
                  onClick={() => setPreferredTime(timeStr)}
                  className={`py-2.5 px-3 text-xs sm:text-sm font-medium rounded-xl border transition-all ${
                    preferredTime === timeStr
                      ? 'bg-[#17221F] text-white border-[#17221F] shadow-sm'
                      : 'bg-[#F7F7F4] text-[#17221F] border-[#E8E7E1] hover:border-[#526E68]'
                  }`}
                >
                  {timeStr}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <Button type="submit" variant="primary" className="w-full py-3.5">
              Continue to Patient Details →
            </Button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Summary Box */}
          <div className="p-4 bg-[#F7F7F4] rounded-xl text-xs text-[#17221F] flex items-center justify-between border border-[#E8E7E1]">
            <div>
              <span className="font-semibold">{appointmentType}</span> on{' '}
              <span className="font-semibold">{preferredDate}</span> at{' '}
              <span className="font-semibold">{preferredTime}</span>
            </div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-[#526E68] font-medium hover:underline"
            >
              Change
            </button>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-[#17221F] uppercase tracking-wider mb-1 flex items-center">
              <User className="w-3.5 h-3.5 mr-1 text-[#526E68]" /> Full Name *
            </label>
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="e.g. Jane Doe"
              className="w-full bg-[#F7F7F4] border border-[#D9CFC0] rounded-xl px-4 py-3 text-sm text-[#17221F] focus:outline-none focus:ring-2 focus:ring-[#526E68]"
              required
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#17221F] uppercase tracking-wider mb-1 flex items-center">
                <Mail className="w-3.5 h-3.5 mr-1 text-[#526E68]" /> Email Address *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@example.ie"
                className="w-full bg-[#F7F7F4] border border-[#D9CFC0] rounded-xl px-4 py-3 text-sm text-[#17221F] focus:outline-none focus:ring-2 focus:ring-[#526E68]"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#17221F] uppercase tracking-wider mb-1 flex items-center">
                <Phone className="w-3.5 h-3.5 mr-1 text-[#526E68]" /> Phone Number *
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+353 (0)87 000 0000"
                className="w-full bg-[#F7F7F4] border border-[#D9CFC0] rounded-xl px-4 py-3 text-sm text-[#17221F] focus:outline-none focus:ring-2 focus:ring-[#526E68]"
                required
              />
            </div>
          </div>

          {/* Optional Note */}
          <div>
            <label className="block text-xs font-semibold text-[#17221F] uppercase tracking-wider mb-1 flex items-center">
              <FileText className="w-3.5 h-3.5 mr-1 text-[#526E68]" /> Optional Note / Questions
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              placeholder="Any specific requests or preferred contact method?"
              className="w-full bg-[#F7F7F4] border border-[#D9CFC0] rounded-xl px-4 py-3 text-sm text-[#17221F] focus:outline-none focus:ring-2 focus:ring-[#526E68]"
            />
          </div>

          <div className="pt-2 flex items-center space-x-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep(1)}
              className="w-1/3 py-3"
            >
              Back
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={submitting}
              className="w-2/3 py-3"
            >
              {submitting ? 'Submitting Request...' : 'Submit Request'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
