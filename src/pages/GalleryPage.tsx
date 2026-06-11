import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import logoImg from "@assets/image_1780123616191.png";
import projectsConfig from "@/data/projects.json";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

const gallery = projectsConfig.gallery;
const allCategories = ["All", ...Array.from(new Set(gallery.map((g) => g.category)))];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<{ url: string; label: string } | null>(null);

  const filtered =
    activeCategory === "All" ? gallery : gallery.filter((g) => g.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen pt-24 md:pt-[130px]">

      {/* PAGE HERO */}
      <section className="relative h-[35vh] min-h-[280px] flex items-center bg-secondary overflow-hidden">
        <img
          src="/assets/img/gallery/interior/INT Aloor.jpg"
          alt="Gallery"
          className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-secondary/85" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="max-w-3xl"
          >
            <motion.span variants={fadeInUp} className="inline-block text-primary font-bold tracking-widest text-sm mb-4 uppercase">
              OUR WORK
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-serif text-4xl md:text-6xl font-bold leading-tight text-white mb-3">
              Project Gallery
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-white/80 font-sans text-lg max-w-xl">
              Browse through our completed and ongoing projects — residential homes, commercial spaces, and beautiful interiors.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="bg-white border-b border-border/50 sticky top-24 md:top-[130px] z-40 backdrop-blur-md bg-white/95">
        <div className="container mx-auto px-4 md:px-8 py-4 flex flex-wrap gap-2 justify-center">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-secondary text-white shadow-md"
                  : "bg-muted text-secondary hover:bg-primary/20"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
          <span className="ml-auto text-xs text-muted-foreground self-center hidden md:block">
            {filtered.length} photos
          </span>
        </div>
      </section>

      {/* GALLERY FOLDERS — show subsections when "All" or a category */}
      <section className="py-12 bg-white flex-grow">
        <div className="container mx-auto px-4 md:px-8">

          {/* EXTERIOR / EXPERIER SUBSECTION */}
          {(activeCategory === "All" || activeCategory === "Exterior") && (() => {
            const items = gallery.filter(g => g.category === "Exterior");
            return items.length > 0 ? (
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary font-bold tracking-widest text-sm uppercase">Exterior Projects</span>
                  <div className="flex-1 h-px bg-border/50" />
                  <span className="text-xs text-muted-foreground">{items.length} photos</span>
                </div>
                <p className="text-muted-foreground text-sm mb-6">Exterior elevations and site photography from our completed projects.</p>
                <motion.div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4" layout>
                  <AnimatePresence>
                    {items.map((item, i) => (
                      <GalleryItem key={item.id} item={item} i={i} onClick={() => setLightboxImage({ url: item.url, label: item.label })} />
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            ) : null;
          })()}

          {/* 3D DESIGNS SUBSECTION */}
          {(activeCategory === "All" || activeCategory === "3D Designs") && (() => {
            const items = gallery.filter(g => g.category === "3D Designs");
            return items.length > 0 ? (
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary font-bold tracking-widest text-sm uppercase">3D Designs & Ongoing</span>
                  <div className="flex-1 h-px bg-border/50" />
                  <span className="text-xs text-muted-foreground">{items.length} photos</span>
                </div>
                <p className="text-muted-foreground text-sm mb-6">3D renderings and design concepts for our ongoing projects.</p>
                <motion.div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4" layout>
                  <AnimatePresence>
                    {items.map((item, i) => (
                      <GalleryItem key={item.id} item={item} i={i} onClick={() => setLightboxImage({ url: item.url, label: item.label })} />
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            ) : null;
          })()}

          {/* INTERIORS SUBSECTION */}
          {(activeCategory === "All" || activeCategory === "Interiors") && (() => {
            const items = gallery.filter(g => g.category === "Interiors");
            return items.length > 0 ? (
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary font-bold tracking-widest text-sm uppercase">Interiors</span>
                  <div className="flex-1 h-px bg-border/50" />
                  <span className="text-xs text-muted-foreground">{items.length} photos</span>
                </div>
                <p className="text-muted-foreground text-sm mb-6">Interior design and completed spaces from our residential projects.</p>
                <motion.div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4" layout>
                  <AnimatePresence>
                    {items.map((item, i) => (
                      <GalleryItem key={item.id} item={item} i={i} onClick={() => setLightboxImage({ url: item.url, label: item.label })} />
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            ) : null;
          })()}

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-muted-foreground text-lg">No images in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/95 flex flex-col items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-5 right-5 text-white/60 hover:text-white z-10"
            >
              <X size={36} />
            </button>
            <div className="relative inline-flex" onClick={(e) => e.stopPropagation()}>
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={lightboxImage.url}
                alt={lightboxImage.label}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl block"
              />
              <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-black/55 backdrop-blur-sm rounded-lg px-2.5 py-1.5 pointer-events-none">
                <img src={logoImg} alt="Sri Omkar Associates" className="h-5 w-auto object-contain brightness-200 opacity-90" />
                <span className="text-white/85 text-[9px] font-bold tracking-widest uppercase">Sri Omkar Associates</span>
              </div>
            </div>
            <p className="text-white/70 text-sm mt-4 font-medium">{lightboxImage.label}</p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

function GalleryItem({
  item,
  i,
  onClick,
}: {
  item: (typeof projectsConfig.gallery)[0];
  i: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: i * 0.03 }}
      className="break-inside-avoid mb-4 relative group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      onClick={onClick}
    >
      <img
        src={item.url}
        alt={item.label}
        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/50 transition-colors flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center gap-2">
          <ZoomIn className="text-white" size={28} />
          <span className="text-white text-xs font-bold text-center px-3 leading-tight">{item.label}</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
        <span className="text-white text-xs font-medium">{item.label}</span>
        <span className="ml-2 text-primary text-[10px] font-bold uppercase">{item.category}</span>
      </div>
    </motion.div>
  );
}
