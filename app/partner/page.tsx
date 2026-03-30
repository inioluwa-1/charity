'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

export default function PartnerPage() {
  const [form, setForm] = useState({ orgName: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.orgName || !form.email || !form.message) {
      alert('Please fill in all fields.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="antialiased text-stone-800">
      <Nav />

      {/* Hero */}
      <div className="pt-16" style={{ background: 'linear-gradient(135deg, #0f2d1f 0%, #1a4731 55%, #2d6a4f 100%)' }}>
        <div className="max-w-6xl mx-auto px-5 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-white/20 bg-white/10 text-white/85 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#86c99e] inline-block" /> Collaboration
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white mb-5"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Partner With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-white/65 text-base leading-relaxed max-w-xl mx-auto"
          >
            We believe change happens faster together. If your organisation shares our values — let's explore a partnership.
          </motion.p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-[#f4f8f5] py-20 px-5">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto bg-white rounded-3xl p-8 shadow-sm border border-stone-100"
        >
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-5">🤲</div>
              <h2 className="text-2xl font-extrabold text-[#0f2d1f] mb-3" style={{ fontFamily: "'Georgia', serif" }}>
                Partnership Request Received!
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed mb-8">
                Thank you, <strong className="text-[#1a4731]">{form.orgName}</strong>. We'll respond to{' '}
                <strong className="text-[#1a4731]">{form.email}</strong> within 3–5 business days.
              </p>
              <Link href="/">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block px-8 py-3.5 bg-[#1a4731] text-white font-bold rounded-full text-sm"
                >
                  ← Back to Home
                </motion.span>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1.5">
                  Organisation Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="orgName"
                  value={form.orgName}
                  onChange={handleChange}
                  placeholder="Your organisation or business name"
                  className="w-full border-2 border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a4731] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1.5">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="contact@yourorg.com"
                  className="w-full border-2 border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a4731] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1.5">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your organisation and how you'd like to partner with us..."
                  className="w-full border-2 border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a4731] transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02, boxShadow: '0 8px 24px #1a473135' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-[#1a4731] text-white font-bold rounded-xl text-sm hover:bg-[#2d6a4f] transition-colors disabled:opacity-70"
              >
                {loading ? 'Submitting...' : 'Send Partnership Request →'}
              </motion.button>
              <p className="text-center text-xs text-stone-400">We'll respond within 3–5 business days.</p>
            </form>
          )}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
