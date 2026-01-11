'use client'
import { motion } from 'framer-motion';

interface FooterProps {
  time: string;
}

export function Footer({ time }: FooterProps) {
  return (
    <>
      <footer className="py-24 border-t border-foreground/5">
        <div className="max-w-[700px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] tracking-[0.2em] font-bold uppercase text-foreground/90">
          <div className="opacity-50 hover:opacity-100 transition-opacity cursor-default">
            © {new Date().getFullYear()}
          </div>
          
          <motion.a 
            href="https://calendly.com/aroyewontope/schedule-a-call-with-temitope" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-0 hover:gap-2 transition-all duration-500 ease-[0.22, 1, 0.36, 1]"
          >
            <motion.div
              initial={{ width: 0, opacity: 0, x: -5, scale: 0.8 }}
              whileHover={{ width: "auto", opacity: 1, x: 0, scale: 1 }}
              className="overflow-hidden bg-[#006BFF] p-1 rounded-md"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="size-2.5 fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
              </svg>
            </motion.div>
            <span className="text-white">Book a Call</span>
          </motion.a>

          <div className="opacity-50 hover:opacity-100 transition-opacity cursor-default">
            {time} • WAT
          </div>
        </div>
      </footer>

      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full overflow-hidden border-t border-foreground/5 pt-12"
      >
        <div className="h-[12vw] md:h-[11vw] overflow-hidden flex items-start justify-center">
          <h2 className="text-[28vw] md:text-[25vw] font-black tracking-tighter leading-none text-foreground/[0.05] dark:text-foreground/[0.03] uppercase select-none text-center whitespace-nowrap w-full">
            TEMITOPE
          </h2>
        </div>
      </motion.section>
    </>
  );
}
