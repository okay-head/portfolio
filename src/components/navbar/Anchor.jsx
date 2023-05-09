import { useContext } from 'react'
import NavContext from './NavContextProvider'

export default function Anchor({ children, linkTo, classVars, imgVars, flag=false }) {

  const {disabled, setDisabled} = useContext(NavContext)

	return (
    
		<a onClick={() => setDisabled((prev) => !prev)} href={'#' + linkTo} className={`mx-4 relative group ${classVars}`}>
			{children}
			<img
				className={`group-hover:opacity-100 group-hover:translate-y-0 w-5 absolute inset-0 top-[-80%] left-1/4 transition-transform duration-150 translate-y-1 ease-in-out opacity-0 ${imgVars}`}
				src='/assets/th-2939161216-removebg-preview.png'
				alt='saturn'
			/>
		</a>
	)
}
