import { motion as m } from 'framer-motion'
export default function H1({ children, classVars = '', hVars = '' }) {
  return (
    <div className={`overflow-hidden ${classVars}`}>
      <m.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className={`hidden lg:block text-5xl text-center ${hVars}`}
      >
        {children}
      </m.h1>
      <m.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.01 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className={`lg:hidden text-3xl text-center ${hVars}`}
      >
        {children}
      </m.h1>
    </div>
  )
}
