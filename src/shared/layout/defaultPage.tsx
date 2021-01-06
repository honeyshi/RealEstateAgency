import React from 'react';
import { Footer } from 'shared/composite/footer';
import { Navbar } from 'shared/composite/navbar';

export const DefaultPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};
