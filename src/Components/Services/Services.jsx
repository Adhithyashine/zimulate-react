import projectAssistanceImage from "../../assets/images/project_assistance.jpg";
import mobileWebApplicationsImage from "../../assets/images/mob_web_dev1.jpg";
import trainingWorkshopsImage from "../../assets/images/workshops.jpg";
import industryConsultingImage from "../../assets/images/consulting.jpg";

const Services = () => {
  return (
    <div>
      <section
        id="services"
        className="py-20"
        style={{
          background: "linear-gradient(to bottom, #000099 0%, #0099ff 100%)"
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Assistance */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src={projectAssistanceImage}
                alt="Project Assistance"
                className="mb-4 mx-auto w-32 h-32 object-cover"
              />
              <h3 className="text-xl font-bold mb-4">Project Assistance</h3>
              <p className="text-gray-600">
                We provide end-to-end support for your web projects, ensuring
                that your websites are fully responsive, optimized for
                performance, and aligned with your business objectives. Our team
                is skilled in modern web technologies to build sites that not
                only look great but also deliver results.
              </p>
            </div>

            {/* Mobile and Web Applications */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src={mobileWebApplicationsImage}
                alt="Mobile and Web Applications"
                className="mb-4 mx-auto w-32 h-32 object-cover"
              />
              <h3 className="text-xl font-bold mb-4">
                Mobile and Web Applications
              </h3>
              <p className="text-gray-600">
                Whether you are looking to develop a mobile app or a web
                application, we specialize in creating user-friendly, secure,
                and scalable solutions. We focus on seamless functionality and
                design to deliver a smooth experience for your users across
                platforms.
              </p>
            </div>

            {/* Training / Workshops */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src={trainingWorkshopsImage}
                alt="Training and Workshops"
                className="mb-4 mx-auto w-32 h-32 object-cover"
              />
              <h3 className="text-xl font-bold mb-4">Training / Workshops</h3>
              <p className="text-gray-600">
                Our hands-on training programs and workshops are designed to
                equip your team with the latest industry knowledge and practical
                skills. From coding bootcamps to digital marketing, we tailor
                sessions to fit your needs, ensuring your team stays ahead of
                the curve.
              </p>
            </div>

            {/* Industry-Specific Consulting */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src={industryConsultingImage}
                alt="Industry-Specific Consulting"
                className="mb-4 mx-auto w-32 h-32 object-cover"
              />
              <h3 className="text-xl font-bold mb-4">
                Industry-Specific Consulting
              </h3>
              <p className="text-gray-600">
                We provide expert consulting services tailored to the specific
                demands of your industry. Whether it is technology, or any other
                sector, our experienced consultants work closely with you to
                identify challenges, develop strategies, and implement solutions
                that drive success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
