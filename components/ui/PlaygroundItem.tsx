'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface PlaygroundItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  tags: string[];
  image?: string;
  isFeatured?: boolean;
}

export const PlaygroundItem: React.FC<PlaygroundItemProps> = ({ title, description, icon, href, tags, image, isFeatured = false }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
      }}
      className={`relative flex flex-col p-6 rounded-xl border border-foreground/5 bg-foreground/5 hover:bg-foreground/10 transition-colors duration-300 group ${isFeatured ? 'col-span-full md:col-span-2' : ''}`}
    >
      {image && (
        <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
          <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
      )}
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <h4 className="text-lg font-semibold">{title}</h4>
        <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-foreground/60" />
      </div>
      <p className="text-sm text-foreground/70 mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs px-2 py-1 rounded-full bg-foreground/10 text-foreground/80">
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
};
