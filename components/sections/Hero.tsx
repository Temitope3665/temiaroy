'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { VolumeX, Volume1, Volume2, Moon, Sun, Layout, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { SocialLink } from '../ui/SocialLink';

interface HeroProps {
  volumeLevel: number;
  setVolumeLevel: (val: number | ((prev: number) => number)) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Hero({ volumeLevel, setVolumeLevel, isDarkMode, setIsDarkMode }: HeroProps) {
  return (
    <motion.section 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={stagger}
      className="space-y-6"
    >
      {/* Profile Header */}
      <motion.div variants={fadeIn} className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-foreground/10">
            <Image 
              src="/images/profile3.jpg" 
              alt="Temitope Aroyewon" 
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-serif italic leading-none">Temitope Aroyewon</h2>
            <p className="text-sm opacity-60">Frontend Engineer</p>
          </div>
        </div>

        <div className="flex items-center gap-2 p-1 rounded-full bg-foreground/5 border border-foreground/5">
          <button 
            onClick={() => setVolumeLevel((prev) => (prev + 1) % 3)}
            className="p-2 rounded-full hover:bg-foreground/10 transition-colors relative"
            title={volumeLevel === 0 ? "Unmute" : volumeLevel === 1 ? "Boost Volume" : "Mute"}
          >
            {volumeLevel === 0 && <VolumeX size={16} />}
            {volumeLevel === 1 && <Volume1 size={16} />}
            {volumeLevel === 2 && <Volume2 size={16} />}
            {volumeLevel > 0 && (
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            )}
          </button>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
            title="Toggle Theme"
          >
            {isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>
      </motion.div>

      {/* Bio Text */}
      <motion.div variants={fadeIn} className="space-y-6 text-base leading-relaxed text-foreground/70">
        <p>I&apos;m a frontend engineer based in Lagos, Nigeria.</p>
        <p>
          I enjoy building thoughtful user interfaces for complex products across fintech, telecom, and Web3. 
          I care deeply about craft — the kind you notice when it&apos;s done right, and miss when it&apos;s not.
        </p>
        <p>
          Currently, I contract for <span className="font-bold underline decoration-2 underline-offset-4 text-foreground/90">MTN Nigeria</span> as a frontend engineer, 
          building and maintaining large-scale internal platforms and customer-facing applications.
        </p>
        <p>
          My background in design and engineering helps me bridge aesthetics with technical rigor — delivering polished products that are robust, intuitive, and delightful to use. I’m passionate about pushing the boundaries of frontend tech, exploring decentralized systems, and building tools that help teams and users succeed.
        </p>
        <p>
          Previously, I worked at <span className="font-bold text-foreground/90">Enyata</span>, where I contributed to enterprise software projects, including a learning management system.
        </p>
      </motion.div>

      {/* Social Links */}
      <motion.div variants={fadeIn} className="flex flex-wrap gap-3">
        <SocialLink icon={<Layout size={16} />} label="Contra" href="#" />
        <SocialLink icon={<Twitter size={16} />} label="Twitter" href="https://x.com/aroyewon" />
        <SocialLink icon={<Linkedin size={16} />} label="LinkedIn" href="https://linkedin.com/in/aroyewon-temitope" />
        <SocialLink icon={<Github size={16} />} label="GitHub" href="https://github.com/temitope3665" />
        <SocialLink icon={<Mail size={16} />} label="Mail" href="mailto:aroyewontope@gmail.com" />
      </motion.div>
    </motion.section>
  );
}
