import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "wouter";
import { Button } from "./ui/button";
import logoImg from "@assets/image_1780123616191.png";

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16">
      <div className="container mx-auto px-4 md:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center">
              <img src={logoImg} alt="Sri Omkar Associates" className="h-16 w-auto object-contain rounded-xl" />
            </Link>
            
            <p className="text-white/70 text-sm leading-relaxed">
              We have over 15 years of experience and are available to help you 24 hours a day. Building landmarks and creating legacies across Karnataka since 2007.
            </p>
            
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Contact */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 text-white/70 items-start">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">Main Road, Koteshwara<br />Kundapura, Udupi District<br />Karnataka 576222</span>
              </li>
              <li className="flex gap-3 text-white/70 items-center">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">+91 7204767373<br />+91 9448154181</span>
              </li>
              <li className="flex gap-3 text-white/70 items-center">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm break-all">omkarkoteshwara@gmail.com</span>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Sectors */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6 relative inline-block">
              Sectors Served
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            
            <ul className="grid grid-cols-2 gap-x-2 gap-y-3">
              {['Residential', 'Commercial', 'Transportation', 'Warehouses', 'Showrooms', 'Shopping Malls', 'Real Estate', 'Tourism'].map((sector) => (
                <li key={sector} className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  {sector}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Links & CTA */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            
            <ul className="flex flex-col gap-2 mb-6">
              <li><Link href="/" className="text-white/70 hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-primary transition-colors text-sm">Services</Link></li>
              <li><Link href="/projects" className="text-white/70 hover:text-primary transition-colors text-sm">Projects</Link></li>
            </ul>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="font-serif italic text-white/90 mb-4">Let's build something great together.</p>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                <a href="/#contact">GET A QUOTE &rarr;</a>
              </Button>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-[#08121f] border-t border-primary/30 py-6">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Sri Omkar Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}