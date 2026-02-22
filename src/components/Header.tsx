import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react'; // Example icon

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative z-20 w-full py-6 md:py-8 border-b border-white/5 bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-neutral-100">Stellar</span>
          <span className="text-2xl font-bold text-indigo-500">.</span>
        </div>

        {/* Navigation / Actions */}
        <nav className="flex items-center space-x-4">
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="flex items-center bg-white text-black hover:bg-neutral-200 transition-colors rounded-full px-5 py-2 text-sm font-medium"
          >
            Sign In
            <ChevronRight className="w-4 h-4 ml-1 -mr-1" />
          </motion.button>
        </nav>
      </div>
    </motion.header>
  );
}
