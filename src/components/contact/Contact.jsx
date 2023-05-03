import Wrapper from '../Wrapper'
export default function Contact() {
	return (
		<div id='contact' className='contact bg-[var(--bg-purple)]  py-[var(--p-section-y)] scroll-mt-[4.5rem]'>
			<Wrapper>
				<h1 className='text-5xl text-center mb-10 md:mb-15'>Contact</h1>
				<div
					className='mx-8
			md:grid grid-cols-2 items-center lg:mx-auto'
				>
					<div>
						<img
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
								placeholder='Your irrelevant message'
								className='input-style min-h-[250px]'
							></textarea>
              <button id='submit' className=' submit bg-slate-500 rounded-md py-1 px-6 mt-2 mx-auto block transition-transform duration-300 hover:-translate-y-[2px]'>Send</button>
						</form>
					</div>
				</div>
			</Wrapper>
		</div>
	)
}
