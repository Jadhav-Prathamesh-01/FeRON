"use client";

import { useRef, useEffect } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const form = formRef.current;
    const result = resultRef.current;

    if (!form || !result) return;

    const handleSubmit = async (e: Event) => {
      e.preventDefault();
      
      const formData = new FormData(form as HTMLFormElement);
      
      // Debug: Log form data
      console.log('Form data being sent:');
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }
      
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        
        console.log('Response status:', response.status);
        const data = await response.json();
        console.log('Response data:', data);
        
        if (data.success) {
          result.classList.remove('hidden');
          (form as HTMLFormElement).reset();
          result.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.error('Form submission failed:', data);
          alert(`There was an error sending your message: ${data.message || 'Please try again.'}`);
        }
      } catch (error) {
        console.error('Network error:', error);
        alert('There was a network error sending your message. Please check your connection and try again.');
      }
    };

    form.addEventListener('submit', handleSubmit);

    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []);
  return (
    <section className="min-h-screen bg-black text-white font-sans py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Purple Subtitle */}
          <h2 className="text-lg text-purple-500 font-medium mb-8">
            Ready to Transform Your Energy Future?
          </h2>
          
          {/* Main Heading with Gradient */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            <span className="text-gray-400">Get in Touch</span> <span className="text-gray-300">with</span> <span className="text-gray-200">FeRON</span><br />
            <span className="text-gray-500">and Start Your</span> <span className="text-gray-300">Energy</span> <span className="text-gray-100">Journey</span>
          </h1>
          
          {/* Description Paragraph */}
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Join us in revolutionizing India's energy storage landscape. Connect with our team to learn more about FeRON technology and explore partnership opportunities that will shape the future of sustainable energy.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form 
                ref={formRef}
                action="https://api.web3forms.com/submit" 
                method="POST" 
                className="space-y-6"
              >
                <input type="hidden" name="access_key" value="6302582e-2465-47e2-aba9-d3c27df63a58" />
                <input type="hidden" name="subject" value="New Contact Form Submission from FeRON Website" />
                <input type="hidden" name="from_name" value="FeRON Energy Contact Form" />
                
                {/* Success Message */}
                <div ref={resultRef} className="hidden bg-green-600 text-white p-4 rounded-lg mb-6">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  >
                    <option value="">Select an option</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="investment">Investment Inquiry</option>
                    <option value="technology">Technology Details</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="demo">Schedule a Demo</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-none"
                    placeholder="Tell us about your requirements and how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Company Info */}
              <div className="bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">FeRON Energy</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Pioneering the future of energy storage with FeRON Iron-Air Battery technology. 
                  We're building India's energy independence through innovative, sustainable, 
                  and cost-effective energy storage solutions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-400">informationferon@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-gray-400">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-gray-400">Tierra Viva Society Floor no7 Baner Pune</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partnership Opportunities */}
              <div className="bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Partnership Opportunities</h3>
                <p className="text-gray-300 mb-4">
                  We're looking for strategic partners in:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Utility companies and grid operators</li>
                  <li>• Renewable energy developers</li>
                  <li>• Government institutions (MNRE, SECI, NTPC)</li>
                  <li>• Technology integrators</li>
                  <li>• Energy storage distributors</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

