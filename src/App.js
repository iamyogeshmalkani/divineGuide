import './App.css';
import { useRef } from 'react';
import Homepage from './views/homepage/homepage';
import Services from './views/services/services';
import AboutUs from './views/aboutUs/aboutUs';
import Testimonial from './views/testimonials/testimonial';


function App() {
  const aboutSection = useRef(null);
  const services = useRef(null);
  const testimonials = useRef(null);
  const refrs = { 'about': aboutSection, 'services': services, 'testimonials': testimonials };
  const scrollToTop = (ref) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="App">
      <button class="btn totop" type="submit" onClick={() => { scrollToTop() }}>
        <img src='icons/arrow-up.svg'></img>
      </button>
      <Homepage refrs={refrs} />
      <Services refrs={services} />
      <AboutUs refrs={aboutSection} />
      <Testimonial refrs={testimonials} />
    </div>
  );
}
export default App;
