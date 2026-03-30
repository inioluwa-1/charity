'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const socials = [
  { label: 'Facebook', icon: 'f', url: 'https://facebook.com' },
  { label: 'Twitter', icon: '𝕏', url: 'https://twitter.com' },
  { label: 'Instagram', icon: '◎', url: 'https://instagram.com' },
  { label: 'WhatsApp', icon: '●', url: 'https://wa.me/234' },
];

export function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(160deg, #0a1f15 0%, #0f2d1f 100%)', color: '#fff' }}>
      <div className="max-w-6xl mx-auto px-5 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <Link
            href="/"
            className="flex items-center gap-3 mb-4"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[#86c99e] text-xs"
              style={{ background: 'rgba(134,201,158,0.15)', border: '1.5px solid rgba(134,201,158,0.3)' }}
            >
              RP
            </div>
            <div>
              <p className="font-bold text-sm text-white leading-tight">
                Rev. Peter Olaleye
                <br />
                Charity Foundation
              </p>
              <p className="text-xs text-white/40 mt-0.5">Ogbomoso, Oyo State · Nigeria</p>
            </div>
          </Link>
          <p className="text-sm text-white/45 leading-relaxed">Serving the community of Ogbomoso with faith, compassion, and action.</p>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-4">Contact</p>
          <ul className="space-y-2.5 text-sm text-white/55">
            <li>📍 New Estate Baptist Church, Ogbomoso</li>
            <li>📍 Oyo State, Nigeria</li>
            <li>
              <a href="mailto:contact@rpocharityfoundation.org" className="hover:text-[#86c99e] transition-colors">
                ✉️ contact@rpocharityfoundation.org
              </a>
            </li>
            <li>📞 +234 — (to be added)</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-4">Follow Us</p>
          <div className="grid grid-cols-2 gap-2">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ backgroundColor: 'rgba(134,201,158,0.15)' }}
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-white/60 transition-colors"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <span className="w-4 text-center text-sm">{s.icon}</span>
                {s.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/25">© {new Date().getFullYear()} Reverend Peter Olaleye Charity Foundation. All rights reserved.</p>
          <p className="text-xs text-white/25">Made with care for Ogbomoso, Nigeria 🇳🇬</p>
        </div>
      </div>
    </footer>
  );
}
