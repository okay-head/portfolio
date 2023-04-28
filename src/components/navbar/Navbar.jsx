import { Link } from 'react-router-dom'
import Anchor from './Anchor'
import Wrapper from '../Wrapper'
export default function Navbar() {
	window.addEventListener('scroll',()=>{
		const scroll = document.getElementsByTagName('html')[0].scrollTop
		const nav = document.getElementsByTagName('header')[0]

		if (scroll>76){
			nav.classList.add('blur-nav')	
		}else{
			nav.classList.remove('blur-nav')	
			// console.log('DROWN US OUT');
		}
	})
	return (

		<header className='bg-[var(--bg-primary)] text-base font-poppins tracking-wide z-30 sticky top-0'>
			<Wrapper classVars={'flex py-5 items-center'}>
				<Link className='font-bold text-lg py-2'>PORTFOLIO</Link>

				<nav className='hidden md:flex ms-auto items-center'>
					<Anchor linkTo='home'>HOME</Anchor>
					<Anchor linkTo='skills'>SKILLS</Anchor>
					<Anchor linkTo='projects'>PROJECTS</Anchor>
					{/* need pseudo element for transition */}
					<a href='#contact' className='connect-btn relative  nav-link ms-4 me-0 border border-white p-2'>
						LET'S CONNECT
					</a>
				</nav>
			</Wrapper>
		</header>
	)
}
