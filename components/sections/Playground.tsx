'use client'
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Gamepad2, Zap, Newspaper, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const sliderVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9
  })
};

const categories = ["All Content", "Tech and Economics", "Tech", "Stack", "Market Analysis"];

const designWorks = [
  { id: 1, title: "Brand Identity Concept", image: "/images/design1.jpeg", category: "Visual Design" },
  { id: 2, title: "Digital Composition", image: "/images/design2.jpeg", category: "Graphic Design" },
  { id: 3, title: "Editorial Layout", image: "/images/design3.jpeg", category: "Design" },
  { id: 4, title: "Visual Narrative", image: "/images/design4.jpeg", category: "Art Direction" },
  { id: 5, title: "Abstract Geometry", image: "/images/design5.jpg", category: "Visuals" },
  { id: 6, title: "Minimalist Poster", image: "/images/design6.jpg", category: "Minimalism" },
  { id: 7, title: "Thematic Study", image: "/images/design7.jpeg", category: "Study" },
  { id: 8, title: "Experimental Type", image: "/images/design8.jpeg", category: "Typography" },
];

export function Playground() {
  const [activeCategory, setActiveCategory] = useState("All Content");
  const [showAllDesigns, setShowAllDesigns] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % designWorks.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + designWorks.length) % designWorks.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showAllDesigns) return;
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') setShowAllDesigns(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showAllDesigns, nextSlide, prevSlide]);

  useEffect(() => {
    if (showAllDesigns) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showAllDesigns]);

  const previewDesigns = designWorks.slice(0, 3);

  return (
    <motion.section 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="space-y-16"
    >
      <div className="space-y-4">
        <motion.h3 variants={fadeIn} className="text-3xl font-serif italic">Playground</motion.h3>
        <p className="text-sm text-foreground/50 max-w-md">A space for experiments, reflections, and technical deep-dives.</p>
      </div>
      
      {/* Experiments Grid */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-30">Experiments</h4>
          <div className="h-px flex-1 bg-foreground/5" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Featured Fun Project - 8 cols on desktop */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-foreground/[0.03] border border-foreground/5 p-8 h-[400px] flex flex-col justify-end">
            <div className="absolute top-8 right-8 w-64 h-64 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-colors" />
            <div className="relative z-10 space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Concept / Fun</span>
              <h4 className="text-2xl font-medium">Bento Grid Symphony</h4>
              <p className="text-sm opacity-60 max-w-sm">An interactive visual experiment transforming grid layouts into a musical interface using React and Web Audio API.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-foreground/5 rounded-full text-[10px] border border-foreground/10">Interactive</span>
                <span className="px-3 py-1 bg-foreground/5 rounded-full text-[10px] border border-foreground/10">Audio API</span>
              </div>
            </div>
          </div>

          {/* V-Log / Video Section - 4 cols */}
          <div className="md:col-span-4 bg-[#1a1a1a] rounded-3xl overflow-hidden group relative h-[400px] flex flex-col justify-center items-center text-center p-6 cursor-pointer">
            <div className="absolute inset-0 opacity-40 group-hover:scale-110 transition-transform duration-700">
              <Image src="/images/work20.png" alt="V-log" fill className="object-cover grayscale" />
              <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Play className="fill-white text-white ml-1" size={24} />
              </div>
              <div>
                <h4 className="font-medium text-white">The Lagos Tech Scene</h4>
                <p className="text-xs text-white/50">V-log #01 • 12:45</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Graphic Design Archive */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-30">Visual Archive</h4>
          <div className="h-px flex-1 bg-foreground/5" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {previewDesigns.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => {
                setDirection(0);
                setCurrentIndex(index);
                setShowAllDesigns(true);
              }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-foreground/[0.03] border border-foreground/5 cursor-pointer"
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-[8px] uppercase tracking-widest text-primary font-bold mb-1">{work.category}</span>
                <h5 className="text-white text-xs font-medium">{work.title}</h5>
              </div>
            </motion.div>
          ))}
          
          <button 
            onClick={() => {
              setDirection(0);
              setCurrentIndex(3);
              setShowAllDesigns(true);
            }}
            className="md:col-start-4 group relative aspect-[4/5] overflow-hidden rounded-2xl bg-foreground/[0.03] border border-dashed border-foreground/10 hover:border-primary/50 transition-colors flex flex-col items-center justify-center gap-2 text-foreground/40 hover:text-primary"
          >
            <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight className="text-current rotate-90" size={16} />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold">View More</span>
          </button>
        </div>

        {/* Gallery Overlay / Slider */}
        <AnimatePresence>
          {showAllDesigns && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl px-4"
            >
              {/* Close Button */}
              <button 
                onClick={() => setShowAllDesigns(false)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors z-[110]"
              >
                <X className="text-white" size={24} />
              </button>

              {/* Navigation Controls */}
              <div className="absolute inset-x-4 md:inset-x-8 top-1/2 -translate-y-1/2 flex justify-between items-center z-[110] pointer-events-none">
                <button 
                  onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all active:scale-95 pointer-events-auto group"
                >
                  <ChevronLeft className="text-white group-hover:-translate-x-1 transition-transform" size={24} />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all active:scale-95 pointer-events-auto group"
                >
                  <ChevronRight className="text-white group-hover:translate-x-1 transition-transform" size={24} />
                </button>
              </div>

              {/* Slider Content */}
              <div className="relative w-full h-full flex flex-col items-center justify-center pt-20 pb-24 overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={sliderVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 35 },
                      opacity: { duration: 0.3 },
                      scale: { duration: 0.4 }
                    }}
                    className="absolute w-full max-w-[320px] md:max-w-[380px] aspect-[1/1.4] overflow-hidden rounded-3xl bg-black border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)]"
                  >
                    <Image
                      src={designWorks[currentIndex].image}
                      alt={designWorks[currentIndex].title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 md:p-10">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-2 block">{designWorks[currentIndex].category}</span>
                        <h4 className="text-2xl md:text-3xl font-serif italic text-white leading-tight">{designWorks[currentIndex].title}</h4>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Indicators */}
                <div className="absolute bottom-8 md:bottom-12 flex gap-3">
                  {designWorks.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setDirection(i > currentIndex ? 1 : -1);
                        setCurrentIndex(i);
                      }}
                      className={`h-1 rounded-full transition-all duration-500 
                        ${i === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Insights / Writing Section */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-30">Insights</h4>
            <div className="h-px flex-1 bg-foreground/5 mr-8" />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-widest font-bold transition-all whitespace-nowrap
                  ${activeCategory === cat ? 'text-primary' : 'opacity-20 hover:opacity-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured Blog Post */}
          <Link href="/blog/post-covid-tech-economy-trap">
            <motion.div 
              variants={fadeIn}
              className="group relative overflow-hidden rounded-3xl bg-foreground/[0.03] border border-foreground/5 p-8 flex flex-col justify-between hover:bg-foreground/[0.05] transition-all duration-500 cursor-pointer h-full"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <Newspaper size={14} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Featured Writing</span>
                </div>
                <h4 className="text-xl font-medium group-hover:text-primary transition-colors">Why Everything Feels Like It Sucks: The Post-COVID Tech-Economy Trap in Nigeria</h4>
                <p className="text-sm opacity-60 line-clamp-4 leading-relaxed">
                  The world keeps spinning, and we’re all trying to keep up. But ask yourself: why does it feel like everything sucks nowadays? Before COVID‑19, life had a rhythm we were comfortable with...
                </p>
              </div>
              
              <div className="mt-8 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-foreground/5 rounded-md text-[9px] border border-foreground/5 text-foreground/40 italic">#NigeriaEconomy</span>
                  <span className="px-2 py-1 bg-foreground/5 rounded-md text-[9px] border border-foreground/5 text-foreground/40 italic">#TechAndEconomics</span>
                </div>
                <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
              </div>
            </motion.div>
          </Link>

          <div className="grid grid-rows-2 gap-6">
            <div className="rounded-3xl bg-foreground/[0.03] border border-foreground/5 p-6 flex flex-col justify-center gap-2 opacity-40 grayscale pointer-events-none italic text-xs text-center">
              New writing coming soon...
            </div>
            <div className="rounded-3xl bg-foreground/[0.03] border border-foreground/5 p-6 flex flex-col justify-center gap-2 opacity-40 grayscale pointer-events-none italic text-xs text-center">
              Exploring the intersection of Stack selection and Business growth.
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
