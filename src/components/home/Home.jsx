import { motion as m } from 'framer-motion'
export default function Home() {
	const floatVariants = {
		float: {
			y: [0, -30],
			x: [0, 0],
			transition: {
				duration: 2,
				ease: ['easeOut'],

				repeat: Infinity,
				repeatType: 'reverse',
			},
		},
	}
	return (
		<div id='home' className='home min-h-screen relative scroll-m-20'>
			<div
				className='home-container max-w-[1000px] min-h-[80vh] 
			py-5 mx-8
			md:grid grid-cols-2 items-center lg:mx-auto'
			>
				<div className='order-last relative'>
					{/* <m.img 

					src="/assets/star-svgrepo-com.png" alt="small star" className='w-5 absolute left-10' /> */}
					<m.img
						// variants={floatVariants}
						animate='float'
						className='mx-auto -mt-4 w-[80%]'
						src='/assets/cute-astronaut-working-with-computer-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4172-removebg-preview_cleanup.png'
						alt='Astronaut using a laptop'
					/>
				</div>

				<div className='text-lg mb-16 md:mb-0'>
					<div className='overflow-hidden'>
						<m.h1
							initial={{ y: '100%' }}
							animate={{ y: 0 }}
							transition={{ delay: 0.2, duration: 0.3 }}
							className='text-5xl'
						>
							Hi!
						</m.h1>
					</div>
					<div className='overflow-hidden  mb-4'>
						<m.h1
							initial={{ y: '100%' }}
							animate={{ y: 0 }}
							transition={{ delay: 0.4, duration: 0.5 }}
							className='text-5xl'
						>
							I'm Shashwat Jaiswal
						</m.h1>
					</div>
					<div>
						<m.div
							initial={{ y: '50%', opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							// viewport={{ once: true, amount: 0.2 }}
							transition={{ delay:0.5,duration: 0.6 }}
							className='text-[var(--white-2)]'
						>
							I’m a front-end developer specializing in building (and
							occasionally designing) exceptional digital experiences.
							Currently, I’m focused on building responsive full-stack web
							applications with serverless.
						</m.div>
					</div>
				</div>
			</div>
		</div>
	)
}
