import { motion as m } from 'framer-motion'
import H1 from '../../H1'
import Wrapper from '../Wrapper'
export default function Contact() {
	return (
		<div
			id='contact'
			className='contact bg-[var(--bg-purple)]  py-[var(--p-section-y)] scroll-mt-[4.5rem]'
		>
			<Wrapper>
				<H1 classVars='mb-10 md:mb-15'>Contact</H1>
				<div
					className='mx-8
			md:grid grid-cols-2 items-center lg:mx-auto'
				>
					<div>
						<img
							loading='lazy'
							src='/assets/th-2066431090-removebg-preview.png'
							alt='Waving astronaut'
							className='hue-rotate-30 mx-auto w-3/4 md:-mt-14'
						/>
					</div>

					<div className='py-4'>
						<form action=''>
							<input
								type='text'
								name='text'
								className='input-style'
								placeholder='Your name'
							/>
							<input
								type='email'
								name='email'
								className='input-style'
								placeholder='Your email'
							/>

							<textarea
								name='textarea'
								placeholder='Your tiny message...'
								className='input-style min-h-[250px]'
							></textarea>
							<m.button
								whileHover={{
									// scale: 1.01,
									transition: { duration: 0.2 },
								}}
								whileTap={{ scale: 0.9 }}
								id='submit'
								className=' submit bg-slate-500 rounded-md py-1 px-6 mt-2 mx-auto block'
							>
								Send
							</m.button>
						</form>
					</div>
				</div>
			</Wrapper>
		</div>
	)
}
