import { motion, useReducedMotion } from 'motion/react';

// Se usa Motion para apariciones al hacer scroll, sin manipular el DOM manualmente.
export default function Reveal({ children, delay = 0, className = '', as = 'div', ...props }) {
  const reduced = useReducedMotion();
  const Component = motion[as] || motion.div;
  return (
    <Component
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduced ? 0 : 0.6, ease: [0.22, 1, 0.36, 1], delay: reduced ? 0 : delay }}
      {...props}
    >{children}</Component>
  );
}
