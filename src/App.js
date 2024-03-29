import './App.css';
import { useRef } from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Panel from './views/panel/mainpage';
import PageNotFound from './views/notfound/pagenotfound';
import Services from './views/services/services';
import AboutUs from './views/aboutUs/aboutUs';
import Testimonial from './views/testimonials/testimonial';
import Banner from './views/banner/banner';
import Sidebar from './views/sidebar';
import ReactGA from 'react-ga';
import Footer from './views/footer/footer';
const TRACKING_ID = "UA-XXXXX-X"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
const Blog = lazy(() => import("./views/blogs/blogs"));
const Homepage = lazy(() => import("./views/homepage/homepage"))


function App() {
  const servicesData = [
    { name: "Astrology", description: "Astrology can help us to understand the past , help to work on present and guide for better future. Besides helping in avoiding strains in marital relationships, business and professional matters, astrology also helps in enjoying good health, prosperity and spiritual advancement<br></br>There is a myth about Astrology that it predicts a future. But Actually Astrology is a tool which share the possible events and help to walk towards better path. One can take a positive approach and indulge himself for indulge himself for better fruitful outcome towards future.", price: '2100' },
    { name: "Match Making", description: "Kundli Matching or Guna Milan is the most integral aspect of every Hindu marriage. Hindu astrology lays strong emphasis on Janam Kundali Milan before a couple ties the knot. It is to check compatibility of two individuals in order to have an enchanted and successful marriage.", price: '2100' },
    {
      name: "Prasana Kundali", description: "Prashna Kundali Astrology is the best way to know about future predictions even in the condition when a person doesn’t know about their Birth Time. Generally getting a proper answer without Birth Detail gets quite complex, but Prashna Kundali is the Astrology Science that gives you an exact answer about your queries related to your future. Prashna Kundali is a time-based kundali made on the basis of the time when the question was asked by someone. A combination of Prashna Kundali and Birth Kundali can easily solve any problem.", price: '2100'
    },
    {
      name: "Vastu", description: `Vastu Shastra is based on the concept of scientifically combining the five basic elements – earth, water, fire, air and sky – to create a pleasant setting.If any element is more or less then it won’t give fruitful outcome.So, It is advisable to  have these elements to be balanced in house so that your atmosphere can provide fruitful outcome. 
    <br></br>यत पिंडे तत ब्रह्माण्डे <br></br>(whatever is there in the microcosm is also there in the macrocosm)
    <br></br>(जो भीतर है वही बाहर है और जो बाहर है वो ही भीतर है ) <br></br> Vasthu principles integrated with architecture boost health, wealth, energy and prosperity and make the living or working atmosphere serene and enlighten.`, price: '2100'
    },
    { name: "Tarot Card Reading", description: "Tarot is a divination tool which is used to get guidance and is commonly used to measure potential outcomes and evaluate influences surrounding a person or an event. It helps to give answers to our daily questions of life.<br></br>The best advice tarot can provide when someone with proper genuine intention ask for best suitable option from multiple options.", price: '1100' },
    { name: "Hand Writing Analysis", description: "Handwriting analysis can reveal many useful personality traits. It involves Personal Development , self introspection,Compatibility Analysis etc, With the help of handwriting analysis , one can improve themself in all area and many more", price: '2100' },
  ]
  const blogsData = [
    {
      id: '1',
      video: 'https://youtu.be/l85j0eFVzq0',
      title: 'What is Astrology? why astrology is important?',
      creator: 'Deepa Gupta',
      avatar: 'aboutus',
      date: '8:57 29-03-2023'
    }, {
      id: '2',
      title: 'विभिन्न दिशाओं में चूल्हा रखने का प्रभाव :  वास्तु की नजर से',
      desc: `भोजन हम सभी की जिंदगी का अहम हिस्सा है, जो ना केवल हमें पोषण देता है I बल्कि हमारे मन पर भी प्रभाव डालता है I अच्छा भोजन खाकर हम प्रसन्न और संतुष्ट रहते हैं I इस भोजन को बनाने के लिए हम सब चूल्हे का उपयोग करते हैं I चूल्हे को विभिन्न दिशाओं में रखने से जीवन पर इसका क्या प्रभाव पड़ता है I आइए जानते हैं|\n\nसृष्टि की रचना में पंच तत्वों का बहुत अहम योगदान है, पंच तत्वों के संतुलन से प्रकृति में संतुलन बना रहता है I जब यही पंचतत्व हमारे शरीर में संतुलन में होते हैं तो हमारा शरीर स्वस्थ रहता हैI पंचतत्व घर के वास्तु में भी बहुत महत्वपूर्ण स्थान रखते हैं यह तत्व- वायु, जल, अग्नि, पृथ्वी तथा आकाश हैI जब यह तत्व बैलेंस में होते हैं तो घर का वातावरण सकारात्मक बनता हैI इन तत्वों को बैलेंस करने के लिए घर पर चीजें उनके तत्वों के अनुसार निर्धारित दिशा में रखनी चाहिएI जैसे अगर हम गैस चूल्हे की बात करें तो वह अग्नि तत्व का प्रतीक है, अतः अगर हम इसे अग्नि तत्व की दिशा में रखेंगे तो हमें इसके बेहतर परिणाम देखने को मिलेंगे, लेकिन इसे हम दूसरे तत्वों की दिशा में रख देंगे तो परिणाम बदल जाएंगे|\n\nखाना बनाते समय ग्रहणी का मुख हमेशा सकारात्मक ऊर्जाओं की दिशा उत्तर या पूर्व की ओर ही होना चाहिए, इससे खाना बनाते समय मन में सकारात्मक ऊर्जा का संचार होता है I जिससे खाना बेहतर बनाने में मदद मिलती है I आइए समझते हैं-वास्तु की सभी 16 दिशाओं में गैस चूल्हा रखने से क्या परिणाम मिलेंगे-\n\nदक्षिण पूर्व दिशा (SE) दिशा\n\nघर में गैस चूल्हा या किचन के लिए सबसे अच्छी दिशा दक्षिण पूर्व मानी गई है, क्योंकि यह शुक्र ग्रह की दिशा है जो कि खाने के स्वाद बढ़ाने में मुख्य भूमिका निभाता है I घर में खाना बनाने का काम अधिकांशत: महिलाएं करती हैं और शुक्र ग्रह महिलाओं को भी बताता है I अगर तार्किक दृष्टि से भी इसे समझने की कोशिश करें तो SE की दिशा में दिन भर सूर्य का प्रकाश रहता है और अगर उस दिशा में खुला स्थान होगा तो सूर्य की किरणें सुबह किचन में प्रवेश करेंगी और इसमें न केवल काम करना आसान होगा बल्कि यह डिसइनफेक्टेंट का भी काम करेगीI दूसरी बात यह है कि यह स्थान ना ज्यादा गर्म होता है ना एकदम ठंडा, अतः चाहे सर्दी का मौसम हो या गर्मी का, यहां काम करना आसान हो जाता है, इसलिए भी इस दिशा को अत्यधिक महत्व दिया गया है I इस दिशा में गैस चूल्हा रखने से घर में कैश फ्लो ठीक बना रहता हैI परिवार के सदस्यों को सही न्यूट्रिशन प्राप्त होता है और सेहत ठीक रहती है|\n\nदक्षिण दक्षिण पूर्व (SSE) दिशा\n\nदक्षिण दक्षिण पूर्व(SSE) की दिशा में गैस चूल्हा होने से व्यक्ति के अंदर ऊर्जा और आत्मविश्वास बढ़ता हैI यह दिशा व्यक्ति को शीर्ष पर पहुंचाने में मदद करती है|\n\nदक्षिण दिशा (S)\n\nदक्षिण दिशा (S) यह अत्यधिक गर्म दिशा मंगल ग्रह की दिशा है इस दिशा में बना हुआ खाना बहुत ज्यादा मसालेदार होता है, जो सेहत के लिए ठीक नहीं होताI यहां पर गैस चूल्हा होने से  व्यक्ति रिलैक्स नहीं कर पाता है, तथा उसके मान सम्मान पर भी प्रतिकूल असर पड़ता है I अत्यधिक गर्म दिशा होने की वजह से भोजन जल्दी खराब भी हो जाता है|\n\nदक्षिण दक्षिण पश्चिम (SSW) दिशा\n\nदक्षिण दक्षिण पश्चिम (SSW) दिशा मैं गैस चूल्हा रखने से अत्यधिक पैसा खर्च का योग बन जाता है और कई बार यह धन खर्च फालतू की चीजों पर होता है|\n\nदक्षिण पश्चिम (SW) दिशा\n\nदक्षिण पश्चिम (SW) दिशा राहु की दिशा है I इस दिशा में गैस चूल्हा नहीं रखना चाहिएI किसी होटल का गैस चूल्हा इस दिशा में तरक्की तथा ग्राहकों की कतार दे सकता है परंतु घर के लिए यह बिल्कुल अच्छा नहीं है I इसके वजह से परिवार में रिश्ते खराब होने लगते हैं I ग्रहणी की सोच नकारात्मक होने लगती है पृथ्वी तत्व की इस दिशा के दोष को दूर करने के लिए पीले रंग का पेंट दीवार पर करना ठीक रहता है हनुमान जी का मुगदर लिए हुए का फोटो खाना बनाने वाली स्त्री के पीठ की तरफ की दीवार पर इस तरह लगाएं कि हनुमानजी उसे आशीर्वाद दे रहे हैं|\n\nपश्चिम दक्षिण पश्चिम (WSW) दिशा\n\nपश्चिम दक्षिण पश्चिम (WSW) दिशा में गैस चूल्हा होने से बच्चों की पढ़ाई पर बुरा असर पड़ सकता है तथा सभी सेविंग भी खत्म हो सकती हैं या यूं कहें व्यक्ति को गरीबी का सामना करना पड़ सकता है|\n\n पश्चिम (W) दिशा\n\nपश्चिम (W) दिशा मैं गैस चूल्हा होने से व्यक्ति के लाभ पर असर पड़ता हैI व्यक्ति की सोच संकुचित होने लगती हैI यह शनिदेव तथा वरुण की दिशा हैI यहां पर अग्नि को बैलेंस करने के लिए लाल रंग का इस्तेमाल ना करें, सफेद रंग इस दिशा में ठीक रहेगा तथा दोष को दूर करने में मदद करेगा|\n\nपश्चिम उत्तर पश्चिम (WNW) दिशा\n\nपश्चिम उत्तर पश्चिम (WNW) दिशा में गैस चूल्हा रखने से घर की स्त्री डिप्रेशन में जा सकती हैI या फिर उन्हें थायराइड की प्रॉब्लम हो सकती है वह बार-बार पुरानी बातों को ही सोचती रहेगी इस दिशा का दोष दूर करने के लिए गैस चूल्हे के नीचे पीले रंग का पेंट कर दे या पीले कलर का जैसलमेर पत्थर का स्लैब बनवा ले|\n\nउत्तर पश्चिम (NW) दिशा \n\nउत्तर पश्चिम (NW) दिशा वायु तत्व की यह दिशा दूसरी अच्छी दिशा है गैस चूल्हा रखने के लिएI इस दिशा में भोजन बनाने से तरक्की मिलेगीI लोगों का सपोर्ट मिलेगाI खाना स्वादिष्ट बनेगा|\n\nउत्तर उत्तर पश्चिम (NNW) दिशा\n\nउत्तर उत्तर पश्चिम (NNW) दिशा मैं गैस चूल्हा रखने से मेहमानों का आना जाना बढ़ जाएगा| ग्रहणी  का अधिकांश समय किचन में बीतेगा, जिसकी वजह से पति पत्नी के रिलेशनशिप में प्रॉब्लम आ सकती है यहां भी गैस चूल्हे के नीचे पीला पत्थर रखने से समस्या का समाधान मिल सकता है|\n\nउत्तर दिशा (N)\n\nउत्तर दिशा (N) बुध की दिशा है जोकि हमें धन कमाने के अवसर उपलब्ध कराते हैं| भल्लाल देव उन अवसरों को बढ़ाने का काम करते है इस दिशा में चूल्हा होने से धन संबंधी मामलों में परेशानियों का सामना करना पड़ सकता है| स्काई ब्लू पेंट कमरे में करना अच्छा है|\n\nउत्तर उत्तर पूर्व (NNE) दिशा \n\nउत्तर उत्तर पूर्व (NNE) दिशा जल की दिशा है जिसमें अग्नि यानी गैस चूल्हा होने से तत्वों का बैलेंस बिगड़ जाएगा और सेहत से संबंधित परेशानियों का सामना करना पड़ेगा I जठराग्नि बढ़ती जाएगी और शरीर की प्रतिरोधक क्षमता में भी कमी आएगी I  स्काई ब्लू पेंट करना अच्छा है|\n\nउत्तर पूर्व दिशा (NE)\n\nउत्तर पूर्व दिशा (NE) इस दिशा में चूल्हा बिल्कुल भी नहीं होना चाहिए I यह वास्तु देव का सिर का स्थान हैI यहां चूल्हा होने से मानसिक अशांति रहने की संभावना है I निर्णय शक्ति पर भी इसका असर पड़ेगा, महत्वपूर्ण निर्णय गलत हो सकते हैंI छोटी-छोटी बातों में प्रतिक्रिया देने से रिश्ते बिगड़ सकते हैं|\n\n पूर्व उत्तर पूर्व  (ENE) दिशा \n\nपूर्व उत्तर पूर्व  (ENE) दिशा में गैस चूल्हा होने से व्यक्ति जिंदगी को एंजॉय नहीं कर पाएगा I हर पल दुखी रहेगा I जल की दिशा में अग्नि को क्रिएट करने के लिए पीले रंग का जैसलमेर पत्थर उपयोग में लाएं या पीले रंग का पेंट कर दें|\n\nपूर्व दिशा (E) और दक्षिण दक्षिण पूर्व (SSE) दिशा\n\nपूर्व दिशा (E) और दक्षिण दक्षिण पूर्व (SSE) दिशा में गैस चूल्हा रखने से व्यक्ति की सामाजिक छवि खराब हो सकती है I और मन में हर पल तनाव रहने का योग बनता है I इस दोष को दूर करने के लिए हरे रंग का इस्तेमाल करना ठीक रहेगा|\n\nअपने अनुभव से मैंने यह पाया है कि ईशान कोण(NE), नेऋत्य कोण (SW) तथा ब्रह्मस्थान (Center of the house) में किचन बनाना और चूल्हे को रखना कभी भी परिवार के लोगों की सुख समृद्धि तथा स्वास्थ्य के हित में नहीं होता है अतः हमेशा इससे बचना चाहिए|\n\nएस्ट्रोलॉजर  वास्तुविद दीपा गुप्ता`,
      img: 'kitchen1',
      creator: 'Deepa Gupta',
      avatar: 'aboutus',
      date: '03:40 27-03-2023'
    },

    {
      id: '3',
      img: `Award`,
      title: `Astrologer Deepa Gupta received Silver medal for Vastu on October 2018`,
      creator: 'Deepa Gupta',
      avatar: 'aboutus',
      date: '12:40 27-03-2023'
    }
  ];
  const aboutSection = useRef(null);
  const services = useRef(null);
  const testimonials = useRef(null);
  const blogs = useRef(null);
  const home = useRef(null);
  const refrs = {
    'home': home, 'about': aboutSection, 'services': services, 'testimonials': testimonials, 'blogs': blogs
  };
  const scrollToTop = (ref) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const MainPage = function () {
    return (
      <div> <button className="btn totop" type="submit" onClick={() => { scrollToTop() }}>
        <img src='icons/arrow-up.svg' alt='up-arrow'></img>
      </button>
        <Sidebar refrs={refrs} blogs={blogsData} />
        <Banner />
        <Homepage refrs={refrs} servicesData={servicesData} />
        <AboutUs refrs={aboutSection} />
        <Services refrs={services} servicesData={servicesData} />
        <Testimonial refrs={testimonials} />
        <hr className="solid"></hr>
        <Suspense fallback={<div>Blogs Loading...</div>}>
          <Blog refrs={blogs} blogs={blogsData} />
        </Suspense>
        <Footer refrs={refrs} /></div>
    )
  }
  return (
    <div className="App position-relative" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<PageNotFound />} />
          {/* <Route path="/panel" element={<Panel />} /> */}
        </Routes>
      </BrowserRouter>

    </div >
  );

}
export default App;






