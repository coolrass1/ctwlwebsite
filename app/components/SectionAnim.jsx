'use client'
import { useRef } from "react";
import { useInView, useMotionValue, useTransform } from "framer-motion";

const SectionAnim = ({children}) => {
    const x = useMotionValue(10)
    const y = useTransform(x, value => Math.sin(value / 10) * 50)
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "translate(-200)" : "none",
          opacity: isInView ? 1 : 0,
          transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
        }}
        
      >
        {children}
      </span>
    </section>
  )
}

export default SectionAnim