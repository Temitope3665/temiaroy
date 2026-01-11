'use client'
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Home, ArrowLeft, VolumeX, Volume1, Volume2, Moon, Sun } from 'lucide-react';

export default function WritingPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Initialize audio locally for this page
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0;

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }

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
        audioRef.current.play().catch(() => setVolumeLevel(0));
      }
    }
  }, [volumeLevel]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const article = {
    title: "Why Everything Feels Like It Sucks: The Post-COVID Tech-Economy Trap in Nigeria",
    date: "January 11, 2026",
    tags: ["#NigeriaEconomy", "#TechAndEconomics", "#DigitalTransformation"],
    content: `
      <p>The world keeps spinning, and we’re all trying to keep up. But ask yourself: why does it feel like everything sucks nowadays?</p>
      
      <p>Before COVID‑19, life had a rhythm we were comfortable with. Startups, big corporations, and even government offices measured productivity mostly by outputs or visible effort—the number of tasks completed, reports submitted, or hours spent in meetings. Most people still came to work daily, and the digital revolution, though brewing, hadn’t fully touched everyday life. AI was a buzzword, POS systems were limited, and cash was king. Commodities felt relatively affordable, and technology hadn’t yet reshaped our daily habits.</p>
      
      <p>Then COVID‑19 hit. Overnight, it disrupted the status quo. Work, education, business, and social life all had to adapt. Remote work became normal, digital payments gained traction, and even traditional banks began leveraging POS systems to reduce queues and improve efficiency. Suddenly, technology wasn’t optional—it was essential. Businesses and individuals alike embraced digital solutions, not because they wanted to, but because the circumstances demanded it.</p>
      
      <p>This shift brought convenience, efficiency, and what many call “soft life.” But every new solution comes with a hidden cost. As Nigeria embraced fintech, e-commerce, and online education, we began asking ourselves: Why do prices keep rising? Why does life still feel expensive?</p>
      
      <p>The answer lies in the economic dynamics behind technology adoption.</p>
      
      <p>When businesses upgrade from crude methods to advanced tools—POS, cloud platforms, analytics software, automation—production becomes more efficient, but the cost of these inputs rises. New technologies increase operational costs initially, and these costs are often passed to consumers. More businesses enter the market, competition grows, and the demand for technology rises further, creating a cycle of rising costs despite technological progress.</p>
      
      <p>Meanwhile, incomes in Nigeria have not grown at the same pace. Your salary or allowance meets these rising costs and feels swallowed up. Combine this with inflation, FX fluctuations, and supply chain issues, and it’s easy to see why frustration is mounting.</p>
      
      <p>In sectors like education, digital tools improved access to learning but also created new costs—online learning platforms, devices, data subscriptions. In business, tools like e-commerce platforms and digital marketing make growth possible but add operational expenses. Even in telecom and fintech, innovation drives efficiency yet raises user costs indirectly.</p>
      
      <p>Technology doesn’t make life more expensive by itself—it amplifies existing economic pressures. But awareness and strategic planning can soften the impact. Policies, smarter consumer choices, and innovative approaches to productivity can help balance the scales.</p>
      
      <p>So yes, everything feels like it sucks. But by understanding the interplay between technology and economics, especially in Nigeria, we can start finding solutions instead of just complaining.</p>
    `
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 transition-colors duration-500 pb-32 overflow-x-hidden">
      {/* Dynamic Navigation Bar */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2 p-1 rounded-2xl bg-foreground/5 border border-foreground/10 backdrop-blur-xl shadow-2xl shadow-black/20">
        <div className="flex items-center gap-1 pr-2 border-r border-foreground/10">
          <Link 
            href="/"
            className="p-2.5 rounded-xl hover:bg-foreground/10 transition-colors"
            title="Home"
          >
            <Home size={18} />
          </Link>
          <button 
            onClick={() => router.back()}
            className="p-2.5 rounded-xl hover:bg-foreground/10 transition-colors"
            title="Go Back"
          >
            <ArrowLeft size={18} />
          </button>
        </div>

        <div className="flex items-center gap-1 pl-1">
          <button 
            onClick={() => setVolumeLevel((prev) => (prev + 1) % 3)}
            className="p-2.5 rounded-xl hover:bg-foreground/10 transition-colors relative"
            title="Ambient Sound"
          >
            {volumeLevel === 0 && <VolumeX size={18} />}
            {volumeLevel === 1 && <Volume1 size={18} />}
            {volumeLevel === 2 && <Volume2 size={18} />}
          </button>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2.5 rounded-xl hover:bg-foreground/10 transition-colors"
            title="Toggle Theme"
          >
            {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </nav>

      {/* Article Grid Layout */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[700px] mx-auto px-8 pt-40 space-y-12"
      >
        <header className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {article.tags.map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-primary italic">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-serif italic leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-xs opacity-40 uppercase tracking-widest font-bold">
            <span>{article.date}</span>
            <span className="h-1 w-1 rounded-full bg-foreground/20" />
            <span>10 min read</span>
          </div>
        </header>

        <article className="prose prose-invert prose-neutral max-w-none">
          <div 
            className="text-base leading-relaxed text-foreground/80 space-y-8 font-light"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        <footer className="pt-16 border-t border-foreground/5 space-y-8">
          <div className="p-8 rounded-3xl bg-foreground/[0.03] border border-foreground/5 text-center space-y-4">
            <h3 className="text-xl font-medium">Let&apos;s open the conversation</h3>
            <p className="text-sm opacity-60 max-w-md mx-auto">
              What precautionary measures can individuals, businesses, and policymakers take to keep life affordable while embracing technological progress?
            </p>
            <div className="pt-4">
              <a 
                href="https://x.com/aroyewon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-bold hover:scale-105 transition-transform dark:text-[#000]"
              >
                Join the discussion on X
              </a>
            </div>
          </div>
        </footer>
      </motion.div>

      {/* Subtle Progress Bar */}
      <motion.div 
        className="fixed bottom-0 left-0 right-0 h-1 bg-primary origin-left z-[110]"
        style={{ scaleX }}
      />
    </main>
  );
}
