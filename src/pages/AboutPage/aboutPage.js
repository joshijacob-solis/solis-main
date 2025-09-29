import React from "react";
import AboutBg from "../../assets/images/aboutTopBg (2).png";
import About1 from "../../assets/images/about1.jpg";
import About2 from "../../assets/images/about2.jpg";
import About3 from "../../assets/images/about3.jpg";
import "./aboutPage.css";
export const AboutPage = () => {
  return (
    <div className="aboutPage">
      <div
        className="aboutTop"
      >
        <div className="aboutTitleImage">
          <img src={AboutBg} alt="about-img" />

        </div>
        <div className="whoAreWeTitle">Our Mission</div>
        <div className="whoAreWeInfo">
          <p>
            Our goal is to streamline the process of transitioning to solar
            energy through technology-driven solutions, reducing friction and
            creating a seamless customer experience.
          </p>
        </div>
      </div>
      <div className="aboutOurStory">
        <h1>Our Story</h1>
        <div className="aboutOurStoryInfo">
          <p>
            At Solis Green Energy, we understand the importance of clean and
            renewable energy and are dedicated to providing the highest quality
            Solar PV Systems on the market. Our team of experienced engineers
            and technicians design and engineer the systems to meet the specific
            needs of each customer, and our skilled installers ensure that the
            systems are installed to the highest standards.
            <br></br>We believe that everyone should have access to clean and
            affordable energy, and we work hard to make our Solar PV Systems
            accessible to all. Our team provides expert consultation,
            installation and maintenance services, as well as financing options
            to make the systems more affordable for our customers.
          </p>
        </div>
      </div>
      <div className="aboutFactoryImages">
        <div
          className="factoryImage1"
          style={{ backgroundImage: `url(${About1})` }}
        ></div>
        <div
          className="factoryImage2"
          style={{ backgroundImage: `url(${About2})` }}
        ></div>
        <div
          className="factoryImage3"
          style={{ backgroundImage: `url(${About3})` }}
        ></div>
      </div>
      <div className="aboutOurStoryInfo">
        <p>
          We are proud to have hundreds of satisfied customers and numerous
          reference sites across Ireland, Italy and the UK, and we would be
          honored to help you achieve your energy independence and make a
          positive impact on the environment. Contact us today to schedule a
          consultation and take the first step towards a more sustainable
          future.
        </p>
      </div>
    </div>
  );
};
