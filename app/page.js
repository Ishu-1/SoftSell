import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonial';
import ContactForm from '@/components/ContactForm';
import ChatWidget from '@/components/ChatWidget';
import './globals.css';
import Navbar from '@/components/NavBar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar/>
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ChatWidget />
    </main>
  );
}