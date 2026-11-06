import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';

export default function CountUp({ value, prefix = '', suffix = '', decimals = 0 }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, amount: 0.3 });
  const reduced = useReducedMotion();
  const [number, setNumber] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!visible) return;
    if (reduced) {
      setNumber(value);
      return;
    }
    setNumber(0);
    const controls = animate(0, value, {
      duration: 1.25,
      ease: 'easeOut',
      onUpdate: latest => setNumber(latest),
    });
    return () => controls.stop();
  }, [visible, value, reduced]);

  return <span ref={ref} className="kpi-value">{prefix}{number.toFixed(decimals)}{suffix}</span>;
}
