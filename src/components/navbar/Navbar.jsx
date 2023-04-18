import { Link } from 'react-router-dom'
import Anchor from './Anchor'
export default function Navbar() {
  return (
    <header className="bg-[var(--bg-primary)] text-slate-50 text-lg font-poppins tracking-wide">
      <div className="nav-wrapper flex py-7 max-w-screen-xl mx-8 xl:mx-auto items-center">

        <Link className='font-bold text-xl py-2'>LOGO</Link>

        <nav className='hidden md:flex ms-auto items-center'>
          <Anchor>HOME</Anchor>
          <Anchor>SKILLS</Anchor>
          <Anchor>PROJECTS</Anchor>
          <Link className='connect-btn nav-link me-0 border border-white p-2'>LET'S CONNECT</Link>
        </nav>
      </div>

    </header>
  )
}