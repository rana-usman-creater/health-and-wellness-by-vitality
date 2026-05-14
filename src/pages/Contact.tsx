import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Contact() {
  return (
    <main className="pt-12 pb-24 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <SEO 
        title="Contact Us"
        description="Get in touch with the VitalityHub team."
        canonical="/contact"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 font-serif">Get in Touch</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Have a question, feedback, or a partnership inquiry? We'd love to hear from you. Fill out the form below and our team will get back to you shortly.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-200 dark:border-gray-700">
          
          {/* Contact Info Sidebar */}
          <div className="bg-primary-700 dark:bg-primary-900 text-white p-10 md:w-1/3 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-primary-100 mb-12 text-sm leading-relaxed">
                We're always open to collaborating with medical professionals, wellness brands, and our readers.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="mt-1 mr-4 text-primary-300" size={20} />
                  <div>
                    <h4 className="font-medium text-sm text-primary-200 uppercase tracking-wider mb-1">Email</h4>
                    <p>hello@vitalityhub.example.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mt-1 mr-4 text-primary-300" size={20} />
                  <div>
                    <h4 className="font-medium text-sm text-primary-200 uppercase tracking-wider mb-1">Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mt-1 mr-4 text-primary-300" size={20} />
                  <div>
                    <h4 className="font-medium text-sm text-primary-200 uppercase tracking-wider mb-1">Office</h4>
                    <p className="leading-relaxed">123 Wellness Avenue<br/>San Francisco, CA 94107<br/>United States</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 md:mt-0">
              <p className="text-sm text-primary-300">&copy; {new Date().getFullYear()} VitalityHub.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10 md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Send us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thanks! This is a demo form."); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white" placeholder="John" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white" placeholder="Doe" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white" placeholder="john@example.com" required />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <select id="subject" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white">
                  <option>General Inquiry</option>
                  <option>Partnership/Sponsorship</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white resize-none" placeholder="How can we help you?" required></textarea>
              </div>

              <button type="submit" className="w-full px-8 py-4 bg-primary-700 hover:bg-primary-800 text-white font-bold rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
