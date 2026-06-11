import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { Mail, Phone, MapPin, Menu, X } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/image_1780123616191.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location === "/") {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      setLocation("/");
      setTimeout(() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, [location, setLocation]);

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "PROJECTS", href: "/projects" },
    { label: "GALLERY", href: "/gallery" },
    { label: "CONTACT US", href: "/#contact", isContact: true },
  ];

  const isContactActive = location === "/" && (typeof window !== "undefined" && window.location.hash === "#contact");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Info Bar */}
      <div className="bg-secondary text-white/80 py-2 px-4 md:px-8 text-xs hidden md:flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <a href="mailto:omkarkoteshwara@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-3 h-3 text-primary" /> omkarkoteshwara@gmail.com
          </a>
          <a href="tel:+917204767373" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-3 h-3 text-primary" /> +91 7204767373
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-3 h-3 text-primary" /> Kundapur, Karnataka
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-white/60">Follow Us:</span>
          <div className="flex gap-3 text-white">
            <a href="#" className="hover:text-primary transition-colors"><FaFacebook size={14} /></a>
            <a href="#" className="hover:text-primary transition-colors"><FaInstagram size={14} /></a>
            <a href="#" className="hover:text-primary transition-colors"><FaLinkedin size={14} /></a>
            <a href="#" className="hover:text-primary transition-colors"><FaYoutube size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? "shadow-lg py-2" : "py-3 shadow-sm"} px-4 md:px-10 flex justify-between items-center`}>
        {/* Logo — bigger */}
        <Link href="/" className="flex items-center shrink-0">
          <img src={logoImg} alt="Sri Omkar Associates" className="h-[72px] w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 font-sans text-sm font-semibold">
          {navLinks.map((link) => {
            const isActive = link.isContact
              ? isContactActive
              : (location === link.href || (link.href !== "/" && location.startsWith(link.href)));
            return (
              <div key={link.label} className="relative group py-2">
                {link.isContact ? (
                  <a
                    href="/#contact"
                    onClick={scrollToContact}
                    className={`transition-colors cursor-pointer ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className={`transition-colors ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`}
                  >
                    {link.label}
                  </Link>
                )}
                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full opacity-40" />
              </div>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            onClick={scrollToContact}
            className="bg-primary text-secondary hover:bg-primary/90 font-bold px-6 shadow-md"
          >
            GET A QUOTE &rarr;
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-foreground p-2" onClick={() => setMobileMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity lg:hidden ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 bg-white shadow-xl transition-transform duration-300 transform ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 flex justify-between items-center border-b border-border">
            <img src={logoImg} alt="Sri Omkar Associates" className="h-12 w-auto object-contain" />
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-foreground">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col p-5 gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.isContact ? (
                  <a
                    href="/#contact"
                    onClick={scrollToContact}
                    className="text-base font-semibold text-foreground block py-3 border-b border-border/40 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-base font-semibold text-foreground block py-3 border-b border-border/40 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Button
              onClick={scrollToContact}
              className="bg-primary text-secondary font-bold mt-6 w-full h-12"
            >
              GET A QUOTE &rarr;
            </Button>

            <div className="mt-8 flex gap-4 text-secondary justify-center">
              <a href="#" className="hover:text-primary transition-colors"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><FaLinkedin size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><FaYoutube size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
