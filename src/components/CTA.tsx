import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24 md:py-32 bg-[#0A0A0A] border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-neutral-100 tracking-tighter leading-tight mb-8"
        >
          Ready to Elevate Your Product?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-lg text-gray-400 leading-relaxed font-light max-w-2xl mx-auto mb-10"
        >
          Join thousands of innovative teams already building the future with Stellar. Get started today and see the difference.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="inline-flex items-center px-8 py-3 rounded-full text-white font-medium text-lg
                     bg-gradient-to-br from-purple-600 to-fuchsia-600
                     hover:from-purple-700 hover:to-fuchsia-700 transition-all duration-300 shadow-lg
                     shadow-purple-500/30 hover:shadow-purple-500/50"
        >
          Start Your Free Trial
          <ArrowRight className="ml-2 w-5 h-5" />
        </motion.button>
      </div>
    </motion.section>
  );
}
