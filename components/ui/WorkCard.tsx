'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface WorkCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
}

export function WorkCard({ image, title, description, tags, href = "#" }: WorkCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movements
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spotlight = useTransform(
    [springX, springY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 40%)`
  );

  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variants={{
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      className="group cursor-pointer space-y-4 relative transition-all duration-500 group-hover/work-list:opacity-40 hover:!opacity-100 hover:!grayscale-0 group-hover/work-list:grayscale-[0.5] block"
    >
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-foreground/5 border border-foreground/5 shadow-2xl shadow-black/20">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Light Reflection / Spotlight Effect */}
        <motion.div 
          className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{ background: spotlight }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 z-20">
          <div className="flex gap-2 mb-2">
            {tags.map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/10">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-white text-xs opacity-80 line-clamp-2">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between px-2">
        <h4 className="font-medium group-hover:text-primary transition-colors">{title}</h4>
        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-all transform translate-y-1 group-hover:translate-y-0" />
      </div>
    </motion.a>
  );
}
