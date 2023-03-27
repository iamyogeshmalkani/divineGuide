import './App.css';
import { useRef } from 'react';
import { Suspense, lazy } from 'react';
import Homepage from "./views/homepage/homepage"
import Services from './views/services/services';
import AboutUs from './views/aboutUs/aboutUs';
import Testimonial from './views/testimonials/testimonial';
import Banner from './views/banner/banner';
import Sidebar from './views/sidebar';
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-XXXXX-X"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
const Blog = lazy(() => import("./views/blogs/blogs"));


function App() {
  const aboutSection = useRef(null);
  const services = useRef(null);
  const testimonials = useRef(null);
  const blogs = useRef(null);
  const refrs = { 'about': aboutSection, 'services': services, 'testimonials': testimonials, 'blogs': blogs };
  const scrollToTop = (ref) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="App position-relative">
      <button class="btn totop" type="submit" onClick={() => { scrollToTop() }}>
        <img src='icons/arrow-up.svg'></img>
      </button>
      <Sidebar />
      <Banner />
      <Homepage refrs={refrs} />
      <AboutUs refrs={aboutSection} />
      <Services refrs={services} />
      <Testimonial refrs={testimonials} />
      <hr class="solid"></hr>
      <Suspense fallback={<div>Loading...</div>}>
        <Blog refrs={blogs} />
      </Suspense>
    </div>
  );
}
export default App;
