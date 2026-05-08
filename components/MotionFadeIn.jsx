'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

/**
 * Wraps children in a viewport-triggered fade-up animation.
 * Fires once per page visit, respects prefers-reduced-motion (handled by framer-motion).
 *
 * Props:
 *  - delay: optional seconds to delay the start
 *  - immediate: if true, fades in on mount instead of when scrolled into view (use for hero)
 *  - stagger: if true, children become individually animated (children must use MotionFadeInItem)
 *  - as: HTML tag to render (default: 'div')
 */
export default function MotionFadeIn({
  children,
  delay = 0,
  immediate = false,
  stagger = false,
  as: Tag = 'div',
  className = '',
  ...rest
}) {
  const MotionTag = motion[Tag] || motion.div

  const variants = stagger ? staggerParent : fadeUp
  const transition = stagger
    ? { staggerChildren: 0.08, delayChildren: delay }
    : { duration: 0.5, ease: 'easeOut', delay }

  if (immediate) {
    return (
      <MotionTag
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={transition}
        className={className}
        {...rest}
      >
        {children}
      </MotionTag>
    )
  }

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={transition}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

/**
 * Use as a child of <MotionFadeIn stagger> so each child fades in one at a time.
 */
export function MotionFadeInItem({ children, as: Tag = 'div', className = '', ...rest }) {
  const MotionTag = motion[Tag] || motion.div
  return (
    <MotionTag
      variants={fadeUp}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
