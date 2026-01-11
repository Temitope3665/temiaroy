'use client'
import { motion } from 'framer-motion';
import { ThoughtItem } from '../ui/ThoughtItem';

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

export function Thoughts() {
  return (
    <motion.section 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={stagger}
      className="space-y-8"
    >
      <div className="flex items-center justify-between">
        <motion.h3 variants={fadeIn} className="text-3xl font-serif italic">Thoughts</motion.h3>
        <motion.a 
          variants={fadeIn}
          href="https://medium.com/@aroyewontope" 
          className="text-[10px] tracking-[0.2em] uppercase font-bold opacity-30 hover:opacity-100 transition-opacity"
        >
          View All
        </motion.a>
      </div>
      
      <div className="space-y-0 group/list">
        <ThoughtItem 
          title="Rusts Unique Memory System: Understanding Ownership and Borrowing" 
          date="Jul 18, 2025" 
          readTime="5 min read"
          href="https://medium.com/@aroyewontope/rusts-unique-memory-system-understanding-ownership-and-borrowing-ffa798ded739"
        />
        <ThoughtItem 
          title="Morra Game: Introducing Wager Using Reach" 
          date="Sep 2022" 
          readTime="5 min read"
          href='https://medium.com/@aroyewontope/morra-game-introducing-wager-using-reach-421e03a950e5'
        />
        <ThoughtItem 
          title="Single Deadline Crowdfunding Campaign Using Reach" 
          date="Sep 2022" 
          readTime="5 min read"
          href='https://temicode.hashnode.dev/single-deadline-crowdfunding-campaign-using-reach'
        />
        <ThoughtItem 
          title="JavaScript Math.min and Math.max Functions: A Better Approach" 
          date="Jul 2022" 
          readTime="2 min read"
          href='https://medium.com/@aroyewontope/javascript-math-min-and-math-max-functions-a-better-approach-805df7ab34b2'
        />
      </div>
    </motion.section>
  );
}
