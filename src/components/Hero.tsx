import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="relative py-24 md:py-32 lg:py-48 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(to right, #1A1A1A 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subheader */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-4"
        >
          Unleash Your Potential
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="text-6xl md:text-8xl font-black text-neutral-100 tracking-tighter leading-tight max-w-5xl mx-auto mb-8"
        >
          The Future of {' '}
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">Tobi</span> {' '}
          is Here.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
          className="text-lg text-gray-400 leading-relaxed font-light max-w-2xl mx-auto mb-10"
        >
          Stellar helps teams build, launch, and scale their products with unparalleled efficiency and a user experience that delights.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
          className="inline-flex items-center px-8 py-3 rounded-full text-white font-medium text-lg
                     bg-gradient-to-br from-indigo-600 to-purple-600
                     hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg
                     shadow-indigo-500/30 hover:shadow-indigo-500/50"
        >
          Get Started For Free
          <ArrowRight className="ml-2 w-5 h-5" />
        </motion.button>
      </div>
    </motion.section>
  );
}
