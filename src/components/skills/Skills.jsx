import { motion as m } from 'framer-motion'
import Wrapper from '../Wrapper'
import SkillCard from './SkillCard'
export default function Skills() {
	const pth = '././assets/brand/'

	const cardVariants = {
		initial: { opacity: 0, x: '-3rem' },
		view: {
			opacity: 1,
			x: 0,
      transition: { staggerChildren: 0.1, ease: 'easeInOut', duration: 0.8 },
		},
	}
  
	return (
		// view port units for x axis padding?
		<div
			id='skills'
			className='skills bg-[var(--bg-primary)] py-[var(--p-section-y)] z-10 relative scroll-mt-16'
		>
			<Wrapper>
				<div className='mb-10'>
					<m.h1 
          initial = {{y:'100%', opacity: 0}}
          whileInView = {{ y:'0%', opacity: 1}}
          viewport={{ once: true, amount: 0.8 }}
          transition={{delay: 0, duration:0.4}}
          className='text-5xl text-center'>Skills</m.h1>
				</div>
				<div className='text-center text-xl mb-5 italic'>
					Technologies I've worked with
				</div>

				<m.div
          variants={cardVariants}
          initial = 'initial'
          whileInView='view'
          viewport={{ once: true, amount: 0.3 }}
					className=' mx-auto max-w-4xl
        sm:grid sm:grid-cols-3 lg:grid-cols-4'
				>
					<SkillCard variants={cardVariants} title='HTML' source={pth + 'icons8-html-5-480.png'} />
					<SkillCard variants={cardVariants} title='CSS' source={pth + 'icons8-css3-480.png'} />
					<SkillCard variants={cardVariants} title='JS' source={pth + 'icons8-javascript-480.png'} />
					<SkillCard variants={cardVariants}
						title='React'
						source={pth + 'react-1-logo-png-transparent-removebg-preview.png'}
					/>
					<SkillCard variants={cardVariants}
						title='Tailwind'
						source={pth + 'icons8-tailwind-css-480.png'}
					/>
					<SkillCard variants={cardVariants}
						title='Bootstrap'
						source={pth + 'icons8-bootstrap-480.png'}
					/>
					<SkillCard variants={cardVariants}
						title='Firebase'
						source={pth + 'icons8-firebase-480.png'}
					/>
					<SkillCard variants={cardVariants} title='jQuery' source={pth + 'jquery-icon.png'} />
					<SkillCard variants={cardVariants}
						title='AWS'
						source={pth + 'icons8-amazon-web-services-480(1).png'}
					/>
					<SkillCard variants={cardVariants} title='Node' source={pth + 'nodejs.png'} classVars='hue' />
					<SkillCard variants={cardVariants}
						title='MongoDb'
						source={pth + 'erkxwhl1gd48xfhe2yld-removebg-preview.png'}
					/>
					<SkillCard variants={cardVariants} title='Figma' source={pth + 'icons8-figma-480.png'} />
				</m.div>
			</Wrapper>
		</div>
	)
}
