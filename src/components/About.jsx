import React from "react";
import BackImg from "../assets/images/backImg.png";
import Contact from "./Contact";
import AboutImg1 from "../assets/images/About/aboutimg1.png";
import AboutImg2 from "../assets/images/About/aboutimg2.png";
import AboutImg3 from "../assets/images/About/aboutimg3.png";
import AboutImg4 from "../assets/images/About/aboutimg4.png";
import AboutImg5 from "../assets/images/About/aboutimg5.png";
import AboutImg6 from "../assets/images/About/aboutimg6.png";
import AboutImg7 from "../assets/images/About/aboutimg7.png";

const About = () => {
  return (
    <div>
      <div
        className="py-8 md:py-12 px-8 md:px-16 text-center"
        style={{
          backgroundImage: `url(${BackImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-customColor-500">
          <h1 className="text-4xl font-bold font-playfair my-4 md:my-4 pb-2">
            About Charmed Circles Jewelry
          </h1>
          <h1 className="text-5xl font-bold font-playfair my-4 md:my-4 pb-2">
            Exquisite handcrafted jewelry, <br /> unparalleled quality, and
            personalized <br /> service await you.
          </h1>
        </div>
      </div>

      <div>
        <div className="flex flex-col md:flex-row justify-between items-center m-4 p-4 bg-[#CEB483] rounded-lg">
          <div className="text-justify">
            <h1 className="text-4xl font-bold font-playfair my-4 md:my-0 pb-4 ">
              Our Story
            </h1>
            <p className="text-2xl text-customColor-500 font-bold hidden md:block">
              Welcome to Charmed Circles Jewelry, where <br /> elegance meets
              artistry. Founded with a <br /> passion for creating timeless
              pieces, we have <br />
              been dedicated to crafting exquisite jewelry <br /> that
              celebrates life’s most cherished moments. <br /> Our journey began
              with a simple vision: to <br />
              bring joy and beauty into the lives of our <br />
              customers through meticulously designed and <br />
              handcrafted jewelry.
            </p>
            <p className="text-2xl text-customColor-500 font-bold block md:hidden">
              Welcome to Charmed Circles Jewelry, where elegance meets artistry.
              Founded with a passion for creating timeless pieces, we have been
              dedicated to crafting exquisite jewelry that celebrates life’s
              most cherished moments. Our journey began with a simple vision: to
              bring joy and beauty into the lives of our customers through
              meticulously designed and handcrafted jewelry.
            </p>
          </div>
          <img src={AboutImg1} alt="about-image1" className="my-4" />
          <img src={AboutImg2} alt="about-image2" className="my-4" />
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center m-4 p-4 bg-[#CEB483] rounded-lg">
          <img src={AboutImg3} alt="about-image3" className="my-4" />
          <img src={AboutImg4} alt="about-image4" className="my-4" />
          <div className="text-justify">
            <h1 className="text-4xl font-bold font-playfair my-4 md:my-0 pb-4 ">
              Our Mission
            </h1>
            <p className="text-2xl text-customColor-500 font-bold hidden md:block">
              At Charmed Circles, our mission is to create <br /> jewelry that
              not only adorns but also tells a <br /> story. We believe that
              every piece of jewelry <br /> should reflect the unique
              personality and style <br /> of its wearer. Our commitment to
              quality <br />
              craftsmanship, and innovation drives us to , <br /> continually
              push the boundaries of design, <br /> ensuring that each piece is
              as unique as the <br /> person wearing it.
            </p>
            <p className="text-2xl text-customColor-500 font-bold block md:hidden">
              At Charmed Circles, our mission is to create jewelry that not only
              adorns but also tells a story. We believe that every piece of
              jewelry should reflect the unique personality and style of its
              wearer. Our commitment to quality craftsmanship and innovation
              drives us to continually push the boundaries of design, ensuring
              that each piece is as unique as the person wearing it.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-around items-center m-4 p-4 bg-[#CEB483] rounded-lg">
          <img src={AboutImg5} alt="about-image5" className="my-4" />

          <div className="text-justify">
            <h1 className="text-4xl font-bold font-playfair my-4 md:my-0 pb-4 ">
              Our Craftsmanship
            </h1>
            <p className="text-2xl text-customColor-500 font-bold hidden md:block">
              Our jewelry is a testament to the skills of our <br /> talented
              artisans. With an unwavering <br /> dedication to detail, our
              craftsmen and women <br />
              bring each design to life, using only the finest <br />
              materials. From sparkling diamonds and <br /> radiant gemstones to
              luxurious metals, every <br />
              element of our jewelry is carefully selected to <br />
              ensure exceptional quality and beauty.
            </p>
            <p className="text-2xl text-customColor-500 font-bold block md:hidden">
              Our jewelry is a testament to the skills of our talented artisans.
              With an unwavering dedication to detail, our craftsmen and women
              bring each design to life, using only the finest materials. From
              sparkling diamonds and radiant gemstones to luxurious metals,
              every element of our jewelry is carefully selected to ensure
              exceptional quality and beauty.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center m-4 p-4 bg-[#CEB483] rounded-lg">
          <div className="text-justify">
            <h1 className="text-4xl font-bold font-playfair my-4 md:my-0 pb-4 ">
              Our Collection
            </h1>
            <p className="text-2xl text-customColor-500 font-bold hidden md:block">
              Explore our diverse collection, featuring a <br /> range of styles
              from classic to contemporary. <br /> Whether you’re looking for an
              elegant <br />
              engagement ring, a timeless necklace, or a <br />
              statement piece for a special occasion, <br /> Charmed Circles has
              something to suit every <br />
              taste and preference. Each piece is designed to <br /> be a
              lasting symbol of beauty and sophistication.
            </p>
            <p className="text-2xl text-customColor-500 font-bold block md:hidden">
              Explore our diverse collection, featuring a range of styles from
              classic to contemporary. Whether you’re looking for an elegant
              engagement ring, a timeless necklace, or a statement piece for a
              special occasion, Charmed Circles has something to suit every
              taste and preference. Each piece is designed to be a lasting
              symbol of beauty and sophistication.
            </p>
          </div>
          <img src={AboutImg6} alt="about-image6" className="my-4" />
          <img src={AboutImg7} alt="about-image7" className="my-4" />
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default About;
