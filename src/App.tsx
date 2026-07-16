import { useEffect } from "react";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Achievements from "./components/sections/Achievements";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";

export default function App() {

  return (

    <div className="min-h-screen font-sans antialiased bg-white">

      <Navbar />

      <main>

        <Hero />

        <Services />

        <Projects />

        <Achievements />

        <About />

        <Contact />

      </main>

      <Footer />

      <WhatsAppButton />

    </div>

  );
}
