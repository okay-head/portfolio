import Navbar from "./components/navbar/Navbar";
import {BrowserRouter} from 'react-router-dom'

export default function App() {
  return(
    <BrowserRouter>
    <div className="content-container bg-slate-800 w-100 min-h-screen">
    <Navbar />
    </div>
    </BrowserRouter>
  )
}