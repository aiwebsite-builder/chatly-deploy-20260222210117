import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Brand icons

interface FooterProps {
  setPage: (page: string) => void;
}

export default function Footer({ setPage }: FooterProps) {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#0A0A0A] py-16 border-t border-white/5 text-gray-400 text-sm font-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => setPage('home')}
            className="flex items-center mb-4 focus:outline-none"
          >
            <span className="text-2xl font-bold text-neutral-100">Stellar</span>
            <span className="text-2xl font-bold text-indigo-500">.</span>
          </motion.button>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Stellar Inc. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-left mb-8 md:mb-0">
          <div>
            <h3 className="font-semibold text-neutral-100 mb-4 uppercase text-xs tracking-wider">Product</h3>
            <ul className="space-y-3">
              <li><motion.button whileTap={{scale: 0.98}} onClick={() => setPage('home')} className="hover:text-neutral-200 transition-colors">Features</motion.button></li>
              <li><motion.button whileTap={{scale: 0.98}} onClick={() => setPage('home')} className="hover:text-neutral-200 transition-colors">Pricing</motion.button></li>
              <li><motion.button whileTap={{scale: 0.98}} onClick={() => setPage('home')} className="hover:text-neutral-200 transition-colors">Integrations</motion.button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-100 mb-4 uppercase text-xs tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li><motion.button whileTap={{scale: 0.98}} onClick={() => setPage('home')} className="hover:text-neutral-200 transition-colors">About Us</motion.button></li>
              <li><motion.button whileTap={{scale: 0.98}} onClick={() => setPage('home')} className="hover:text-neutral-200 transition-colors">Careers</motion.button></li>
              <li><motion.button whileTap={{scale: 0.98}} onClick={() => setPage('home')} className="hover:text-neutral-200 transition-colors">Blog</motion.button></li>
              <li><motion.button whileTap={{scale: 0.98}} onClick={() => setPage('contact')} className="hover:text-neutral-200 transition-colors">Contact</motion.button></li> {/* New contact link */}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-100 mb-4 uppercase text-xs tracking-wider">Resources</h3>
            <ul className="space-y-3">
              <li><motion.button whileTap={{scale: 0.98}} onClick={() => setPage('home')} className="hover:text-neutral-200 transition-colors">Support</motion.button></li>
              <li><motion.button whileTap={{scale: 0.98}} onClick={() => setPage('home')} className="hover:text-neutral-200 transition-colors">Docs</motion.button></li>
              <li><motion.button whileTap={{scale: 0.98}} onClick={() => setPage('home')} className="hover:text-neutral-200 transition-colors">Legal</motion.button></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a href="#" className="text-gray-500 hover:text-neutral-200 transition-colors">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-neutral-200 transition-colors">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-neutral-200 transition-colors">
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
