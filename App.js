import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, ChevronLeft, ChevronRight, Mail, Phone, MapPin, Plus, Minus } from 'lucide-react';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handlePackageSelect = (packageName, price) => {
    setSelectedPackage(packageName);
    if (!cartItems.find(item => item.name === packageName)) {
      setCartItems([...cartItems, {name: packageName, price: price}]);
      setCartCount(prevCount => prevCount + 1);
    }
  };


  const backgrounds = [
    '/slide1.jpg',
    '/slide2.jpg',
    '/slide3.jpg',
    '/slide4.jpg'
  ];

  const teamImages = [
  '/julieann.jpg',
  '/adrian.jpg',
  '/don.jpg'
];

  // Auto-rotate images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgrounds.length) % backgrounds.length);
  };

  const FAQItem = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="faq-item">
          <button
              className="faq-question"
              onClick={() => setIsOpen(!isOpen)}
          >
            <span>{question}</span>
            {isOpen ? <Minus size={20}/> : <Plus size={20}/>}
          </button>
          {isOpen && <div className="faq-answer">{answer}</div>}
        </div>
    );
  };

  return (
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-content">
              <div className="logo">Logo</div>

              <div className="desktop-menu">
                <a href="#about" className="nav-link">About</a>
                <a href="#services" className="nav-link">Services</a>
                <a href="#team" className="nav-link">Team</a>
                <a href="#pricing" className="nav-link">Pricing</a>
                <a href="#faq" className="nav-link">FAQ</a>
                <a href="#contact" className="nav-link">Contact</a>
                <a href="#shop" className="nav-link">Shop</a>
              </div>

              <div className="cart-menu">
                <button className="cart-button">
                  <ShoppingCart size={24}/>
                  {cartCount > 0 && (
                      <span className="cart-count">{cartCount}</span>
                  )}
                </button>

                <button
                    className="mobile-menu-button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
              </div>
            </div>
          </div>
        </nav>


        {isMenuOpen && (
            <div className="mobile-menu">
              <div className="mobile-menu-links">
                <a href="#about" className="nav-link">About</a>
                <a href="#services" className="nav-link">Services</a>
                <a href="#appointments" className="nav-link">Book Appointment</a>
                <a href="#shop" className="nav-link">Shop</a>
              </div>
            </div>
        )}

        <div className="hero">
          {backgrounds.map((bg, index) => (
              <div
                  key={index}
                  className={`slide ${currentSlide === index ? 'active' : 'inactive'}`}
              >
                <img
                    src={bg}
                    alt={`Slide ${index + 1}`}
                    className="slide-image"
                />
                <div className="slide-overlay"/>
              </div>
          ))}

          <button
              className="slide-nav-button prev"
              onClick={prevSlide}
          >
            <ChevronLeft size={48}/>
          </button>
          <button
              className="slide-nav-button next"
              onClick={nextSlide}
          >
            <ChevronRight size={48}/>
          </button>

          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                EmpowerCare
              </h1>
              <p className="hero-subtitle">
                Elevating In/Out Respite LLC
              </p>
              <button className="cta-button">
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        <section id="about" className="section light">
          <div className="section-container">
            <h2 className="section-title">About Us</h2>
            <div className="about-content">
              <p className="about-text"><b>
                At EmpowerCare, we deliver exceptional respite care services both in-home and at our specialized
                facilities, serving individuals across the spectrum of disabilities. Our highly trained professionals
                are dedicated to providing personalized care while engaging clients in meaningful recreational
                activities tailored to their interests and abilities.
                We understand the demanding role of primary caregivers. Our mission extends beyond client care to
                supporting families and caregivers,
                offering them essential respite periods with the peace of mind that comes from knowing their loved ones
                are receiving attentive, professional care in a nurturing environment.
                Through our comprehensive approach, we create a supportive ecosystem that enhances the quality of life
                for both clients and their caregivers,
                fostering a balance of exceptional care and personal well-being.
              </b></p>
            </div>
          </div>
        </section>

        <section id="services" className="section gray">
          <div className="section-container">
            <h2 className="section-title">Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3 className="service-title">In-Home Respite Care</h3>
                <p className="service-text">Our in-home respite services bring professional care directly to your
                  doorstep. Our skilled caregivers provide personalized attention, assistance with daily activities, and
                  companionship in the comfort and familiarity of your home environment, ensuring your loved one
                  maintains their regular routine while receiving exceptional care.</p>
              </div>
              <div className="service-card">
                <h3 className="service-title">Out-of-Home Respite</h3>
                <p className="service-text">Experience peace of mind with our facility-based respite care. In our
                  welcoming and secure environment, we provide structured activities, social interaction, and
                  round-the-clock professional care. This option offers a change of scenery for your loved one while
                  giving caregivers extended periods of rest.</p>
              </div>
              <div className="service-card">
                <h3 className="service-title">Specialized Care</h3>
                <p className="service-text">We offer tailored care solutions for individuals with specific needs,
                  including developmental disabilities, cognitive impairments, and physical limitations. Our specially
                  trained staff implements personalized care plans, incorporating therapeutic activities and specialized
                  support to enhance quality of life and promote independence.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="section gray">
          <div className="section-container">
            <h2 className="section-title">Get To Know Our Care Team</h2>

            <div className="team-hover-grid">
              <div className="team-hover-card">
                <img src={teamImages[0]} alt="Julieann" className="team-member-img"/>
                <div className="team-overlay">
                  <h3 className="team-member-name">Julieann</h3>
                  <p className="team-member-title">Registered Behavior Technician (RBT)</p>
                  <div className="team-member-description">
                    <p>A dedicated RBT with a passion for supporting individuals on the autism spectrum. Her journey
                      began in high school when she volunteered in a special education classroom.</p>
                    <p>Now, she provides individualized support to help clients reach their full potential through
                      Applied Behavior Analysis therapy.</p>
                  </div>
                </div>
              </div>
                        
              <div className="team-hover-card">
                <img src={teamImages[1]} alt="Adrian Bowman" className="team-member-img"/>
                <div className="team-overlay">
                  <h3 className="team-member-name">Adrian Bowman</h3>
                  <p className="team-member-title">Registered Behavior Technician</p>
                  <div className="team-member-description">
                    <p>With over ten years in teaching and childcare, Adrian brings vibrant energy and positivity to
                      help children with autism thrive.</p>
                    <p>Her passion for helping kids is complemented by her love for music, travel, and spending time
                      with loved ones, always bringing creativity and joy to her work.</p>
                  </div>
                </div>
              </div>

              <div className="team-hover-card">
                <img src={teamImages[2]} alt="Don" className="team-member-img"/>
                <div className="team-overlay">
                  <h3 className="team-member-name">Don</h3>
                  <p className="team-member-title">Senior Care Specialist</p>
                  <div className="team-member-description">
                    <p>With experience helping young adults with autism, Don now brings his compassionate approach to
                      senior care.</p>
                    <p>Outside of work, he enjoys Lego projects, cooking for family and friends, and taking walks with
                      his two dogs. He loves traveling with his husband, creating memories together.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="section light">
          <div className="section-container">
            <h2 className="section-title">Our Packages</h2>
            <div className="pricing-grid">
              <div className={`pricing-card ${selectedPackage === 'Basic Care' ? 'selected' : ''}`}>
                <h3 className="pricing-tier">Basic Care</h3>
                <div className="pricing-price">$25/hour</div>
                <ul className="pricing-features">
                  <li>Basic personal care</li>
                  <li>Medication reminders</li>
                  <li>Light housekeeping</li>
                  <li>Companionship</li>
                </ul>
                <button
                    className="cta-button pricing-cta"
                    onClick={() => handlePackageSelect('Basic Care', 25)}
                >
                  {selectedPackage === 'Basic Care' ? 'Selected' : 'Choose Plan'}
                </button>
              </div>

              <div className={`pricing-card ${selectedPackage === 'Standard Care' ? 'selected' : ''}`}>
                <h3 className="pricing-tier">Standard Care</h3>
                <div className="pricing-price">$35/hour</div>
                <ul className="pricing-features">
                  <li>All Basic Care features</li>
                  <li>Meal preparation</li>
                  <li>Transportation services</li>
                  <li>Shopping assistance</li>
                </ul>
                <button
                    className="cta-button pricing-cta"
                    onClick={() => handlePackageSelect('Standard Care', 35)}
                >
                  {selectedPackage === 'Standard Care' ? 'Selected' : 'Choose Plan'}
                </button>
              </div>

              <div className={`pricing-card ${selectedPackage === 'Premium Care' ? 'selected' : ''}`}>
                <h3 className="pricing-tier">Premium Care</h3>
                <div className="pricing-price">$45/hour</div>
                <ul className="pricing-features">
                  <li>All Standard Care features</li>
                  <li>24/7 availability</li>
                  <li>Specialized care services</li>
                  <li>Care coordination</li>
                </ul>
                <button
                    className="cta-button pricing-cta"
                    onClick={() => handlePackageSelect('Premium Care', 45)}
                >
                  {selectedPackage === 'Premium Care' ? 'Selected' : 'Choose Plan'}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section gray">
          <div className="section-container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-container">
              <FAQItem
                  question="What is respite care?"
                  answer="Respite care provides temporary relief for primary caregivers, allowing them to take a break while ensuring their loved ones receive quality care."
              />
              <FAQItem
                  question="How long can I book respite care for?"
                  answer="We offer flexible booking options ranging from a few hours to several weeks, depending on your needs."
              />
              <FAQItem
                  question="Are your caregivers certified?"
                  answer="Yes, all our caregivers are certified, background-checked, and receive ongoing training to provide the best care possible."
              />
              <FAQItem
                  question="Do you accept insurance?"
                  answer="We accept various insurance plans and can help you understand your coverage options. Contact us for more details."
              />
            </div>
          </div>
        </section>


        <section id="appointments" className="section light">
          <div className="section-container">
            <h2 className="section-title">Schedule an Appointment</h2>
            <div className="about-content">
              <p className="about-text">
                Book your consultation or respite care service online. We'll contact you to confirm details
                and discuss your specific needs.
              </p>
              <div className="text-center">
                <button className="cta-button">Book Now</button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section light">
          <div className="section-container">
            <h2 className="section-title">Contact Us</h2>
            <div className="contact-container">
              <div className="contact-info">
                <h3>Get in Touch</h3>
                <div className="contact-details">
                  <div className="contact-item">
                    <Phone size={20}/>
                    <span>(972-854-8994)</span>
                  </div>
                  <div className="contact-item">
                    <Mail size={20}/>
                    <span>dford@empowercarellc.com</span>
                  </div>
                  <div className="contact-item">
                    <MapPin size={20}/>
                    <span>Heartland, 75126</span>
                  </div>
                </div>
              </div>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="cta-button">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </div>
  );
}

export default App;
