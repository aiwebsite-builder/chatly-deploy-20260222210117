import { motion } from 'framer-motion';
import { Box, Code, Layers, Sparkles, Zap, Globe } from 'lucide-react'; // Example icons

const featureData = [
  {
    icon: Box,
    title: "Modular Architecture",
    description: "Build with flexible, reusable components that scale with your ambitions."
  },
  {
    icon: Code,
    title: "Developer First",
    description: "Intuitive APIs and extensive documentation for a seamless development experience."
  },
  {
    icon: Layers,
    title: "Unified Platform",
    description: "Connect all your tools and workflows in a single, powerful environment."
  },
  {
    icon: Sparkles,
    title: "Stunning Design",
    description: "Craft beautiful user interfaces with our meticulously designed components."
  },
  {
    icon: Zap,
    title: "Blazing Fast",
    description: "Optimized performance ensures your applications run at lightning speed."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Deploy globally with confidence and reach users anywhere in the world."
  }
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subheader */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-4 text-center"
        >
          Core Capabilities
        </motion.p>

        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-neutral-100 tracking-tighter leading-tight text-center max-w-4xl mx-auto mb-16"
        >
          Designed for Scale. Built for Excellence.
        </motion.h2>

        {/* Feature Grid (Bento Box style) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-8 flex flex-col items-start text-left
                         hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <div className="p-3 rounded-full bg-indigo-500/20 text-indigo-400 mb-6 border border-indigo-500/30">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-100 mb-3">{feature.title}</h3>
              <p className="text-base text-gray-400 leading-relaxed font-light">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
