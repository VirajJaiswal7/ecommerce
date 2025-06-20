import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            We are a passionate team dedicated to transforming healthcare access
            through modern technology. With a deep understanding of patient
            needs, we aim to connect users with top-tier medical professionals
            easily and efficiently.
          </p>
          <p>
            Our platform simplifies the process of finding and booking
            appointments with qualified doctors, ensuring convenience and peace
            of mind for individuals and families alike.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to revolutionize the healthcare experience by
            delivering a user-centric platform that empowers individuals to
            manage their medical needs with confidence and ease. We are
            committed to improving lives through innovation, trust, and
            reliability.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />{" "}
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Qualiry Assurance:</b>
          <p className="text-gray-600">
            We collaborate only with certified and experienced medical
            professionals, ensuring that every consultation and recommendation
            meets the highest standards of care and accuracy.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Easily schedule appointments, access health records, and consult
            with doctors—all from the comfort of your home. Our intuitive
            interface is designed to save you time and effort.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our dedicated support team is here to assist you 24/7. Whether it's
            a technical issue or a scheduling concern, we ensure prompt and
            friendly help every step of the way.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
