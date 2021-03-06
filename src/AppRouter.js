import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './Pages/Home';

export const AppRouter = () => {

 return (
   <Router basename={process.env.PUBLIC_URL}>
     <Routes>
       <Route path="/" element={<Home/>}/>
     </Routes>
    </Router>
 )
  
};
