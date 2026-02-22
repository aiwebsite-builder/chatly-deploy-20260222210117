import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Contact from "./components/Contact"; // New import
import Footer from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // State to manage current page

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <Features />
            <CTA />
          </>
        );
      case 'contact':
        return <Contact />;
      // Add other cases for different pages if needed
      default:
        return (
          <>
            <Hero />
            <Features />
            <CTA />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-neutral-200 font-sans antialiased">
      <Header setPage={setCurrentPage} /> {/* Pass setPage to Header */}
      <main>
        {renderPage()}
      </main>
      <Footer setPage={setCurrentPage} /> {/* Pass setPage to Footer */}
    </div>
  );
}