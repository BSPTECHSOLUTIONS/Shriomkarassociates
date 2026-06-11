import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed z-50 flex flex-col gap-4 bottom-6 right-6">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/917204767373?text=Hi%20Sri%20Omkar%20Associates%2C%20I%20am%20interested%20in%20your%20services." 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-50 animate-ping"></span>
        <FaWhatsapp size={28} className="relative z-10" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-black/80 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us!
        </span>
      </a>

      {/* Call Button */}
      <a 
        href="tel:+917204767373" 
        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative group"
        aria-label="Call Us"
      >
        <Phone size={24} className="fill-white" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-black/80 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Now
        </span>
      </a>
    </div>
  );
}