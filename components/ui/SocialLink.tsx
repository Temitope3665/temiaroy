'use client'
import { motion } from 'framer-motion';

interface SocialLinkProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

export function SocialLink({ icon, label, href }: SocialLinkProps) {
  return (
    <a 
      href={href}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/[0.03] border border-foreground/5 hover:bg-foreground/10 hover:border-foreground/10 transition-all duration-300 group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="opacity-60 group-hover:opacity-100 transition-opacity">{icon}</span>
      <span className="text-sm font-medium opacity-80 group-hover:opacity-100">{label}</span>
    </a>
  );
}
