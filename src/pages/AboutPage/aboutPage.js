import React from "react";
import AboutBg from "../../assets/images/aboutTopBg (2).png";
import About1 from "../../assets/images/about1.jpg";
import About2 from "../../assets/images/about2.jpg";
import About3 from "../../assets/images/about3.jpg";
import "./aboutPage.css";

export const AboutPage = () => {
  const PHONE_E164 = "+918301849474";
  const WA_NUMBER = "918301849474";
  const WA_TEXT = encodeURIComponent("Hi Solis Green Energy, I'd like a solar quote.");

  return (
    <main className="aboutPage" aria-labelledby="about-title">
      {/* Hero / Title */}
      <section className="aboutTop">
        <div className="aboutTitleImage" role="img" aria-label="Solar background">
          {/* Use <img> for better CLS and lazy loading */}
          <img
            src={AboutBg}
            alt="Solar rooftop background"
            loading="lazy"
            decoding="async"
            srcSet={`${AboutBg} 1x`}
          />
        </div>

        <h1 id="about-title" className="whoAreWeTitle">Our Mission</h1>
        <p className="whoAreWeInfo">
          Our goal is to streamline the process of transitioning to solar energy
          through technology-driven solutions, reducing friction and creating a seamless
          customer experience.
        </p>
      </section>

      {/* Our Story */}
      <section className="aboutOurStory" aria-labelledby="our-story">
        <h2 id="our-story">Our Story</h2>
        <div className="aboutOurStoryInfo">
          <p>
            At Solis Green Energy, we understand the importance of clean and renewable
            energy and are dedicated to providing the highest quality Solar PV Systems on
            the market. Our team of experienced engineers and technicians design and
            engineer systems to meet each customer’s needs, and our skilled installers
            ensure every project meets the highest standards.
          </p>
          <p>
            We believe everyone should have access to clean and affordable energy.
            We provide expert consultation, installation and maintenance services, as well as
            financing options to make solar more accessible.
          </p>
        </div>
      </section>

      {/* Factory / Team Images */}
      <section className="aboutFactoryImages" aria-label="Solis Green Energy work gallery">
        <div className="factoryImage1">
          <img src={About1} alt="Solis team installing solar panels" loading="lazy" decoding="async" />
        </div>
        <div className="factoryImage2">
          <img src={About2} alt="Final inspection of solar installation" loading="lazy" decoding="async" />
        </div>
        <div className="factoryImage3">
          <img src={About3} alt="Completed rooftop solar array" loading="lazy" decoding="async" />
        </div>
      </section>

      {/* Closing Copy */}
      <section className="aboutOurStoryInfo">
        <p>
          We are proud to have a strong track record of over a hundred satisfied customers
          in Thiruvalla and the wider Pathanamthitta region. Known for our experienced staff
          and commitment to quality solar solutions, we’re here to help you achieve real
          savings on your energy bills and make a positive impact on the environment.
        </p>
        <p>
          Contact Solis Green Energy Solutions today to schedule your free consultation and
          take the first step toward a cleaner, more energy-independent future for your home
          or business.
        </p>
      </section>

      {/* Optional CTA band (matches header actions, great for mobile) */}
      <nav className="about-cta-band" aria-label="Quick actions">
        <a className="cta call" href={`tel:${PHONE_E164}`} aria-label="Call Solis Green Energy">
          <span className="ico" aria-hidden>📞</span>
          <span className="label">Call</span>
        </a>
        <a
          className="cta wa"
          href={`https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`}
          target="_blank"
          rel="noopener"
          aria-label="WhatsApp Solis Green Energy"
        >
          <span className="ico" aria-hidden>💬</span>
          <span className="label">WhatsApp</span>
        </a>
      </nav>
    </main>
  );
};
