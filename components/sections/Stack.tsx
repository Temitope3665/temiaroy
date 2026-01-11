'use client'
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const stackData = [
  {
    category: "Frontend",
    skills: ["React", "Next.js (App Router)", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Shadcn/UI"]
  },
  {
    category: "State & Data",
    skills: ["React Query", "Zustand", "Redux Toolkit", "Zod"]
  },
  {
    category: "Backend / APIs",
    skills: ["Node.js", "Express", "Rust", "REST APIs", "MongoDB"]
  },
  {
    category: "Web3",
    skills: ["Web3.js", "Ethers.js", "Wallet integrations", "Smart contracts"]
  },
  {
    category: "Testing & Quality",
    skills: ["Jest", "React Testing Library"]
  },
  {
    category: "Tooling & DevOps",
    skills: ["Git & GitHub", "CI/CD workflows", "Vercel", "Docker"]
  },
  {
    category: "Design & UX",
    skills: ["Figma", "Responsive Design", "Motion & Micro-interactions"]
  }
];

export function Stack() {
  return (
    <motion.section 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={stagger}
      className="space-y-8"
    >
      <motion.h3 variants={fadeIn} className="text-3xl font-serif italic">Stack</motion.h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {stackData.map((item) => (
          <motion.div key={item.category} variants={fadeIn} className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-30">
              {item.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 rounded-full bg-foreground/[0.03] border border-foreground/5 text-sm font-medium hover:bg-foreground/10 hover:border-foreground/10 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
