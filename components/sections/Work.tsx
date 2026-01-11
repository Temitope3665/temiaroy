'use client'
import { motion } from 'framer-motion';
import { WorkCard } from '../ui/WorkCard';

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

export function Work() {
  return (
    <motion.section 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={stagger}
      className="space-y-4"
    >
      <motion.h3 variants={fadeIn} className="text-3xl font-serif italic">Work</motion.h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/work-list">
        <WorkCard 
          image="/images/work1.jpg" 
          title="NucleusDAO" 
          description="Empowering potential governance. Build customizable, transparent organizations for your community on the Aeternity blockchain."
          tags={["DAO", "Blockchain", "Aeternity"]}
          href="https://nucleusdao.com/"
        />
        <WorkCard 
          image="/images/work2.jpg" 
          title="SonicReader" 
          description="Architectural precision in audio learning. Blending voice synthesis with decentralized tech to elevate document delivery."
          tags={["Next.js", "AI", "Web3"]}
          href="https://sonic-reader.vercel.app/"
        />
        <WorkCard 
          image="/images/work3.jpg" 
          title="Hobwise" 
          description="Effortless management for hospitality. Streamlining operations for restaurants, hotels, and bars in one platform."
          tags={["SaaS", "React", "Dashboard"]}
          href="https://www.hobwise.com/"
        />
        <WorkCard 
          image="/images/work4.jpg" 
          title="Zhill" 
          description="Accelerating digital and agile enablement. Delivering value through transformation and business agility."
          tags={["Agile", "Digital", "Consultancy"]}
          href="https://zhillsystems.com/"
        />
        <WorkCard 
          image="/images/work5.jpg" 
          title="Med360" 
          description="Your 360-degree health and beauty companion. A comprehensive e-commerce platform for medicine and skincare."
          tags={["E-commerce", "Next.js", "Health"]}
          href="https://www.med360wellness.com/"
        />
        <WorkCard 
          image="/images/work6.png" 
          title="Dashboard" 
          description="A data-driven survey management dashboard. Featuring real-time engagement analytics, survey tracking, and intuitive user overview for community insights."
          tags={["Analytics", "SaaS", "Recharts"]}
          href="#"
        />
        <WorkCard 
          image="/images/work7.png" 
          title="Carmedis" 
          description="Drive with certainty. Trusted auto repair experts providing reliable servicing and maintenance anywhere in Lagos."
          tags={["Automotive", "Service", "React"]}
          href="https://www.carmedis.com/"
        />
      </div>
    </motion.section>
  );
}
