import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Cabinet from './components/Cabinet';
import Program from './components/Program';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-slate-50 antialiased overflow-x-hidden selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Cabinet />
        <Program />
      </main>
      <Footer />
    </div>
  );
}

export default App;
