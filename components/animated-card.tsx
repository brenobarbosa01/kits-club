'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedCard = ({ children, className, delay = 0 }: AnimatedProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay, duration: 0.6 }}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.div>
)

export const AnimatedSection = ({ children, className, delay = 0 }: AnimatedProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay, duration: 0.8 }}
  >
    {children}
  </motion.div>
)

export const StaggerContainer = ({ children, className }: AnimatedProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ staggerChildren: 0.1 }}
  >
    {children}
  </motion.div>
)

export const StaggerItem = ({ children, className }: AnimatedProps) => (
  <motion.div 
    className={className} 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
)