
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import SubjectCards from '@/components/home/SubjectCards';
import Features from '@/components/home/Features';
import Testimonials from '@/components/home/Testimonials';
import ContactForm from '@/components/home/ContactForm';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SubjectCards />
        <Features />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
