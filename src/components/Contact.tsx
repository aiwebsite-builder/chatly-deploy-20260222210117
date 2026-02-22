import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="relative py-24 md:py-32 bg-[#0A0A0A] overflow-hidden border-t border-white/5"
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
          Get in Touch
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="text-6xl md:text-7xl font-black text-neutral-100 tracking-tighter leading-tight max-w-4xl mx-auto mb-8"
        >
          We'd Love to Hear From You.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
          className="text-lg text-gray-400 leading-relaxed font-light max-w-2xl mx-auto mb-12"
        >
          Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
        </motion.p>

        {/* Contact Information Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-12"
        >
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center">
            <Mail className="w-8 h-8 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">Email Us</h3>
            <p className="text-base text-gray-400">support@stellar.com</p>
          </div>
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center">
            <Phone className="w-8 h-8 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">Call Us</h3>
            <p className="text-base text-gray-400">+1 (555) 123-4567</p>
          </div>
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center">
            <MapPin className="w-8 h-8 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">Our Office</h3>
            <p className="text-base text-gray-400">123 Stellar Way, Innovation City, CA 90210</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
