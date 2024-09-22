import logo from "../../assets/images/zim.png"; // Adjust the path based on your folder structure

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="py-20"
        style={{
          background: "linear-gradient(to bottom, #0099ff 0%, #99ccff 100%)" 
        }}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Logo on the Left */}
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src={logo}
              alt="Company Logo"
              className="w-100 h-auto" 
            />
          </div>

          {/* About Details on the Right */}
          <div className="md:w-1/2 text-center">
            {" "}{/* Center text within this div */}
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-12">
              About Us
            </h2>
            <p className="text-lg md:text-xl text-black-700 leading-relaxed mb-4 font-semibold ">
              Zimulate Consultech LLP is a growing tech consultancy based in
              Kerala, dedicated to helping businesses reach their full
              potential. Our team of experts provides tailored solutions to
              address unique challenges and drive real results. We pride
              ourselves on delivering personalized, impactful services to help
              companies grow and succeed. As a registered startup under the
              Kerala Startup Mission, we are committed to fostering innovation
              and entrepreneurship in the region.
            </p>
            <p className="text-lg md:text-xl text-black-700 leading-relaxed mb-4 font-semibold">
              Our collaborative approach ensures that we not only understand our
              clients’ needs but also actively contribute to their growth
              journey. By leveraging cutting-edge technologies and industry best
              practices, we empower businesses to navigate the complexities of
              the digital landscape. Together, we aim to create a thriving
              ecosystem where startups and established enterprises alike can
              flourish.
            </p>
            <button className="mt-4 bg-violet-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
              Meet Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
