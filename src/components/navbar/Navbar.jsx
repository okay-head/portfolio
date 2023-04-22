import { Link } from 'react-router-dom'
import Anchor from './Anchor'
import Wrapper from '../Wrapper'
export default function Navbar() {
	return (
		<header className='bg-[var(--bg-primary)] text-lg font-poppins tracking-wide'>
			<Wrapper classVars={'flex py-7 items-center'}>
				<Link className='font-bold text-xl py-2'>LOGO</Link>

				<nav className='hidden md:flex ms-auto items-center'>
					<Anchor>HOME</Anchor>
					<Anchor>SKILLS</Anchor>
					<Anchor>PROJECTS</Anchor>
					{/* need pseudo element for transition */}
					<Link className='connect-btn nav-link ms-4 me-0 border border-white p-2'>
						LET'S CONNECT
					</Link>
				</nav>
			</Wrapper>
		</header>
	)
}
