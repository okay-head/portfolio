export default function Home() {
	return (
		<div id='home' className='home min-h-screen relative scroll-m-20'>
			<div
				className='home-container max-w-[1000px] min-h-[80vh] 
			py-5 mx-8
			md:grid grid-cols-2 items-center lg:mx-auto'
			>
				<div className='order-last'>
					<img
						className='mx-auto -mt-4 md:-ms-4'
						src='./../../src/assets/cute-astronaut-working-with-computer-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4172-removebg-preview_cleanup.png'
						alt='Astronaut using a laptop'
					/>
				</div>

				<div className='text-lg mb-16'>
					<h1 className='text-6xl'>Hi!</h1>
					<h1 className='text-5xl mb-4'>I'm Shashwat Jaiswal</h1>
					<div>
						I’m a front-end developer specializing in building (and occasionally
						designing) exceptional digital experiences. Currently, I’m focused
						on building responsive full-stack web applications with serverless.
					</div>
				</div>
			</div>
		</div>
	)
}
