export default function Anchor({ children, linkTo }) {
  return (
    <a href={'#'+linkTo} className='mx-4 relative group'>
      {children}
      <img className='group-hover:opacity-100 group-hover:translate-y-0 w-6 absolute inset-0 top-[-85%] left-1/4 transition-transform duration-150 translate-y-1 ease-in-out opacity-0' src="src/assets/th-2939161216-removebg-preview.png" alt="saturn" />
    </a>
  )
}