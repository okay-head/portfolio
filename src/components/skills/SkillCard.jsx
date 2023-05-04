import {motion as m} from 'framer-motion'
export default function SkillCard({source='/assets/brand/icons8-css3-480.png', variants, title, classVars=''}) {
/*   const item = {
    hidden:{
      opacity: 0,
      x: -30
    },
    show:{
      opacity: 1,
      x: 0,
    },
    transition:{duration: 0.5}
  } */
  return (
    <m.div variants={variants} title={title} className={`bg-transparent my-4 ${classVars}`}>
      <img src={source} alt="cssIcon" className='w-[55%] mx-auto' />
    </m.div>
  )
}