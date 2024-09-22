import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to an API)
    console.log(formData);
  };

  // Custom gradient for Connect with Us section
  const customGradient = "linear-gradient(to right, #4e54c8, #8f94fb)"; // You can change this value

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg mx-2">
          <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-left mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2" htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2" htmlFor="message">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>

        {/* Connect with Us Section */}
        <div
          className="flex-1 p-6 rounded-lg shadow-lg mx-2 text-white"
          style={{
            background: customGradient, // Custom gradient background
          }}
        >
          <h3 className="text-4xl font-bold mb-6 text-center">Connect with Us</h3>
          <p className="text-xl font-semibold p-2 text-center">Company Location: zimulateconsultechLLP, Edachira, Kakkanad, Ernakulam.</p>
          <p className="text-xl font-semibold p-2 text-center">
            Email: <a href="mailto:zimulateconsultechllp@gmail.com" className="underline">zimulateconsultechllp@gmail.com</a>
          </p>
          <p className="text-xl font-semibold p-2 text-center">
            Phone: <a href="tel:8867376358" className="underline">8867376358</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
