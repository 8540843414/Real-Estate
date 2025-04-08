/**import React from 'react';

const Contact = () => {
  return (
    <div id="Contact" className="w-full bg-gray-100 py-20 px-4 sm:px-10 lg:px-20">
      
      <h1 className='text-2xl sm:text-4xl font-bold text-center mb-2'>
        Contact{' '}
        <span className='text-blue-500 underline underline-offset-4 decoration-1'>
           With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-10">
        We'd love to hear from you. Get in touch!
      </p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        

        <div className="space-y-4 text-gray-700">
          <h3 className="text-xl font-semibold">Our Office</h3>
          <p>123 Real Estate Street<br />Muzaffarpur, India - 400001</p>
          <p><strong>Email:</strong> priyampriyadarshi2023@gmail.com</p>
          <p><strong>Phone:</strong> +91 8540844314</p>
          <p><strong>Hours:</strong> Mon - Sat: 9am - 6pm</p>
        </div>


        <form className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Message</label>
            <textarea
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="5"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;**/




import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { motion as Motion} from "framer-motion";


const Contact = () => {
  const [status] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const formData = new FormData(e.target);
    formData.append('access_key', 'bca10134-724d-4345-8546-bc8de27cc4ca');
  
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
  
      const result = await response.json();
  
      if (result.success) {
        toast.success('Message sent successfully!');
        e.target.reset();
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
        console.error("Error submitting form:", error);
      toast.error('Network error. Try again later.');
    }
  
    setLoading(false);
  };

  return (
    <Motion.div 
    initial={{ opacity: 0, x: -200 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    id="Contact" className="w-full bg-gray-100 py-20 px-4 sm:px-10 lg:px-20">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        Contact <span className="underline underline-offset-4 decoration-1 text-blue-500">Us</span>
      </h2>
      <p className="text-center text-gray-500 mb-10">
        We'd love to hear from you. Get in touch!
      </p>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-4 text-gray-700">
          <h3 className="text-xl font-semibold">Our Office</h3>
          <p>123 Estate Street<br />Muzaffarpur, India - 400001</p>
          <p><strong>Email:</strong> priyampriyadarshi2023@gmail.com</p>
          <p><strong>Phone:</strong> +91 8540844314</p>
          <p><strong>Hours:</strong> Mon - Sat: 9am - 6pm</p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-6 space-y-4"
        >
          <input type="hidden" name="access_key" value="bca10134-724d-4345-8546-bc8de27cc4ca" />

          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Message</label>
            <textarea
              name="message"
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="5"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
  type="submit"
  className="w-fit px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition duration-300 mx-auto block disabled:opacity-50 cursor-pointer"
  disabled={loading}
>
  {loading ? 'Sending...' : 'Send Message'}
</button>


          {/* Status Message */}
          {status && (
            <p className={`text-center text-sm mt-4 ${status.includes('successfully') ? 'text-green-600' : 'text-red-500'}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </Motion.div>
  );
};

export default Contact;