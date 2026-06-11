import { motion } from "framer-motion";
import { Link } from "wouter";
import { Building2, Users, HardHat, MapPin, Target, Eye, Gem } from "lucide-react";
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

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 md:pt-[130px]">
      
      {/* PAGE HERO */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center bg-secondary overflow-hidden">
        <img 
          src="https://sriomkarprojects.com/public/assets/img/slider/slider-bg-4.jpg" 
          alt="About Us" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-secondary/80"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.span variants={fadeInUp} className="inline-block text-primary font-bold tracking-widest text-sm mb-4 uppercase">
              ABOUT US
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
              Building A Better Tomorrow, <span className="text-primary">Together.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-white/80 font-sans max-w-xl">
              We are a premier construction and engineering firm dedicated to transforming visions into enduring realities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* HISTORY SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://sriomkarprojects.com/public/assets/img/projects/saligrama.jpg" alt="Our Work" className="w-full h-auto object-cover" />
                <div className="absolute bottom-0 left-0 bg-primary text-secondary p-6 md:p-8 w-3/4 md:w-2/3 rounded-tr-3xl">
                  <span className="font-serif text-5xl font-bold block mb-1">15+</span>
                  <span className="font-bold text-sm uppercase tracking-wider">Years of Craftsmanship</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-primary"></div>
                <span className="text-primary font-bold tracking-widest text-sm uppercase">OUR STORY</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-5xl font-bold text-secondary mb-8">
                A Legacy Built on Trust and Excellence
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Established in 2007, Sri Omkar Associates began with a simple yet profound vision: to elevate the standard of construction in Karnataka by marrying uncompromising quality with innovative structural design.
                </p>
                <p>
                  What started as a modest engineering firm in Kundapur has grown into a trusted name synonymous with reliability, transparency, and superior craftsmanship. Over the past 15+ years, we have successfully delivered hundreds of residential homes, commercial complexes, and industrial structures.
                </p>
                <p>
                  Our journey is defined by the enduring relationships we've built with our clients. We believe that every brick laid is a testament to our client's dreams, and we approach every project—regardless of scale—with the same meticulous attention to detail.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary"></div>
              <span className="text-primary font-bold tracking-widest text-sm uppercase">CORE VALUES</span>
              <div className="w-8 h-0.5 bg-primary"></div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", desc: "To deliver high-quality, cost-effective projects on schedule by employing and supporting motivated, flexible, and focused teams. We value the importance of our relationships and will continue to remain fair and true in our dealings." },
              { icon: Eye, title: "Our Vision", desc: "To be the preferred contractor of choice recognized for building lasting relationships, fostering innovation, and delivering extraordinary structural solutions that stand the test of time." },
              { icon: Gem, title: "Our Core Values", desc: "Integrity, innovation, and an uncompromising commitment to quality. We believe in absolute transparency with our clients, empowering our workforce, and adopting sustainable building practices." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-secondary mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTER BAR */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary/20">
            {[
              { icon: Building2, num: "250+", label: "Projects Completed" },
              { icon: Users, num: "200+", label: "Happy Clients" },
              { icon: HardHat, num: "20+", label: "Years Experience" },
              { icon: MapPin, num: "5+", label: "Locations Served" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center px-4">
                <stat.icon className="w-10 h-10 text-primary mb-4" />
                <span className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">{stat.num}</span>
                <span className="text-sm md:text-base font-medium text-white/70 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION (Placeholder) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block">OUR LEADERSHIP</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-8">
            Expertise You Can Trust
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Led by experienced engineers and structural experts, our team brings decades of combined industry knowledge to every site. From master planning to interior finishing, our professionals are dedicated to excellence at every phase of construction.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-secondary font-bold">
            <Link href="/projects">VIEW OUR WORK &rarr;</Link>
          </Button>
        </div>
      </section>

      {/* RE-USE CTA BANNER */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img src="https://sriomkarprojects.com/public/assets/img/slider/slider-bg-4.jpg" alt="CTA Background" className="w-full h-full object-cover" />
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
              <a href="/#contact">Contact Now &rarr;</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary font-bold bg-transparent px-8">
              <a href="/#contact">Request Quote</a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}