'use client'
import { motion } from 'framer-motion';

interface HeaderProps {
  time: string;
}

export function Header({ time }: HeaderProps) {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-start justify-between p-8 lg:p-12"
    >
      <div className="flex flex-col">
        <h1 className="text-sm font-bold leading-tight tracking-wider uppercase opacity-80">
          TEMITOPE<br />AROYEWON
        </h1>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 mt-1">
        <p className="text-sm font-medium tracking-wide">
          EKÁÀBÒ 👋🏾
        </p>
      </div>

      <div className="flex items-center">
        <div className="px-5 py-2 rounded-full bg-foreground/10 border border-foreground/5 backdrop-blur-sm">
          <p className="text-xs font-medium tracking-widest uppercase">
            {time ? `${time.replace(' ', ':')} WAT` : '00:00:00 WAT'}
          </p>
        </div>
      </div>
    </motion.header>
  );
}
