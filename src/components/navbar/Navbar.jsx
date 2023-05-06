import { Link } from 'react-router-dom'
import Anchor from './Anchor'
import Wrapper from '../Wrapper'
import close from './icons8-close-30.png'
import hamburger from './icons8-menu-64(1).png'
import { useState } from 'react'

export default function Navbar() {
	const [disabled, setDisabled] = useState(false)

	/* Change this */
	window.addEventListener('scroll', () => {
		const scroll = document.getElementsByTagName('html')[0].scrollTop
		const nav = document.getElementsByTagName('header')[0]

		if (scroll > 76) {
			nav.classList.add('blur-nav')
		} else {
			nav.classList.remove('blur-nav')
		}
	})

	const cls = 'block hover:text-[var(--bg-purple3)] transition-color duration-[250ms]'

	return (
		<header className='bg-[var(--bg-primary)] text-base font-poppins tracking-wide z-30 sticky top-0'>
			<Wrapper classVars={'flex py-5 items-center'}>
				<Link className='font-bold text-lg py-2'>PORTFOLIO</Link>

				<nav className='hidden md:flex ms-auto items-center'>
					<Anchor linkTo='home'>HOME</Anchor>
					<Anchor linkTo='skills'>SKILLS</Anchor>
					<Anchor linkTo='projects'>PROJECTS</Anchor>
					<a
						href='#contact'
						className='connect-btn relative  nav-link ms-4 me-0 border border-white p-2'
					>
						LET'S CONNECT
					</a>
				</nav>

				<nav className='ms-auto md:hidden'>
					<button
						onClick={() => setDisabled((prev) => !prev)}
						className='flex justify-end'
					>
						<img
							src={hamburger}
							alt='hamburger icon'
							className={`w-[45%] ${disabled ? 'hidden' : 'block'}`}
						/>
						<img
							src={close}
							alt='close icon'
							className={`w-3/4 me-[2px] z-10 ${!disabled ? 'hidden' : 'block'}`}
						/>
					</button>

					<section className={`bg-[var(--bg-primary)] fixed inset-0 h-screen grid place-items-center ${!disabled ? 'hidden' : 'block'}`}>
						<div className='flex flex-col gap-10 text-center text-2xl'>
							<Anchor flag={true} classVars={cls} imgVars={'hidden'} linkTo='home'>
								HOME
							</Anchor>
							<Anchor flag={true} classVars={cls} imgVars={'hidden'} linkTo='skills'>
								SKILLS
							</Anchor>
							<Anchor flag={true} classVars={cls} imgVars={'hidden'} linkTo='projects'>
								PROJECTS
							</Anchor>
							<Anchor flag={true} classVars={cls} imgVars={'hidden'} linkTo='connect'>
								CONNECT
							</Anchor>
						</div>
					</section>
				</nav>
			</Wrapper>
		</header>
	)
}
