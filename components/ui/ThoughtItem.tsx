'use client'
import { motion } from 'framer-motion';

interface ThoughtItemProps {
  title: string;
  date: string;
  readTime: string;
  href?: string;
}

export function ThoughtItem({ title, date, readTime, href = "#" }: ThoughtItemProps) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variants={{
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 }
      }}
      whileHover={{ x: 10 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="py-4 border-b border-foreground/5 cursor-pointer group/item block
                 transition-[color,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                 group-hover/list:text-foreground/20 hover:!text-foreground"
    >
      <h4 className="text-base font-medium mb-2 transition-colors duration-500">{title}</h4>
      <div className="flex items-center gap-2 text-xs transition-colors duration-500 opacity-40 group-hover/item:opacity-60">
        <span>{date}</span>
        <span className="text-[6px]">•</span>
        <span>{readTime}</span>
      </div>
    </motion.a>
  );
}
