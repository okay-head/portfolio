import Navbar from './components/navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
export default function App() {
	return (
		<BrowserRouter>
			<div className='content-container text-slate-50'>
				<Navbar />
				<Home />
				<Skills />
				<Projects />
				<Contact />
				<Footer />
			</div>    
		</BrowserRouter>
	)
}
