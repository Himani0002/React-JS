// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home'; // Import Home if it exists
// import About from './pages/About';
// import Product from './pages/Product';
// import Contact from './pages/Contact';
// import Header from './components/Header';

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/product" element={<Product />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Section />
      <Footer />

    </>
  )
}

export default App

