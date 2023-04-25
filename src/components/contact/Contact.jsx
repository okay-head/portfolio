import Wrapper from '../Wrapper'
export default function Contact() {
	return (
		<div className='contact bg-[var(--bg-purple)]  py-[var(--p-section-y)]'>
			<Wrapper>
				<h1 className='text-5xl text-center mb-10 md:mb-20'>Contact</h1>
				<div className='mx-8
			md:grid grid-cols-2 items-center lg:mx-auto'
				>
					<div>
            <h2 className='w-1/2 mx-auto text-left text-6xl text-[black] text-gradient py-2 '>Let's work together</h2>
            <img src="./../../src/assets/th-2066431090-removebg-preview.png" alt="Waving astronaut" className='hue-rotate-30 mx-auto' />
            </div>
    
          <div className='py-4'>
            <form action="">
            <input type="text" name="text" className='input-style' placeholder='Your name' />
            <input type="email" name="email" className='input-style' placeholder='Your email' />

            <textarea name="textarea" placeholder='Your irrelevant message' className='input-style min-h-[280px]'></textarea>
  
            </form>
          </div>
				</div>
			</Wrapper>
		</div>
	)
}
