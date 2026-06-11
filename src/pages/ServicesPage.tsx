import { motion } from "framer-motion";
import { Link } from "wouter";
import { Cuboid, Clipboard, Calculator, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Design & Build",
      desc: "Comprehensive end-to-end solutions. We handle both the architectural design and the physical construction, providing a single point of responsibility that ensures your vision is executed flawlessly and efficiently.",
      img: "https://sriomkarprojects.com/public/assets/img/imagebox/PROJECT-MANAGEMENT.jpg",
      icon: "🏗️"
    },
    {
      id: 2,
      title: "Interior Design",
      desc: "Transforming empty spaces into vibrant, functional environments. Our interior design team crafts bespoke layouts, selects premium materials, and curates aesthetic elements that reflect your personal or brand identity.",
      img: "https://sriomkarprojects.com/public/assets/img/imagebox/INTERIOR-DESIGN.jpg",
      icon: "🛋️"
    },
    {
      id: 3,
      title: "Project Management",
      desc: "Expert oversight from conception to completion. We manage resources, timelines, budgets, and contractors to ensure your project is delivered on schedule, within budget, and to the highest quality standards.",
      img: "https://sriomkarprojects.com/public/assets/img/imagebox/PROJECT%20-MANAGEMENTsss.jpg",
      icon: "📋"
    },
    {
      id: 4,
      title: "Structural Design",
      desc: "The backbone of any enduring building. Our structural engineers utilize advanced software and deep material knowledge to design safe, resilient, and innovative frameworks capable of withstanding the test of time.",
      img: "https://sriomkarprojects.com/public/assets/img/imagebox/STRUCTURAL-DESIGN.jpg",
      icon: "🏢"
    },
    {
      id: 5,
      title: "Renovation & Retrofitting",
      desc: "Breathing new life into aging structures. Whether it's upgrading a heritage home or modernizing a commercial space, we execute renovations with minimal disruption while maximizing structural integrity and value.",
      img: "https://sriomkarprojects.com/public/assets/img/imagebox/OLD-STRUCTURE.jpg",
      icon: "🔨"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 md:pt-[130px]">
      
      {/* PAGE HERO */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center bg-secondary overflow-hidden">
        <img 
          src="https://sriomkarprojects.com/public/assets/img/slider/slider-bg-4.jpg" 
          alt="Our Services" 
          className="absolute inset-0 w-full h-full object-cover grayscale-[30%]" 
        />
        <div className="absolute inset-0 bg-secondary/80"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.span variants={fadeInUp} className="inline-block text-primary font-bold tracking-widest text-sm mb-4 uppercase">
              OUR EXPERTISE
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
              Comprehensive <span className="text-primary">Construction</span> Solutions.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-white/80 font-sans max-w-xl">
              From initial blueprints to the final coat of paint, we offer a full spectrum of engineering and construction services.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary"></div>
              <span className="text-primary font-bold tracking-widest text-sm uppercase">WHAT WE DO</span>
              <div className="w-8 h-0.5 bg-primary"></div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary">
              Excellence in Every Domain
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, i) => (
              <motion.div 
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border/50 group flex flex-col"
              >
                <div className="h-[220px] overflow-hidden relative">
                  <img src={srv.img} alt={srv.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl shadow-sm">
                      {srv.icon}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-secondary">{srv.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {srv.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* 6th Custom Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-secondary rounded-2xl overflow-hidden shadow-lg p-10 flex flex-col items-center justify-center text-center relative group"
            >
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-secondary to-secondary"></div>
              
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-primary mb-6 relative z-10">
                <Cuboid size={40} />
              </div>
              <h3 className="font-serif text-3xl font-bold text-white mb-4 relative z-10">3D Elevation & Planning</h3>
              <p className="text-white/70 mb-8 leading-relaxed relative z-10">
                Visualize your dream space before a single brick is laid with our state-of-the-art 3D modeling and architectural planning services.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-secondary font-bold w-full relative z-10">
                <Link href="/#contact">Get Quote &rarr;</Link>
              </Button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block">HOW WE WORK</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary">
              A Transparent & Seamless Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-muted-foreground/30 -z-10"></div>
            
            {[
              { icon: Clipboard, title: "1. Consultation", desc: "We sit down to understand your vision, requirements, timeline, and budget constraints." },
              { icon: Cuboid, title: "2. Design & Planning", desc: "Our architects draft detailed plans and 3D elevations for your approval." },
              { icon: Calculator, title: "3. Budgeting", desc: "We provide a transparent, itemized estimate with no hidden costs." },
              { icon: HardHat, title: "4. Execution", desc: "Our skilled teams take over, executing the build with precision and regular updates." }
            ].map((step, i) => (
              <div key={i} className="bg-white p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white border-[6px] border-muted flex items-center justify-center text-primary mb-6 shadow-sm relative group hover:border-primary/30 transition-colors">
                  <step.icon size={36} className="group-hover:scale-110 transition-transform" />
                  <div className="absolute -bottom-2 right-0 w-8 h-8 rounded-full bg-secondary text-white font-bold flex items-center justify-center text-sm border-2 border-white">
                    {i+1}
                  </div>
                </div>
                <h3 className="font-bold text-xl text-secondary mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img src="https://sriomkarprojects.com/public/assets/img/slider/slider-bg-3.jpg" alt="CTA Background" className="w-full h-full object-cover grayscale-[20%]" />
          <div className="absolute inset-0 bg-secondary/90 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your <span className="text-primary">Next Project?</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Let our experts provide you with a comprehensive consultation and a transparent quote.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8">
              <a href="/#contact">Contact Us Now &rarr;</a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}