import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-5" 
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} 
      />
      
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}
