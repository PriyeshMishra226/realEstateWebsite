'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactAgentFormProps {
  propertyId: string;
  agentName: string;
  onClose: () => void;
}

export default function ContactAgentForm({
  propertyId,
  agentName,
  onClose,
}: ContactAgentFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [globalError, setGlobalError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setGlobalError('');

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, propertyId }),
      });
      const result = await res.json();

      if (!res.ok || !result.success) {
        if (result.errors) setErrors(result.errors);
        else setGlobalError(result.error || 'Submission failed. Please try again.');
      } else {
        setSuccess(true);
        setTimeout(onClose, 2500);
      }
    } catch {
      setGlobalError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    'w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200';
  const labelClasses =
    'block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-dialog-title"
    >
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close dialog"
          >
            ✕
          </button>

          {/* Header */}
          <div className="mb-6">
            <h2 id="contact-dialog-title" className="text-2xl font-black text-slate-900 mb-1">
              Contact Agent
            </h2>
            <p className="text-sm text-slate-500">
              Send an inquiry directly to <span className="font-semibold text-slate-700">{agentName}</span>
            </p>
          </div>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Inquiry Sent!</h3>
              <p className="text-sm text-slate-500">
                {agentName} has been notified and will contact you shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {globalError && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
                  {globalError}
                </div>
              )}

              {/* Full Name */}
              <div>
                <label htmlFor="contact-name" className={labelClasses}>Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className={`${inputClasses} ${errors.fullName ? 'border-red-300 ring-red-200' : ''}`}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-600 mt-1">{errors.fullName[0]}</p>
                )}
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-email" className={labelClasses}>Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className={`${inputClasses} ${errors.email ? 'border-red-300' : ''}`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 mt-1">{errors.email[0]}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-phone" className={labelClasses}>Phone</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    placeholder="+12125550100"
                    className={`${inputClasses} ${errors.phone ? 'border-red-300' : ''}`}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600 mt-1">{errors.phone[0]}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className={labelClasses}>Message</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  placeholder="I'm interested in scheduling a viewing..."
                  className={`${inputClasses} resize-none ${errors.message ? 'border-red-300' : ''}`}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && (
                  <p className="text-xs text-red-600 mt-1">{errors.message[0]}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  'Send Inquiry'
                )}
              </button>
            </form>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
