import Navbar from './components/navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/home/Home'
export default function App() {
	return (
		<BrowserRouter>
			<div className='content-container text-slate-50'>
				<Navbar />
				<Home />
			</div>    
		</BrowserRouter>
	)
}
