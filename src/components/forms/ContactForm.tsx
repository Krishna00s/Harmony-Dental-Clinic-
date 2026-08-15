import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { submitContactMessage } from '../../services/contactService';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    setSubmitting(true);
    try {
      await submitContactMessage({ name, email, phone: phone.trim() || undefined, message });
      setSuccess(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white border border-[#E8E7E1] rounded-2xl p-8 text-center max-w-md shadow-sm">
        <div className="w-12 h-12 bg-[#526E68]/10 text-[#526E68] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="font-serif text-xl font-medium text-[#17221F]">Message Sent</h3>
        <p className="mt-2 text-xs sm:text-sm text-[#17221F]/70 leading-relaxed font-sans">
          Thank you, <span className="font-semibold text-[#17221F]">{name}</span>. We have received your inquiry and will respond within 1 business day.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-6"
          onClick={() => {
            setSuccess(false);
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#E8E7E1] rounded-2xl p-6 sm:p-8 shadow-sm space-y-5">
      <h3 className="font-serif text-2xl font-medium text-[#17221F]">Send Us a Message</h3>

      {errorMsg && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold text-[#17221F] uppercase tracking-wider mb-1">Your Name *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          className="w-full bg-[#F7F7F4] border border-[#D9CFC0] rounded-xl px-4 py-2.5 text-sm text-[#17221F] focus:outline-none focus:ring-2 focus:ring-[#526E68]"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#17221F] uppercase tracking-wider mb-1">Email Address *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@example.com"
            className="w-full bg-[#F7F7F4] border border-[#D9CFC0] rounded-xl px-4 py-2.5 text-sm text-[#17221F] focus:outline-none focus:ring-2 focus:ring-[#526E68]"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#17221F] uppercase tracking-wider mb-1">Phone (Optional)</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 (555) 000-0000"
            className="w-full bg-[#F7F7F4] border border-[#D9CFC0] rounded-xl px-4 py-2.5 text-sm text-[#17221F] focus:outline-none focus:ring-2 focus:ring-[#526E68]"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#17221F] uppercase tracking-wider mb-1">Message *</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="How can we help you?"
          className="w-full bg-[#F7F7F4] border border-[#D9CFC0] rounded-xl px-4 py-2.5 text-sm text-[#17221F] focus:outline-none focus:ring-2 focus:ring-[#526E68]"
          required
        />
      </div>

      <Button type="submit" variant="primary" disabled={submitting} className="w-full py-3">
        {submitting ? 'Sending...' : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
};
