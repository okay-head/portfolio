import Wrapper from '../Wrapper'
export default function Contact() {
	return (
		<div className='contact bg-[var(--bg-purple)]  py-[var(--p-section-y)]'>
			<Wrapper>
				<h1 className='text-5xl text-center mb-10 md:mb-15'>Contact</h1>
				<div
					className='mx-8
			md:grid grid-cols-2 items-center lg:mx-auto'
				>
					<div>
						<img
							src='./../../src/assets/th-2066431090-removebg-preview.png'
							alt='Waving astronaut'
							className='hue-rotate-30 mx-auto w-3/4'
						/>
					</div>

					<div className='py-4'>
						<h2 className='mx-auto text-left text-4xl text-[black] text-gradient py-3 mb-5 ms-2'>
							Let's work together!
						</h2>
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
              <button id='submit' className='bg-slate-500 rounded-md border-1px border-black py-2 px-4 mx-auto block'>Send</button>
						</form>
					</div>
				</div>
			</Wrapper>
		</div>
	)
}
