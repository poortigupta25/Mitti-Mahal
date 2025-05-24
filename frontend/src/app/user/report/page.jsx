'use client';
import { useFormik } from 'formik';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AlertTriangle, Send } from 'lucide-react';

const Report = () => {
  const [form, setForm] = useState({ subject: '', description: '', email: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.subject || !form.description || !form.email) {
      toast.error('Please fill all fields.');
      return;
    }
    setSubmitting(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/report/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      toast.success('Report submitted successfully!');
      setForm({ subject: '', description: '', email: '' });
    } catch {
      toast.error('Failed to submit report.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-12 p-8 bg-gradient-to-br from-amber-100 via-amber-50 to-yellow-200 dark:from-yellow-900 dark:via-amber-900 dark:to-yellow-950 rounded-3xl shadow-2xl border-2 border-amber-300 dark:border-yellow-900 relative overflow-hidden">
      <div className="absolute -top-10 -left-10 w-28 h-28 bg-amber-300 dark:bg-yellow-900 rounded-full opacity-30 blur-2xl z-0"></div>
      <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-yellow-900 dark:bg-amber-700 rounded-full opacity-20 blur-2xl z-0"></div>
      <h2 className="text-2xl font-extrabold text-center text-yellow-900 dark:text-amber-100 mb-7 tracking-tight drop-shadow-lg z-10 relative flex items-center justify-center gap-2">
        <AlertTriangle className="w-7 h-7 text-amber-600" /> Report an Issue
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5 z-10 relative">
        <div>
          <label className="block text-base font-semibold mb-1 text-yellow-900 dark:text-yellow-100">Subject</label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border-2 border-yellow-900 dark:border-yellow-800 bg-amber-50 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100 focus:ring-2 focus:ring-amber-400 focus:border-amber-500 transition"
            placeholder="Report subject"
          />
        </div>
        <div>
          <label className="block text-base font-semibold mb-1 text-yellow-900 dark:text-yellow-100">Description</label>
          <textarea
            name="description"
            rows="4"
            value={form.description}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border-2 border-yellow-900 dark:border-yellow-800 bg-amber-50 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100 focus:ring-2 focus:ring-amber-400 focus:border-amber-500 transition"
            placeholder="Describe the issue..."
          />
        </div>
        <div>
          <label className="block text-base font-semibold mb-1 text-yellow-900 dark:text-yellow-100">Your Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border-2 border-yellow-900 dark:border-yellow-800 bg-amber-50 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100 focus:ring-2 focus:ring-amber-400 focus:border-amber-500 transition"
            placeholder="Your email address"
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 flex items-center justify-center gap-2 text-yellow-50 bg-gradient-to-r from-yellow-900 via-amber-600 to-amber-700 hover:from-yellow-800 hover:to-amber-800 rounded-xl font-bold text-lg shadow-lg tracking-wide transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-amber-300 disabled:opacity-60"
        >
          <Send className="w-5 h-5" /> {submitting ? 'Submitting...' : 'Submit Report'}
        </button>
      </form>
    </div>
  );
};

export default Report;