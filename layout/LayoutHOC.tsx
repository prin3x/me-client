import React, { ReactElement } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children: ReactElement;
}

function LayoutHOC({ children }: Props): ReactElement {
  return (
    <div className="mx-auto">
      <Navbar />
      <div className="main-container mx-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default LayoutHOC;
