'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play, Gamepad2, Zap } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export function Playground() {
  return (
    <motion.section 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="space-y-12"
    >
      <motion.h3 variants={fadeIn} className="text-3xl font-serif italic">Playground</motion.h3>
      
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

        {/* Mini Game / Experiment - 6 cols */}
        <div className="md:col-span-6 group relative overflow-hidden rounded-3xl bg-foreground/[0.03] border border-foreground/5 p-8 h-[300px] flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <Gamepad2 size={32} className="opacity-40 group-hover:text-primary transition-colors" />
            <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold">WIP</div>
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-medium">Retro Runner</h4>
            <p className="text-sm opacity-60">Building a simple 2D platformer to test physics engines in Canvas.</p>
          </div>
        </div>

        {/* Micro Interaction - 6 cols */}
        <div className="md:col-span-6 group relative overflow-hidden rounded-3xl bg-foreground/[0.03] border border-foreground/5 p-8 h-[300px] flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <Zap size={32} className="opacity-40 group-hover:text-yellow-500 transition-colors" />
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-medium">Fluid Text FX</h4>
            <p className="text-sm opacity-60">Experimenting with SVG filters to create liquid-like typography transitions.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
