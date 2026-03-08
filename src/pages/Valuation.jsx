import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import tenant2 from "../assets/tenant2.png";
import westin from "../assets/westin.png";
import summit from "../assets/summit.png";
import holcim from "../assets/holcim.png";
import btv from "../assets/btv.png";
import tenant3 from "../assets/tenant3.png";
import { FiArrowUpRight } from "react-icons/fi";
import tenant from "../assets/tenant.png";
import AOS from "aos";
import "aos/dist/aos.css";

import service1 from "../assets/ourservice_img1.png";
import service2 from "../assets/ourservice_img2.png";
import service3 from "../assets/ourservice_img3.png";
import service4 from "../assets/ourservice_img4.png";
import service5 from "../assets/ourservice_img5.png";
import tenantservices from "../assets/tenantservices.png";
import { i } from "framer-motion/client";
import { useNavigate } from "react-router-dom";

const Valuation = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="bg-[#f3efe9] text-gray-800">
      {/* HERO SECTION */}
      <section className="w-full bg-[#f3efe9] px-4 sm:px-6 lg:px-12 pt-4 sm:pt-6">
        <div className="relative max-w-[1400px] mx-auto h-[420px] sm:h-[480px] lg:h-[520px] rounded-xl overflow-hidden">
          <img
            src={tenant}
            alt="Property Valuation & Market Appraisal"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
            <h1
              data-aos="fade-up"
              className="text-white font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight mb-4 sm:mb-6"
            >
              Property Valuation <br />& Market Appraisal
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl"
            >
              Accurate property valuations and expert market insights to help
              property owners understand the true value of their investment.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE SECTION */}
      <section className="max-w-[1200px] mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            data-aos="fade-right"
            className="w-full max-w-[360px] h-[300px] sm:h-[360px] lg:h-[420px] mx-auto md:mx-0 relative overflow-hidden rounded-md"
          >
            <img
              src={tenantservices}
              alt="Property Valuation"
              className="w-full h-full object-cover"
            />
          </div>

          <div data-aos="fade-left" className="max-w-[520px]">
            <p className="text-[#C5A059] text-lg sm:text-xl font-serif mb-4">
              Our Service
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mb-6">
              Accurate Property <br /> Valuation & Appraisal
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              Understanding the true value of your property is essential for
              making informed decisions. Our valuation and appraisal services
              provide detailed insights based on market trends, property
              condition, location advantages, and recent comparable sales.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Whether you are planning to sell, rent, refinance, or invest, our
              experts deliver reliable valuations and market analysis to guide
              your next move with confidence.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-12 sm:mt-16">
          <div className="w-[160px] sm:w-[220px] h-[3px] bg-[#C5A059]"></div>
        </div>
      </section>

      {/* VALUATION PROCESS */}
      <section className="bg-[#e5e5e5] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <h2
            data-aos="fade-up"
            className="text-center text-3xl sm:text-4xl md:text-5xl font-serif mb-12 sm:mb-16"
          >
            Our Valuation Process
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              {
                title: "Property Inspection",
                desc: "Assessing the physical condition and features of the property.",
              },
              {
                title: "Market Research",
                desc: "Analyzing current property trends and comparable listings.",
              },
              {
                title: "Value Analysis",
                desc: "Calculating the accurate market value based on collected data.",
              },
              {
                title: "Detailed Report",
                desc: "Providing a comprehensive valuation and appraisal report.",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="zoom-in-up"
                data-aos-delay={i * 150}
                className="bg-[#36404c] text-white rounded-[22px] p-8 min-h-[240px] flex flex-col"
              >
                <div className="w-14 h-14 bg-[#d9d9d9] rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl font-serif text-[#C5A059]">
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section
        className="relative w-full min-h-[420px] sm:min-h-[460px] bg-fixed bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${tenant2})` }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 max-w-[1100px] mx-auto w-full px-4 sm:px-6">
          <h2
            data-aos="fade-up"
            className="text-3xl sm:text-4xl lg:text-[48px] font-serif text-white leading-tight mb-10 text-center"
          >
            Benefits of Property Valuation
          </h2>

          <div className="max-w-[520px] mx-auto space-y-6">
            {[
              "Accurate Market Price Insights",
              "Better Selling & Investment Decisions",
              "Professional Market Analysis",
              "Confidence in Property Transactions",
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-[2px] bg-[#C5A059]"></div>

                <p className="text-base sm:text-lg text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED */}
      <section className="bg-[#f3efe9] py-20 sm:py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <h2
            data-aos="fade-up"
            className="text-3xl sm:text-4xl lg:text-[46px] font-serif text-black mb-4"
          >
            Trusted By Property Owners
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-600 text-base sm:text-lg lg:text-xl mb-16 sm:mb-20"
          >
            Helping landlords and investors manage premium real estate with
            confidence.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16 lg:gap-28">
            <img
              src={westin}
              alt="Westin"
              className="h-10 sm:h-14 lg:h-16 object-contain opacity-70"
            />
            <img
              src={summit}
              alt="Summit"
              className="h-10 sm:h-14 lg:h-16 object-contain opacity-70"
            />
            <img
              src={holcim}
              alt="Holcim"
              className="h-10 sm:h-14 lg:h-16 object-contain opacity-70"
            />
            <img
              src={btv}
              alt="BTV"
              className="h-10 sm:h-14 lg:h-16 object-contain opacity-70"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f3efe9] py-20 sm:py-24 lg:py-32">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 text-center">
          <h2
            data-aos="fade-up"
            className="text-3xl sm:text-4xl lg:text-[48px] font-serif text-black mb-12"
          >
            Discover Your Property Value
          </h2>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
          >
            <button className="bg-[#C5A059] text-white px-8 py-3 rounded-md text-sm tracking-widest hover:opacity-90 transition">
              GET VALUATION
            </button>

            <button className="border border-gray-400 text-gray-700 px-8 py-3 rounded-md text-sm tracking-widest hover:bg-gray-100 transition">
              BACK TO SERVICES
            </button>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="bg-[#f3efe9] py-20 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <h2
            data-aos="fade-up"
            className="text-3xl sm:text-4xl lg:text-[56px] font-bold text-center text-gray-800 mb-12 sm:mb-16"
          >
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* CARD 1 */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-[#e3e0db] rounded-2xl p-6 relative"
            >
              <img
                src={service2}
                alt="service"
                className="w-full h-[180px] object-cover rounded-xl mb-5"
              />

              <h3 className="text-gray-800 text-lg sm:text-xl leading-snug">
                Full Property Management <br />& Rent Collection
              </h3>

              <button
                onClick={() => navigate("/collection")}
                className="absolute bottom-5 right-5 w-11 h-11 bg-[#2e3741] rounded-full flex items-center justify-center"
              >
                <FiArrowUpRight className="text-white text-xl" />
              </button>
            </div>

            {/* CARD 2 */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-[#e3e0db] rounded-2xl p-6 relative"
            >
              <img
                src={service3}
                alt="service"
                className="w-full h-[180px] object-cover rounded-xl mb-5"
              />

              <h3 className="text-gray-800 text-lg sm:text-xl leading-snug">
                Property Sales <br />& Marketing
              </h3>

              <button
                onClick={() => navigate("/marketing")}
                className="absolute bottom-5 right-5 w-11 h-11 bg-[#2e3741] rounded-full flex items-center justify-center"
              >
                <FiArrowUpRight className="text-white text-xl" />
              </button>
            </div>

            {/* CARD 3 */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-[#e3e0db] rounded-2xl p-6 relative"
            >
              <img
                src={service5}
                alt="service"
                className="w-full h-[180px] object-cover rounded-xl mb-5"
              />

              <h3 className="text-gray-800 text-lg sm:text-xl leading-snug">
                Landlord Support & <br />
                Investment Advisory
              </h3>

              <button
                onClick={() => navigate("/advisory")}
                className="absolute bottom-5 right-5 w-11 h-11 bg-[#2e3741] rounded-full flex items-center justify-center"
              >
                <FiArrowUpRight className="text-white text-xl" />
              </button>
            </div>

            {/* CARD 4 */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="bg-[#e3e0db] rounded-2xl p-6 relative"
            >
              <img
                src={service1}
                alt="service"
                className="w-full h-[180px] object-cover rounded-xl mb-5"
              />

              <h3 className="text-gray-800 text-lg sm:text-xl leading-snug">
                Property Letting & <br />
                Tenant Referencing
              </h3>

              <button
                onClick={() => navigate("/tenant")}
                className="absolute bottom-5 right-5 w-11 h-11 bg-[#2e3741] rounded-full flex items-center justify-center"
              >
                <FiArrowUpRight className="text-white text-xl" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Valuation;
