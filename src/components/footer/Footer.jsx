import Wrapper from '../Wrapper'
import Social from './Social'

export default function Footer() {
	return (
		<footer className=' bg-black text-lg font-poppins tracking-wide'>
			<Wrapper classVars={'grid grid-cols-2 py-10 items-center'}>
				<div>
					<h2 className='font-bold text-xl py-2'>PORTFOLIO</h2>
				</div>
				<div className='ms-auto'>
					<Social url='https://medium.com/@shashwat-jaiswal' />
					<Social url='https://github.com/okay-head' />
					<Social url='https://twitter.com/shash0_0' />
				</div>
			</Wrapper>
		</footer>
	)
}
