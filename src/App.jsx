import Navbar from './components/navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'
export default function App() {
	return (
		<BrowserRouter>
			<div className='content-container text-slate-50'>
				<Navbar />
				<Home />
				<Skills />
			</div>    
		</BrowserRouter>
	)
}
