
import { Info } from '@/lib/constants/information';
import { navLinks } from '@/lib/constants/navigation.data';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const {address, name, contact} = Info
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4 border-b border-gray-600 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-base font-semibold mb-4 border-b border-gray-600 pb-2">
              Contact Us
            </h3>
            <div className="space-y-2 text-gray-300">
              <p className="font-semibold text-white">{name}</p>
              <address className="not-italic text-sm leading-5">
                <p>{address.street}</p>
                <p>{address.location}, {address.city},</p>
                <p>{address.city} - {address.pincode}</p>
                <p>Tamil Nadu, India</p>
              </address>
              <p className='text-sm'>
               {contact.phone.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone}`}
                  aria-label={`Call ${name} at ${phone}`}
                  className="hover:underline"
                >
                 {phone}{index === 0 && ' / '}
                </a>
                ))} 
              </p>
              <p className='text-sm'>
               <a
                href={`mailto:${contact.email}`}
                className="hover:underline"
                aria-label={`Send an email to ${name}`}
                  >
                {contact.email}
              </a>
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div>
            <h3 className="text-base font-semibold mb-4 border-b border-gray-600 pb-2">
              Find Us
            </h3>
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="w-full h-36 md:h-42 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15721.162216345647!2d78.09729180298604!3d9.909741280043564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf000a69da3d%3A0x71cbfc857b284ebb!2sMurugan%20Travels!5e0!3m2!1sen!2sin!4v1730793289903!5m2!1sen!2sin"                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Griffin Travels Location"
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-6 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Copyright Madurai Dhaksha Tours and Travels.&nbsp;All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
