'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Gamepad2, Zap, Newspaper, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const categories = ["All Content", "Tech and Economics", "Tech", "Stack", "Market Analysis"];

export function Playground() {
  const [activeCategory, setActiveCategory] = useState("All Content");

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
