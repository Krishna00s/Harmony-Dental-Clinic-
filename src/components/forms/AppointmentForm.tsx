import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { getAvailability } from '../../services/availabilityService';
import { submitAppointmentRequest } from '../../services/appointmentService';
import type { AvailabilitySlot, AppointmentRequestInput } from '../../types';
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
  const [availableSlots, setAvailableSlots] = useState<AvailabilitySlot[]>([]);
  const [preferredTime, setPreferredTime] = useState('');
  const [loadingSlots, setLoadingSlots] = useState(false);

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

  // Load slots when date changes
  useEffect(() => {
    let isMounted = true;
    async function loadSlots() {
      setLoadingSlots(true);
      try {
        const slots = await getAvailability(preferredDate);
        if (isMounted) {
          setAvailableSlots(slots);
          if (slots.length > 0 && !preferredTime) {
            setPreferredTime(slots[0].startTime);
          }
        }
      } catch (err: any) {
        console.error('Error loading availability slots:', err);
      } finally {
        if (isMounted) setLoadingSlots(false);
      }
    }
    loadSlots();
    return () => {
      isMounted = false;
    };
  }, [preferredDate]);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!preferredDate || !preferredTime) {
      setErrorMsg('Please select both a date and an available time slot.');
      return;
    }
    setErrorMsg(null);
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!patientName.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg('Please fill in all required contact details.');
      return;
    }

    setSubmitting(true);
    try {
      const payload: AppointmentRequestInput = {
        patientName,
        email,
        phone,
        preferredDate,
        preferredTime,
        appointmentType,
        note: note.trim() || undefined,
      };

      await submitAppointmentRequest(payload);
      setSuccess(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to submit appointment request. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white border border-[#E8E7E1] rounded-2xl p-8 text-center max-w-lg mx-auto shadow-sm">
        <div className="w-14 h-14 bg-[#526E68]/10 text-[#526E68] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl font-medium text-[#17221F]">Request Received</h3>
        <p className="mt-3 text-sm text-[#17221F]/70 leading-relaxed font-sans">
          Thank you, <span className="font-semibold text-[#17221F]">{patientName}</span>. Your appointment request for{' '}
          <span className="font-semibold text-[#17221F]">{appointmentType}</span> on{' '}
          <span className="font-semibold text-[#17221F]">{preferredDate}</span> at{' '}
          <span className="font-semibold text-[#17221F]">{preferredTime}</span> has been received.
        </p>
        <div className="mt-6 p-4 bg-[#F7F7F4] rounded-xl text-xs text-[#17221F]/60 text-left space-y-1">
          <p className="font-medium text-[#17221F]">What happens next?</p>
          <p>Our scheduling coordinator will review availability and contact you at {phone} or {email} within 24 hours to finalize your appointment.</p>
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
            {loadingSlots ? (
              <div className="py-4 text-xs text-[#17221F]/60 animate-pulse">Loading availability...</div>
            ) : availableSlots.length === 0 ? (
              <div className="p-3 bg-[#F7F7F4] text-xs text-[#17221F]/60 rounded-xl">
                No slots open for this date. Please select another day.
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {availableSlots.map((slot) => (
                  <button
                    key={slot.id}
                    type="button"
                    onClick={() => setPreferredTime(slot.startTime)}
                    className={`py-2.5 px-3 text-xs sm:text-sm font-medium rounded-xl border transition-all ${
                      preferredTime === slot.startTime
                        ? 'bg-[#17221F] text-white border-[#17221F] shadow-sm'
                        : 'bg-[#F7F7F4] text-[#17221F] border-[#E8E7E1] hover:border-[#526E68]'
                    }`}
                  >
                    {slot.startTime}
                  </button>
                ))}
              </div>
            )}
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
                placeholder="jane@example.com"
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
                placeholder="+1 (555) 000-0000"
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

          {/* Healthcare Privacy Boundary Notice */}
          <div className="p-3 bg-[#E8E7E1]/40 rounded-xl text-[11px] text-[#17221F]/70 leading-normal">
            <span className="font-semibold text-[#17221F]">Privacy Notice:</span> This is an appointment request system. Please do not submit confidential medical history, symptoms, or insurance numbers in this form.
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
