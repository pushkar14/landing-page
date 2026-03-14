import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlotPlans from './components/PlotPlans';
import Amenities from './components/Amenities';
import LocationMap from './components/LocationMap';
import Pricing from './components/Pricing';
import BookingProcess from './components/BookingProcess';
import WhyInvest from './components/WhyInvest';
import About from './components/About';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import OfferBanner from './components/OfferBanner';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PlotPlans />
      <Amenities />
      <LocationMap />
      <Pricing />
      <BookingProcess />
      <WhyInvest />
      <About />
      <FAQ />
      <OfferBanner />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
