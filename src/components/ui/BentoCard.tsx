'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
}

export function BentoCard({ children, className = '' }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      {children}
    </motion.div>
  );
}