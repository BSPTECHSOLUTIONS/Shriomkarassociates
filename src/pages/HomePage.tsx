import { useEffect, useState } from "react";
import { Link } from "wouter";
import heroImg1 from "@assets/image_1780123526947.png";
import heroImg2 from "@assets/image_1780123530480.png";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { 
  Building2, 
  HardHat, 
  Shield, 
  Handshake, 
  Users, 
  MapPin, 
  PenSquare, 
  Sofa, 
  ClipboardList, 
  Wrench, 
  Clipboard, 
  Calculator, 
  Target, 
  BarChart2, 
  Clock, 
  Key, 
  Phone, 
  Mail, 
  Clock4, 
  ChevronLeft, 
  ChevronRight,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, testimonials } from "@/data/projectsData";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message is too short"),
});

export default function HomePage() {
  // Hero Slider
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on('select', onSelect);
    
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 5000);
    
    return () => {
      clearInterval(autoplay);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Testimonial Slider
  const [testiRef, testApi] = useEmblaCarousel({ loop: true, align: 'start' });

  // Project Filtering
  const [activeFilter, setActiveFilter] = useState("All Projects");
  
  const filteredProjects = activeFilter === "All Projects" 
    ? projects.slice(0, 8) 
    : projects.filter(p => 
        activeFilter === "Ongoing" ? p.status === "ongoing" :
        activeFilter === "Completed" ? p.status === "completed" : true
      ).slice(0, 8);

  // Contact Form
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      projectType: "",
      message: ""
    },
  });

  const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
    console.log(values);
    form.reset();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you! We'll be in touch soon.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 md:pt-[130px]">
      
      {/* HERO SECTION */}
      <section className="relative h-[calc(100vh-104px)] min-h-[600px] w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0" ref={emblaRef}>
          <div className="flex h-full">
            {[heroImg1, heroImg2, heroImg1].map((img, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0 relative h-full">
                <img src={img} alt={`Slide ${i+1}`} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/50 to-transparent w-full md:w-3/4"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-8 relative">
            
            <motion.div 
              className="max-w-2xl text-white pt-10"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="inline-block text-primary font-bold tracking-widest text-xs mb-4 uppercase">
                BUILDING DREAMS.
              </motion.span>
              <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-2">
                Creating Spaces.
              </motion.h1>
              <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl font-bold leading-tight text-primary mb-6">
                Building Trust.
              </motion.h1>
              <motion.div variants={fadeInUp} className="w-16 h-1 bg-primary mb-6"></motion.div>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/90 mb-10 max-w-xl font-sans font-light leading-relaxed">
                We design and construct exceptional spaces that inspire, endure and elevate the way you live.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                  <Link href="/services">OUR SERVICES &rarr;</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary font-bold bg-transparent">
                  <Link href="/projects">VIEW PROJECTS &rarr;</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Badge */}
            <div className="hidden lg:flex absolute top-10 right-10 w-32 h-32 rounded-full border-2 border-primary items-center justify-center bg-secondary/80 backdrop-blur text-center p-4">
              <div className="flex flex-col items-center">
                <div className="flex gap-1 text-primary mb-1">
                  <span className="text-xs">★</span><span className="text-sm -mt-1">★</span><span className="text-xs">★</span>
                </div>
                <span className="text-primary font-bold text-lg leading-none">20+</span>
                <span className="text-[10px] text-white font-medium uppercase tracking-wider mt-1">Years of<br/>Excellence</span>
              </div>
            </div>

          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${i === selectedIndex ? "bg-primary" : "bg-white/40"}`}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="bg-secondary text-white py-6 px-4 hidden md:block border-b-4 border-primary">
        <div className="container mx-auto">
          <div className="flex justify-between items-center divide-x divide-primary/30">
            {[
              { icon: Building2, text: "End-to-End Solutions" },
              { icon: HardHat, text: "Expert Engineers" },
              { icon: Shield, text: "Quality Assurance" },
              { icon: Handshake, text: "On-Time Delivery" },
              { icon: Users, text: "Client-Centric Approach" }
            ].map((item, i) => (
              <div key={i} className="flex-1 flex flex-col items-center justify-center gap-2 px-4 text-center group">
                <item.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left */}
            <motion.div 
              className="lg:w-[35%] flex flex-col items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-primary"></div>
                <span className="text-primary font-bold tracking-widest text-sm uppercase">ABOUT US</span>
              </motion.div>
              
              <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Building A Better Tomorrow, <br/><span className="text-primary">Together.</span>
              </motion.h2>
              
              <motion.p variants={fadeInUp} className="text-muted-foreground mb-8 leading-relaxed">
                Sri Omkar Associates is a premium boutique construction firm based in Kundapur, Karnataka. Since 2007, we have been crafting residential, commercial, and industrial landmarks with an unwavering commitment to quality, structural integrity, and architectural brilliance.
              </motion.p>
              
              <motion.div variants={fadeInUp}>
                <Button asChild className="bg-secondary hover:bg-secondary/90 text-white font-bold mb-12">
                  <Link href="/about">KNOW MORE ABOUT US &rarr;</Link>
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-auto">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-0.5 bg-primary"></div>
                  <span className="text-primary font-bold tracking-widest text-sm uppercase">WE BUILD</span>
                </div>
                <h3 className="font-serif text-3xl font-bold text-foreground">Spaces That Inspire</h3>
              </motion.div>
            </motion.div>

            {/* Right */}
            <div className="lg:w-[65%] flex flex-col gap-10">
              
              {/* Stats Row */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {[
                  { icon: Building2, num: "250+", label: "Projects Completed" },
                  { icon: Users, num: "200+", label: "Happy Clients" },
                  { icon: HardHat, num: "20+", label: "Years of Experience" },
                  { icon: MapPin, num: "5+", label: "Locations Served" }
                ].map((stat, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center text-primary mb-3">
                      <stat.icon className="w-8 h-8" />
                    </div>
                    <span className="font-serif text-3xl font-bold text-secondary mb-1">{stat.num}</span>
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Cards Row — fully responsive */}
              <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {[
                  { title: "Residential Buildings", img: "/assets/img/projects/saligrama.jpg" },
                  { title: "Commercial Spaces", img: "/assets/img/projects/Ampar.jpeg" },
                  { title: "Industrial Structures", img: "/assets/img/ongoing/Resort_3D_v_01.jpg" },
                  { title: "Renovation & Remodeling", img: "/assets/img/interior/interior-1.jpg" }
                ].map((card, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp}
                    className="relative rounded-xl overflow-hidden group cursor-pointer"
                    style={{ aspectRatio: "3/4" }}
                  >
                    <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <h4 className="text-white font-bold text-sm md:text-base leading-snug">
                        {card.title}
                      </h4>
                      <span className="text-primary text-sm font-bold opacity-0 transition-all duration-300 group-hover:opacity-100 inline-block mt-1">&rarr;</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary"></div>
              <span className="text-primary font-bold tracking-widest text-sm uppercase">OUR SERVICES</span>
              <div className="w-8 h-0.5 bg-primary"></div>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Comprehensive Solutions for Every Project
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: PenSquare, title: "Design & Build", desc: "End-to-end design and construction solutions tailored to your needs." },
              { icon: Sofa, title: "Interior Design", desc: "Beautiful, functional interior spaces that reflect your style." },
              { icon: ClipboardList, title: "Project Management", desc: "Efficient planning, execution & monitoring for timely delivery." },
              { icon: Building2, title: "Structural Design", desc: "Safe, durable and innovative structural engineering solutions." },
              { icon: Wrench, title: "Renovation", desc: "Upgrading old structures with modern solutions while preserving value." }
            ].map((srv, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="bg-white rounded-xl border border-border/50 p-8 text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl group"
              >
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <srv.icon className="w-8 h-8 text-secondary group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-3 text-secondary">{srv.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{srv.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white font-bold px-8">
              <Link href="/services">VIEW ALL SERVICES &rarr;</Link>
            </Button>
          </div>

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          
          <motion.div 
            className="flex flex-col items-center text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="text-primary font-bold tracking-widest text-sm uppercase mb-3">OUR PROJECTS</motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-10">
              Building Landmarks. Creating Legacies.
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
              {["All Projects", "Ongoing", "Completed"].map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeFilter === filter ? "bg-secondary text-white" : "bg-muted text-secondary hover:bg-primary hover:text-secondary"}`}
                >
                  {filter}
                </button>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            initial="hidden"
            animate="visible"
            key={activeFilter}
            variants={staggerContainer}
          >
            {filteredProjects.map((project, i) => (
              <motion.div 
                key={project.id} 
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-border/40 group flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={project.coverImage} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-secondary leading-tight">{project.name}</h3>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${project.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>{project.location}</span>
                  </div>
                  <div className="mt-auto">
                    <Link href="/projects" className="text-primary font-bold text-sm inline-flex items-center group-hover:underline">
                      VIEW DETAILS <span className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-secondary font-bold px-8">
              <Link href="/projects">VIEW ALL PROJECTS &rarr;</Link>
            </Button>
          </div>

        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="flex flex-col lg:flex-row bg-secondary overflow-hidden">
        <div className="lg:w-[60%] p-12 md:p-24 flex flex-col justify-center text-white">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-3">OUR PROCESS</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16">
            From Concept to Creation
          </h2>
          
          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-4 mb-16">
            <div className="hidden md:block absolute top-10 left-10 right-10 h-0.5 border-t border-dashed border-primary/50 -z-10"></div>
            
            {[
              { icon: Clipboard, title: "Client Inputs", step: "01" },
              { icon: Handshake, title: "Client Meeting", step: "02" },
              { icon: Calculator, title: "Budgeting", step: "03" },
              { icon: HardHat, title: "Project Takeoff", step: "04" }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative bg-secondary md:px-2">
                <div className="w-20 h-20 rounded-full bg-secondary border-2 border-primary flex items-center justify-center text-primary mb-4 relative shadow-[0_0_15px_rgba(200,150,46,0.2)]">
                  <step.icon className="w-8 h-8" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-secondary font-bold flex items-center justify-center text-sm border-4 border-secondary">
                    {step.step}
                  </div>
                </div>
                <h4 className="font-bold text-lg">{step.title}</h4>
              </div>
            ))}
          </div>

          <div>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-secondary font-bold bg-transparent">
              <Link href="/about">EXPLORE OUR PROCESS &rarr;</Link>
            </Button>
          </div>
        </div>
        
        <div className="lg:w-[40%] h-[400px] lg:h-auto relative">
          <img src="/assets/img/slider/slider-bg-3.jpg" alt="Construction Process" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/30"></div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <motion.div 
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block">WHY CHOOSE US?</motion.span>
              <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12 leading-tight">
                Committed to Quality. <br/>Driven by Trust.
              </motion.h2>
              
              <div className="space-y-8">
                {[
                  { icon: Target, title: "Our Mission", desc: "To deliver excellence in construction with uncompromising quality." },
                  { icon: BarChart2, title: "Best Quality", desc: "Using premium materials and advanced structural engineering." },
                  { icon: Clock, title: "On Time", desc: "Rigorous project management ensuring timely delivery." },
                  { icon: Key, title: "Experienced Team", desc: "Skilled professionals with deep industry expertise." }
                ].map((feature, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-secondary mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="bg-muted p-8 rounded-2xl mb-8 flex flex-col sm:flex-row justify-between gap-6 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border/50">
                {[
                  { icon: Building2, num: "100+", text: "Projects Done" },
                  { icon: Users, num: "150+", text: "Happy Customers" },
                  { icon: HardHat, num: "180+", text: "Hard Workers" }
                ].map((stat, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center text-center pt-6 sm:pt-0">
                    <stat.icon className="w-6 h-6 text-muted-foreground mb-2" />
                    <span className="font-serif text-4xl font-bold text-primary mb-1">{stat.num}</span>
                    <span className="text-sm font-bold uppercase text-secondary tracking-wide">{stat.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-xl group">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="/assets/img/interior/interior-1.jpg"
                  preload="metadata"
                >
                  <source src="/assets/img/projects/aloor-home/Aloor Vid.mp4" type="video/mp4" />
                  Your browser does not support video.
                </video>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center mb-16 relative">
            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block">TESTIMONIALS</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              What Our Clients Say
            </h2>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-0 hidden lg:flex gap-2">
              <button className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors" onClick={() => testApi?.scrollPrev()}>
                <ChevronLeft />
              </button>
              <button className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center hover:bg-primary/90 transition-colors" onClick={() => testApi?.scrollNext()}>
                <ChevronRight />
              </button>
            </div>
          </div>

          <div className="overflow-hidden" ref={testiRef}>
            <div className="flex -ml-4">
              {testimonials.map((test, i) => (
                <div key={i} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 min-w-0">
                  <div className="bg-white rounded-2xl p-8 shadow-sm h-full flex flex-col border border-border/30">
                    <div className="flex text-primary mb-6 text-lg">
                      ★★★★★
                    </div>
                    <p className="font-serif italic text-muted-foreground mb-8 text-lg leading-relaxed flex-grow">
                      "{test.text}"
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-14 h-14 rounded-full bg-secondary text-primary flex items-center justify-center font-bold text-lg border-2 border-primary/20">
                        {test.initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-secondary">{test.name}</h4>
                        <span className="text-sm text-muted-foreground">{test.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img src="/assets/img/slider/slider-bg-4.jpg" alt="CTA Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/90 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Your <span className="text-primary">Dream Project Together</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Reach out to us today to discuss your vision. Our experts are ready to turn your ideas into reality.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8">
              <a href="#contact">Contact Now &rarr;</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary font-bold bg-transparent px-8">
              <a href="#contact">Request Quote</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left */}
            <div className="lg:w-1/2 flex flex-col">
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-3 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-primary"></span> CONTACT US
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-10">
                Let's Start Your Project Today
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0 text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground font-bold uppercase tracking-wider block mb-1">Call Us</span>
                    <a href="tel:+917204767373" className="font-bold text-secondary hover:text-primary transition-colors block">+91 7204767373</a>
                    <a href="tel:+919448154181" className="font-bold text-secondary hover:text-primary transition-colors block">+91 9448154181</a>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0 text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground font-bold uppercase tracking-wider block mb-1">Email Us</span>
                    <a href="mailto:omkarkoteshwara@gmail.com" className="font-bold text-secondary hover:text-primary transition-colors text-sm md:text-base break-all">omkarkoteshwara@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground font-bold uppercase tracking-wider block mb-1">Location</span>
                    <span className="font-bold text-secondary">Main Road, Koteshwara<br/>Kundapura, Udupi</span>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0 text-primary">
                    <Clock4 size={20} />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground font-bold uppercase tracking-wider block mb-1">Working Hours</span>
                    <span className="font-bold text-secondary">Mon - Sat: 9AM - 6PM<br/>Sunday: Closed</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full h-[250px] rounded-2xl overflow-hidden shadow-lg border border-border/50">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.4167!2d74.6876!3d13.6362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM4JzEwLjMiTiA3NMKwNDEnMTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
            
            {/* Right Form */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-3xl shadow-xl border border-border/40 p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
                <h3 className="font-serif font-bold text-3xl text-secondary mb-8">Send Us a Message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Full Name" className="h-14 bg-muted/50 border-border/50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Phone Number" className="h-14 bg-muted/50 border-border/50" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Email Address" type="email" className="h-14 bg-muted/50 border-border/50" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-14 bg-muted/50 border-border/50">
                                <SelectValue placeholder="Select Project Type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="residential">Residential</SelectItem>
                              <SelectItem value="commercial">Commercial</SelectItem>
                              <SelectItem value="industrial">Industrial</SelectItem>
                              <SelectItem value="renovation">Renovation & Remodeling</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project..." 
                              className="min-h-[150px] resize-none bg-muted/50 border-border/50" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" size="lg" className="w-full h-14 text-base font-bold bg-primary hover:bg-primary/90 text-secondary">
                      Send Message &rarr;
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}