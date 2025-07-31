import React, { useState } from "react";
import "./home.scss";

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "The hotel staff was extremely helpful and made our stay comfortable. The rooms were clean and well-maintained. I would definitely recommend this hotel to anyone visiting the area.",
      author: "Jennifer Andrews",
      location: "Lagos Nigeria",
    },
    {
      text: "Amazing experience! The facilities are top-notch and the service exceeded our expectations. Will definitely be back for our next visit.",
      author: "Michael Johnson",
      location: "Abuja Nigeria",
    },
  ];

  const accommodations = [
    { name: "Executive Suite", image: "/images/executive-suite.jpg" },
    { name: "Deluxe Room", image: "/images/deluxe-room.jpg" },
    { name: "Royal Suite", image: "/images/royal-suite.jpg" },
  ];

  const amenities = [
    {
      icon: "🌡️",
      title: "Air Conditioning",
      description:
        "Stay cool and comfortable with our modern air conditioning systems in every room.",
    },
    {
      icon: "📶",
      title: "Free WiFi",
      description:
        "Enjoy high-speed internet connectivity throughout our entire property.",
    },
    {
      icon: "🚗",
      title: "Free Parking",
      description:
        "Complimentary parking spaces available for all our guests during their stay.",
    },
    {
      icon: "🍳",
      title: "Complimentary Breakfast",
      description:
        "Start your day right with our delicious complimentary breakfast buffet.",
    },
    {
      icon: "🛎️",
      title: "Room Service",
      description:
        "24/7 room service available to cater to all your dining and comfort needs.",
    },
    {
      icon: "📺",
      title: "In-Room Entertainment",
      description:
        "Modern entertainment systems with premium channels and streaming services.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">WELCOME TO</h1>
          <h2 className="hero-subtitle">Unique Living Experiences</h2>

          {/* Booking Form */}
          <div className="booking-form">
            <div className="booking-grid">
              <div className="form-group">
                <label>Check In Date</label>
                <div className="input-with-icon">
                  <span className="icon">📅</span>
                  <input type="date" />
                </div>
              </div>
              <div className="form-group">
                <label>Check Out Date</label>
                <div className="input-with-icon">
                  <span className="icon">📅</span>
                  <input type="date" />
                </div>
              </div>
              <div className="form-group">
                <label>Guests & Rooms</label>
                <div className="input-with-icon">
                  <span className="icon">👥</span>
                  <select>
                    <option>2 Guest, 1 Room</option>
                    <option>4 Guest, 2 Rooms</option>
                  </select>
                </div>
              </div>
              <button className="btn-primary">Check Availability</button>
            </div>
          </div>
        </div>
      </section>

      {/* Comfort Section */}
      <section className="comfort-section">
        <div className="container">
          <div className="comfort-grid">
            <div className="comfort-content">
              <h2 className="section-title">Comfort</h2>
              <div className="resolution-badge">1920 × 1080</div>
              <p className="section-description">
                A sophisticated approach to rethinking our standards and
                bringing our suites to the next level. Enjoy every moment of
                your stay in our spacious and elegantly designed rooms.
              </p>
              <ul className="feature-list">
                <li>Flexible</li>
                <li>Fast</li>
                <li>Responsive</li>
              </ul>
              <button className="btn-secondary">Learn More</button>
            </div>
            <div className="comfort-image">
              <img src="/images/comfort-room.jpg" alt="Hotel Room" />
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="accommodation-section">
        <div className="container">
          <h2 className="section-title center">Accommodation</h2>
          <div className="accommodation-grid">
            {accommodations.map((room, index) => (
              <div key={index} className="room-card">
                <img src={room.image} alt={room.name} />
                <div className="room-content">
                  <h3>{room.name}</h3>
                  <button className="btn-secondary">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="facilities-section">
        <div className="container">
          <h2 className="section-title center">Facilities</h2>
          <p className="section-description center">
            Every service we provide promises comfort, convenience, and quality
            to ensure you have the best experience during your stay.
          </p>

          {/* Restaurant */}
          <div className="facility-item">
            <div className="facility-content">
              <h3>Restaurant</h3>
              <p>
                Savor delicious meals at our restaurant offering both local and
                international cuisine prepared by our expert chefs. Our elegant
                dining space provides the perfect atmosphere for every meal.
              </p>
              <button className="btn-primary">Learn More</button>
            </div>
            <div className="facility-image">
              <img src="/images/restaurant.jpg" alt="Restaurant" />
            </div>
          </div>

          {/* Swimming Pool */}
          <div className="facility-item reverse">
            <div className="facility-image">
              <img src="/images/swimming-pool.jpg" alt="Swimming Pool" />
            </div>
            <div className="facility-content">
              <h3>Swimming Pool</h3>
              <p>
                Relax and unwind in our crystal-clear swimming pool. Whether you
                want to take a refreshing dip or simply lounge poolside, our
                pool area provides the perfect escape.
              </p>
              <button className="btn-primary">Learn More</button>
            </div>
          </div>

          {/* Gym */}
          <div className="facility-item">
            <div className="facility-content">
              <h3>Gym</h3>
              <p>
                Stay active during your stay with our fully equipped fitness
                center. Featuring modern equipment and a comfortable environment
                to maintain your workout routine.
              </p>
              <button className="btn-primary">Learn More</button>
            </div>
            <div className="facility-image">
              <img src="/images/gym.jpg" alt="Gym" />
            </div>
          </div>

          {/* Event Hall */}
          <div className="facility-item reverse">
            <div className="facility-image">
              <img src="/images/event-hall.jpg" alt="Event Hall" />
            </div>
            <div className="facility-content">
              <h3>Event Hall</h3>
              <p>
                Host your special events and conferences in our elegant event
                hall. Equipped with modern facilities and professional service
                to make your occasion memorable.
              </p>
              <button className="btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="amenities-section">
        <div className="container">
          <h2 className="section-title center">Amenities</h2>
          <p className="section-description center">
            Every service we provide promotes comfort, convenience, and makes
            your experience memorable.
          </p>
          <div className="amenities-grid">
            {amenities.map((amenity, index) => (
              <div key={index} className="amenity-card">
                <div className="amenity-icon">{amenity.icon}</div>
                <h3>{amenity.title}</h3>
                <p>{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title center">What Clients Think</h2>
          <div className="testimonial-container">
            <div className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">
                {testimonials[currentTestimonial].text}
              </p>
              <div className="testimonial-author">
                <div className="quote-mark-end">"</div>
                <div className="author-info">
                  <h4>{testimonials[currentTestimonial].author}</h4>
                  <p>{testimonials[currentTestimonial].location}</p>
                </div>
              </div>
            </div>
            <button className="testimonial-nav prev" onClick={prevTestimonial}>
              ❮
            </button>
            <button className="testimonial-nav next" onClick={nextTestimonial}>
              ❯
            </button>
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section className="contact-booking-section">
        <div className="container">
          <div className="contact-booking-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Reach Us</h2>
              <p>
                Get in touch with us for reservations, inquiries, or any
                assistance you may need. Our friendly staff is here to help make
                your stay perfect.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>123 Hotel Street, Lagos, Nigeria</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+234 123 456 7890</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>info@dominicsuites.com</span>
                </div>
              </div>
              <button className="btn-secondary">Contact Us</button>
            </div>

            {/* Booking Form */}
            <div className="booking-form-card">
              <h3>Hotel Booking Form</h3>
              <div className="booking-form-fields">
                <div className="form-row">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone Number" />
                <div className="form-row">
                  <input type="date" />
                  <input type="date" />
                </div>
                <select>
                  <option>Select Room Type</option>
                  <option>Executive Suite</option>
                  <option>Deluxe Room</option>
                  <option>Royal Suite</option>
                </select>
                <button className="btn-primary full-width">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
