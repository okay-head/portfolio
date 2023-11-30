import { motion as m, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import H1 from '../../H1'
import Wrapper from '../Wrapper'
import Popup from '../Popup'

export default function Contact () {
  function useParallax (value, distance) {
    return useTransform(value, [0, 1], [distance, -distance])
  }
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 40)

  const onSubmitHandler = (e)=>{
    e.preventDefault()
    document.getElementsByTagName('form')[0].reset()
    document.getElementById('form-popup').classList.add('!opacity-100','!translate-y-0')
    setTimeout(() => {
      document.getElementById('form-popup').classList.remove('!opacity-100','!translate-y-0')
    }, 1000);
    console.log('form submitted!')
  }
  return (
    <section
      id='contact'
      className='contact bg-[var(--bg-purple)]  py-[var(--p-section-y)] scroll-mt-[4.5rem] relative'
    >
      <Wrapper>
        <H1 classVars='mb-8'>Contact</H1>
        <div className='text-center text-lg mb-10 italic text-[var(--white-2)] max-w-4xl  mx-auto'>
        If you like my work, consider adding a 🌟 on github. <br /> 
        You can also contact me via mail or twitter. 
        </div>
        <div
          ref={ref}
          className='mx-8
			md:grid grid-cols-2 items-center lg:mx-auto'
        >
          <div>
            <m.img
              style={{ y }}
              loading='lazy'
              src='/assets/th-2066431090-removebg-preview.webp'
              alt='Waving astronaut'
              className='hue-rotate-30 mx-auto w-3/4 md:-mt-14'
            />
          </div>

          <div className='py-4 relative'>
      <Popup />

            <form onSubmit={(e)=>onSubmitHandler(e)}>
              <input
                type='text'
                name='text'
                className='input-style'
                placeholder='Your name'
              />
              <input
                type='email'
                name='email'
                className='input-style'
                placeholder='Your email'
              />

              <textarea
                name='textarea'
                placeholder='Your tiny message...'
                className='input-style min-h-[250px]'
              ></textarea>
              <m.button
                whileHover={{
                  // scale: 1.01,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
                id='submit'
                className=' submit bg-slate-500 rounded-md py-1 px-6 mt-2 mx-auto block'
              >
                Send
              </m.button>
            </form>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
