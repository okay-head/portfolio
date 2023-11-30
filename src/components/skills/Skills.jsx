import { motion as m } from 'framer-motion'
import Wrapper from '../Wrapper'
import SkillCard from './SkillCard'
import H1 from '../../H1'
export default function Skills () {
  const imgArr = [
    { title: 'HTML', path: '/assets/brand/icons8-html-5-480.webp' },
    { title: 'CSS', path: '/assets/brand/icons8-css3-480.webp' },
    { title: 'JS', path: '/assets/brand/icons8-javascript-480.webp' },
    {
      title: 'React',
      path: '/assets/brand/react-1-logo-png-transparent-removebg-preview.webp'
    },
    { title: 'Tailwind', path: '/assets/brand/icons8-tailwind-css-480.webp' },
    { title: 'Bootstrap', path: '/assets/brand/icons8-bootstrap-480.webp' },
    { title: 'Firebase', path: '/assets/brand/icons8-firebase-480.webp' },
    { title: 'jQuery', path: '/assets/brand/jquery-icon.webp' },
    {
      title: 'AWS',
      path: '/assets/brand/icons8-amazon-web-services-480(1).webp'
    },
    { title: 'Node', path: '/assets/brand/nodejs.webp' },
    {
      title: 'TypeScript',
      path: '/assets/brand/icons8-typescript-480.webp'
    },
    { title: 'Scss', path: '/assets/icons8-sass-avatar-480.webp' }
  ]

  const cardVariants = {
    initial: { opacity: 0, x: '-3rem' },
    view: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.06, ease: 'easeInOut', duration: 0.5 }
    }
  }

  return (
    // view port units for x axis padding?
    <section
      id='skills'
      className='skills bg-[var(--bg-primary)] py-[var(--p-section-y)] z-10 relative scroll-mt-16'
    >
      <Wrapper>
        <H1 classVars='mb-9'>Skills</H1>
        <div className='text-center text-lg mb-5 italic text-[var(--white-2)] max-w-4xl  mx-auto'>
        The sheer number of new tech frameworks are overwhelming, yet worth learning. <br />
          I try. Here are some technologies that I've learned and worked with.
        </div>

        <m.div
          variants={cardVariants}
          initial='initial'
          whileInView='view'
          viewport={{ once: true, amount: 0.3 }}
          className=' mx-auto max-w-4xl
        sm:grid sm:grid-cols-3 lg:grid-cols-4'
        >
          {imgArr.map(({ title, path }, i) => {
            return (
              <SkillCard
                key={i * i}
                variants={cardVariants}
                title={title}
                path={path}
              />
            )
          })}
        </m.div>
      </Wrapper>
    </section>
  )
}
