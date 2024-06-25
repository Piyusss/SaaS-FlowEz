// pages/enterprise.tsx
import React from 'react';
import Link from 'next/link';
import Footer from '@/components/global/footer';
import Navbar from '@/components/global/NavbarWrapper';

const EnterprisePage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center mt-20">
      <Navbar />
      <div className="w-full max-w-6xl p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Enterprise Solutions</h1>




      </div>
      <Footer />
    </main>
  );
};

export default EnterprisePage;
