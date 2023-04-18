import { Link } from 'react-router-dom'

export default function Anchor({ children }) {
  return (
    <Link className='nav-link group hover:font-bold'>
      {children}
      <img className='group-hover:scale-100 group-hover:translate-y-0 w-7 absolute inset-0 top-[-85%] left-1/4 transition-transform duration-75 translate-y-5 ease-in-out scale-0' src="src/assets/th-2939161216-removebg-preview.png" alt="saturn" />
    </Link>
  )
}