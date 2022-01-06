import React, { ReactElement } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface Props {
  children: ReactElement;
}

function LayoutHOC({ children }: Props): ReactElement {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default LayoutHOC;
