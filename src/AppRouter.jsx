import React, { useState } from "react";

import { Home } from './Pages/Home';
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { ResponsiveMenu } from './Components/ResponsiveMenu';

export const AppRouter = () => {

  const [responsive, setResponsive] = useState(false);

  return ( responsive 
    ? <ResponsiveMenu toggle={(e) => setResponsive(toggle => toggle = false)}/>
    : <>
        <Header showMenu={(e) => setResponsive(toggle => toggle = true)} />
        <Home/>
        <Footer />
      </>
  );
};
