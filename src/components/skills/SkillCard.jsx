import { motion as m } from 'framer-motion'
export default function SkillCard({
  path = '/assets/brand/icons8-css3-480.webp',
  variants,
  title,
  classVars = '',
}) {
  return (
    <m.div
      variants={variants}
      title={title}
      className={`bg-transparent my-4 ${classVars}`}
    >
      <img src={path} alt={`${title} icon`} className='w-[55%] mx-auto' />
    </m.div>
  )
}
