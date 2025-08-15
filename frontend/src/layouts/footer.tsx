import * as React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer: React.FC = () => {
  const socialIcons = [
    { icon: <Facebook size={21} />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Twitter size={21} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Instagram size={21} />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Linkedin size={21} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Youtube size={21} />, href: "https://youtube.com", label: "YouTube" },
  ];

  const productLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Security", href: "#security" },
  ];

  const companyLinks = [
    { label: "About", href: "#about" },
    { label: "Careers", href: "#careers" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookies Settings", href: "#cookies" },
  ];

  return (
    <footer className="flex flex-col bg-gray-800 text-white">
      {/* Top Section */}
      <div className="flex flex-wrap justify-between px-16 py-12 gap-10 max-md:px-5 max-md:flex-col">
        
        {/* Contact Info */}
        <section className="min-w-[250px] w-[425px]">
          <h3 className="text-xl font-semibold">Address:</h3>
          <address className="text-base underline not-italic">
            Level 1, 12 Sample St, Sydney NSW 2000
          </address>

          <h3 className="mt-5 text-xl font-semibold">Contact:</h3>
          <div className="text-base underline">
            <a href="tel:+911234567890" className="block hover:opacity-80 transition-opacity">
              +91 123 456 7890
            </a>
            <a href="mailto:contact@bidai.in" className="block hover:opacity-80 transition-opacity">
              contact@bidai.in
            </a>
          </div>

          {/* Social Links */}
          <nav className="flex gap-3 mt-6" aria-label="Social media links">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="hover:opacity-80 transition-opacity"
              >
                {item.icon}
              </a>
            ))}
          </nav>
        </section>

        {/* Navigation Links */}
        <nav className="flex gap-10 text-xl font-medium text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold">Product</h3>
            {productLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="mt-4 hover:opacity-80 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold">Company</h3>
            {companyLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="mt-4 hover:opacity-80 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Decorative Icon */}
        <div className="flex items-center justify-center text-gray-400 text-6xl">
          <Linkedin size={100} />
        </div>
      </div>

      {/* Footer Bottom */}
      <section className="px-16 py-6 border-t border-gray-600 max-md:px-5">
        <div className="flex flex-wrap justify-between gap-6 text-sm">
          <p>© 2025 bidai. All rights reserved.</p>
          <nav className="flex gap-6 underline" aria-label="Legal links">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:opacity-80 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </section>
    </footer>
  );
};

export default Footer;