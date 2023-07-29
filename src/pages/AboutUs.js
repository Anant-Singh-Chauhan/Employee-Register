// AboutUs.js
import React from 'react';
import './AboutUs.css'; // Assuming you will add CSS styles for this component in a separate file

export default function AboutUs() {
  return (
    <section className="about-us">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="description">
          At HealthTech Solutions, we are a leading service-based company specialized in the healthcare machinery domain. Our mission is to provide cutting-edge solutions that revolutionize the healthcare industry and improve patient care.
        </p>
        <p className="description">
          With a team of dedicated engineers and healthcare experts, we strive to develop and deliver innovative medical equipment and devices. Our focus on research and development allows us to stay at the forefront of technology, ensuring that our clients receive the most advanced and reliable solutions available.
        </p>
        <p className="description">
          Our commitment to quality and customer satisfaction drives everything we do. We work closely with healthcare institutions, hospitals, and medical professionals to understand their unique needs and challenges. This collaborative approach enables us to tailor our services and products to meet the specific requirements of our clients.
        </p>
        <p className="description">
          HealthTech Solutions is proud to be contributing to the advancement of healthcare through our state-of-the-art machinery and equipment. Our passion for making a positive impact in the lives of patients and medical practitioners motivates us to continuously strive for excellence in everything we do.
        </p>
        <p className="description">
          Thank you for considering HealthTech Solutions as your trusted partner. We look forward to serving you and being a part of your journey towards a healthier future.
        </p>
      </div>
    </section>
  );
};

