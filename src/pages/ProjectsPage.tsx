import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, Building2, Users, HardHat, CheckCircle, Star, Play } from "lucide-react";
import logoImg from "@assets/image_1780123616191.png";
import projectsConfig from "@/data/projects.json";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

type Project = (typeof projectsConfig.projects)[0];

const allProjects = projectsConfig.projects;
const featuredProjects = allProjects.filter((p) => p.featured);

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("ALL PROJECTS");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [galleryImage, setGalleryImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");

  const filters = ["ALL PROJECTS", "RESIDENTIAL", "COMMERCIAL", "INDUSTRIAL", "ONGOING"];

  const filteredProjects = allProjects.filter((p) => {
    if (activeFilter === "ALL PROJECTS") return true;
    if (activeFilter === "ONGOING") return p.status === "ongoing";
    return p.category.toUpperCase() === activeFilter;
  });

  const getBadgeColor = (category: string, status: string) => {
    if (status === "ongoing") return "bg-secondary text-white";
    if (category === "residential") return "bg-primary text-secondary";
    if (category === "commercial") return "bg-[#1A1A1A] text-white";
    return "bg-amber-500 text-secondary";
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 md:pt-[130px]">

      {/* PAGE HERO */}
      <section className="relative h-[35vh] min-h-[280px] flex items-center bg-secondary overflow-hidden">
        <img src="/assets/img/projects/aloor-home/Aloor 5.jpg" alt="Our Projects" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/85" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.span variants={fadeInUp} className="inline-block text-primary font-bold tracking-widest text-sm mb-4 uppercase">OUR PORTFOLIO</motion.span>
            <motion.h1 variants={fadeInUp} className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-2 text-white">Building Landmarks.</motion.h1>
            <motion.h1 variants={fadeInUp} className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-4 text-primary">Creating Legacies.</motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-white/80 font-sans max-w-xl">Explore our diverse portfolio across residential, commercial, and industrial constructions.</motion.p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 mb-3">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="text-primary font-bold tracking-widest text-sm uppercase">Featured Projects</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-10">Our Landmark Builds</h2>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-border/40 group flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1" onClick={() => { setSelectedProject(project); setActiveTab("images"); }}>
                <div className="relative h-[260px] overflow-hidden">
                  <img src={project.coverImage} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded shadow-sm ${getBadgeColor(project.category, project.status)}`}>{project.status === "ongoing" ? "Ongoing" : project.category}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded shadow-sm bg-primary/90 text-secondary">★ Featured</span>
                  </div>
                  {project.videos && project.videos.length > 0 && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1"><Play size={10} className="fill-white" /> {project.videos.length} Videos</span>
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-white/90 text-secondary text-xs font-bold px-3 py-1.5 rounded-full">VIEW DETAILS →</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif font-bold text-xl text-secondary mb-2 leading-tight">{project.name}</h3>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-3">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FILTER BAR + ALL PROJECTS */}
      <section className="bg-white flex-grow">
        <div className="border-b border-border/50 sticky top-24 md:top-[130px] z-40 bg-white/95 backdrop-blur-md">
          <div className="container mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {filters.map((filter) => (
                <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all ${activeFilter === filter ? "bg-secondary text-white shadow-md" : "bg-muted text-secondary hover:bg-primary/20 hover:text-secondary"}`}>{filter}</button>
              ))}
            </div>
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{filteredProjects.length} Projects</span>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-8 py-12">
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" layout>
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden border border-border/40 group flex flex-col cursor-pointer transition-shadow" onClick={() => { setSelectedProject(project); setActiveTab("images"); }}>
                  <div className="relative h-[200px] overflow-hidden">
                    <img src={project.coverImage} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm ${getBadgeColor(project.category, project.status)}`}>{project.status === "ongoing" ? "Ongoing" : project.category}</span>
                      {project.featured && <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded bg-primary/90 text-secondary">★</span>}
                    </div>
                    {project.videos && project.videos.length > 0 && (
                      <div className="absolute top-3 right-3">
                        <span className="bg-black/60 text-white text-[9px] font-bold px-1.5 py-1 rounded-full flex items-center gap-0.5"><Play size={8} className="fill-white" /> {project.videos.length}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-serif font-bold text-lg text-secondary mb-1.5 leading-tight">{project.name}</h3>
                    <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-3 pb-3 border-b border-border/50">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{project.location}</span>
                    </div>
                    <p className="text-muted-foreground text-xs line-clamp-2 mb-4 leading-relaxed">{project.description}</p>
                    <div className="mt-auto">
                      <span className="text-primary font-bold text-xs inline-flex items-center group-hover:underline">VIEW DETAILS <span className="ml-1 transition-transform group-hover:translate-x-1">→</span></span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-serif text-muted-foreground">No projects found in this category.</h3>
            </div>
          )}
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-primary/30">
            {[
              { icon: Building2, num: "250+", text: "Projects Completed" },
              { icon: Users, num: "200+", text: "Happy Clients" },
              { icon: HardHat, num: "20+", text: "Years Of Experience" },
              { icon: MapPin, num: "5+", text: "Locations Served" },
              { icon: CheckCircle, num: "100%", text: "Quality Commitment" }
            ].map((stat, i) => (
              <div key={i} className={`flex flex-col items-center text-center px-4 ${i > 1 && i < 4 ? "pt-6 lg:pt-0" : i === 4 ? "pt-6 lg:pt-0 col-span-2 lg:col-span-1" : ""}`}>
                <stat.icon className="w-8 h-8 text-primary mb-3" />
                <span className="font-serif text-3xl font-bold text-primary mb-1">{stat.num}</span>
                <span className="text-xs font-bold text-white uppercase tracking-wider">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT DETAIL MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center bg-secondary/90 backdrop-blur-sm overflow-y-auto">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="bg-white w-full max-w-5xl min-h-screen md:min-h-0 md:rounded-2xl md:my-6 shadow-2xl relative flex flex-col">
              <button onClick={() => setSelectedProject(null)} className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-primary transition-colors">
                <X size={24} />
              </button>
              <div className="flex-grow">
                <div className="h-[300px] md:h-[400px] w-full relative">
                  <img src={selectedProject.coverImage} alt={selectedProject.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 md:left-10 text-white">
                    <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded mb-3 ${getBadgeColor(selectedProject.category, selectedProject.status)}`}>
                      {selectedProject.status === "ongoing" ? "Ongoing" : selectedProject.category}
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold">{selectedProject.name}</h2>
                    <div className="flex items-center gap-2 text-white/80 mt-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{selectedProject.location}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2">
                      <h3 className="font-serif text-2xl font-bold text-secondary mb-4">About The Project</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg mb-10">{selectedProject.description}</p>
                      <div className="flex gap-2 mb-6">
                        <button onClick={() => setActiveTab("images")} className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all ${activeTab === "images" ? "bg-secondary text-white shadow" : "bg-muted text-secondary hover:bg-primary/20"}`}>
                          Photos ({selectedProject.images.length})
                        </button>
                        {selectedProject.videos && selectedProject.videos.length > 0 && (
                          <button onClick={() => setActiveTab("videos")} className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all ${activeTab === "videos" ? "bg-secondary text-white shadow" : "bg-muted text-secondary hover:bg-primary/20"}`}>
                            Videos ({selectedProject.videos.length})
                          </button>
                        )}
                      </div>
                      {activeTab === "images" && (
                        <>
                          <h3 className="font-serif text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                            <div className="w-6 h-0.5 bg-primary" />
                            Project Gallery
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {selectedProject.images.map((img, idx) => (
                              <div key={idx} onClick={() => setGalleryImage(img.url)} className="relative h-48 rounded-xl overflow-hidden cursor-pointer group border border-border/50">
                                <img src={img.url} alt={img.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-secondary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                  <span className="bg-primary text-secondary text-sm font-bold px-4 py-2 rounded-full">View {img.label}</span>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/80 to-transparent">
                                  <span className="text-white text-sm font-medium">{img.label}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                      {activeTab === "videos" && selectedProject.videos && selectedProject.videos.length > 0 && (
                        <>
                          <h3 className="font-serif text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                            <div className="w-6 h-0.5 bg-primary" />
                            Project Videos
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {selectedProject.videos.map((vid, idx) => (
                              <div key={idx} className="rounded-xl overflow-hidden border border-border/50 bg-black">
                                <video controls className="w-full h-48 object-cover" preload="metadata">
                                  <source src={vid.url} type="video/mp4" />
                                  Your browser does not support video playback.
                                </video>
                                <div className="p-3 bg-secondary/5">
                                  <span className="text-secondary text-sm font-medium flex items-center gap-1.5">
                                    <Play size={12} className="text-primary" /> {vid.label}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                    <div className="lg:col-span-1">
                      <div className="bg-muted p-6 rounded-xl border border-border/50">
                        <h4 className="font-serif font-bold text-lg text-secondary mb-4">Interested in a similar project?</h4>
                        <p className="text-sm text-muted-foreground mb-6">Contact us to discuss your requirements and get a free consultation.</p>
                        <div className="flex flex-col gap-3">
                          
                          <a href={"https://wa.me/917204767373?text=Hi%20Sri%20Omkar%20Associates%2C%20I%20am%20interested%20in%20the%20" + encodeURIComponent(selectedProject.name) + "%20project."} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] hover:bg-[#20b858] text-white font-bold h-12 rounded-lg flex items-center justify-center transition-colors">Enquire on WhatsApp</a>
                          <a href="tel:+917204767373" className="w-full border border-primary text-secondary hover:bg-primary hover:text-secondary font-bold h-12 rounded-lg flex items-center justify-center transition-colors">Call Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FULLSCREEN LIGHTBOX */}
      <AnimatePresence>
        {galleryImage && (
          <div className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-4" onClick={() => setGalleryImage(null)}>
            <button onClick={() => setGalleryImage(null)} className="absolute top-6 right-6 z-50 text-white/50 hover:text-white">
              <X size={36} />
            </button>
            <div className="relative inline-flex" onClick={(e) => e.stopPropagation()}>
              <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} src={galleryImage} alt="Gallery Fullscreen" className="max-w-full max-h-[90vh] object-contain rounded-sm block" />
              <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-black/55 backdrop-blur-sm rounded-lg px-2.5 py-1.5 pointer-events-none">
                <img src={logoImg} alt="Sri Omkar Associates" className="h-5 w-auto object-contain brightness-200 opacity-90" />
                <span className="text-white/85 text-[9px] font-bold tracking-widest uppercase">Sri Omkar Associates</span>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}