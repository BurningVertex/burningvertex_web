import React from 'react';
import CookieConsent from "react-cookie-consent";
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <CookieConsent
    expires={365}>
      This website uses cookies to enhance the user experience.</CookieConsent>
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;