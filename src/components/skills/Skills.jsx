import { motion as m } from 'framer-motion'
import Wrapper from '../Wrapper'
import SkillCard from './SkillCard'
export default function Skills() {
	const imgArr = [
		{ title: 'HTML', path: '/assets/brand/icons8-html-5-480.png' },
		{ title: 'CSS', path: '/assets/brand/icons8-css3-480.png' },
		{ title: 'JS', path: '/assets/brand/icons8-javascript-480.png' },
		{
			title: 'React',
			path: '/assets/brand/react-1-logo-png-transparent-removebg-preview.png',
		},
		{ title: 'Tailwind', path: '/assets/brand/icons8-tailwind-css-480.png' },
		{ title: 'Bootstrap', path: '/assets/brand/icons8-bootstrap-480.png' },
		{ title: 'Firebase', path: '/assets/brand/icons8-firebase-480.png' },
		{ title: 'jQuery', path: '/assets/brand/jquery-icon.png' },
		{
			title: 'AWS',
			path: '/assets/brand/icons8-amazon-web-services-480(1).png',
		},
		{ title: 'Node', path: '/assets/brand/nodejs.png' },
		{
			title: 'MongoDb',
			path: '/assets/brand/erkxwhl1gd48xfhe2yld-removebg-preview.png',
		},
		{ title: 'Scss', path: '/assets/icons8-sass-avatar-480.png' },
	]

	const cardVariants = {
		initial: { opacity: 0, x: '-3rem' },
		view: {
			opacity: 1,
			x: 0,
			transition: { staggerChildren: 0.06, ease: 'easeInOut', duration: 0.6 },
		},
	}

	return (
		// view port units for x axis padding?
		<div
			id='skills'
			className='skills bg-[var(--bg-primary)] py-[var(--p-section-y)] z-10 relative scroll-mt-16'
		>
			<Wrapper>
				<m.div className='mb-10 overflow-hidden'>
					<m.h1
						initial={{ y: 30, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.3 }}
						className='text-5xl text-center'
					>
						Skills
					</m.h1>
				</m.div>
				<div className='text-center text-xl mb-5 italic'>
					Technologies I've worked with
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
		</div>
	)
}
