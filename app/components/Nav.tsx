'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'About', id: 'about' },
  { label: 'Focus', id: 'focus' },
  { label: 'Impact', id: 'impact' },
  { label: 'Stories', id: 'stories' },
  { label: 'Donate', id: 'donate' },
  { label: 'Get Involved', id: 'involved' },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    setOpen(false);
    // Use setTimeout to ensure DOM is ready and menu animation completes
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.location.href = `/#${id}`;
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 rounded-full bg-[#1a4731] flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs font-bold hidden sm:block">RP</span>
          </div>
          <span className="font-bold text-[#1a4731] text-sm leading-tight block">
            Rev. Peter Olaleye
            <span className="block font-normal text-xs text-stone-500">Charity Foundation</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-5">
          {links.slice(0, 5).map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className="text-sm text-stone-600 hover:text-[#1a4731] transition-colors font-medium"
            >
              {l.label}
            </button>
          ))}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleNav('donate')}
            className="px-5 py-2 bg-[#1a4731] text-white text-sm rounded-full font-bold hover:bg-[#2d6a4f] transition-colors"
          >
            Donate Now
          </motion.button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 flex flex-col justify-center gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-[#1a4731] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[#1a4731] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[#1a4731] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t border-stone-100 px-5 pb-5 pointer-events-auto"
          >
            {links.map((l, index) => (
              <motion.button
                key={l.id}
                onClick={() => handleNav(l.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
                whileHover={{ x: 5 }}
                className="flex w-full text-left py-3.5 text-stone-700 font-medium border-b border-stone-100 last:border-0 hover:text-[#1a4731] transition-colors text-sm items-center gap-2 cursor-pointer pointer-events-auto"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#1a4731]/30 flex-shrink-0" />
                {l.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: links.length * 0.1 + 0.1 }}
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleNav('donate')}
              className="mt-4 w-full py-3.5 bg-[#1a4731] text-white font-bold rounded-xl text-sm cursor-pointer pointer-events-auto"
            >
              Donate Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
