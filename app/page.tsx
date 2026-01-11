'use client'
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Layout Components
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// Section Components
import { Hero } from '@/components/sections/Hero';
import { Work } from '@/components/sections/Work';
import { Stack } from '@/components/sections/Stack';
import { Playground } from '@/components/sections/Playground';
import { Thoughts } from '@/components/sections/Thoughts';

export default function Home() {
  const [time, setTime] = useState('');
  const [volumeLevel, setVolumeLevel] = useState(0); // 0: Mute, 1: Low, 2: High
  const [isDarkMode, setIsDarkMode] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio - using a very slow, ambient drone-like track
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (volumeLevel === 0) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = volumeLevel === 1 ? 0.15 : 0.4;
        audioRef.current.play().catch(err => {
          console.warn("Audio playback blocked by browser policy.", err);
          setVolumeLevel(0);
        });
      }
    }
  }, [volumeLevel]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const watTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Africa/Lagos',
      });
      setTime(watTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500 selection:bg-primary/20">
      <Header time={time} />

      <div className="max-w-[700px] mx-auto px-8 pt-8 pb-28 space-y-24">
        <Hero 
          volumeLevel={volumeLevel} 
          setVolumeLevel={setVolumeLevel} 
          isDarkMode={isDarkMode} 
          setIsDarkMode={setIsDarkMode} 
        />  
        
        <Work />
        
        <Playground />
        
        <Thoughts />
        
        <Stack />
      </div>

      <Footer time={time} />

      {/* Bottom Fade Effect */}
      <div className="fixed bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-50" />
    </main>
  );
}