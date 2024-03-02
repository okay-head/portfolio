import { motion as m, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import H1 from '../../H1'
import Wrapper from '../Wrapper'
import Popup from '../Popup'

export default function Contact() {
  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [distance, -distance])
  }
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 40)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    document.getElementsByTagName('form')[0].reset()
    document
      .getElementById('form-popup')
      .classList.add('!opacity-100', '!translate-y-0')
    setTimeout(() => {
      document
        .getElementById('form-popup')
        .classList.remove('!opacity-100', '!translate-y-0')
    }, 1000)
    console.log('form submitted!')
  }
  return (
    <section
      id='contact'
      className='contact bg-[var(--bg-purple)]  py-[var(--p-section-y)] scroll-mt-[4.5rem] relative'
    >
      <Wrapper>
        <H1 classVars='mb-4'>Contact</H1>
        <div className='text-center lg:text-lg mb-10 text-[var(--white-2)] max-w-4xl  mx-auto'>
          If you like my work, consider adding a
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            class='w-5 h-5 inline-block ms-2 me-2 mb-1'
          >
            <path
              fill-rule='evenodd'
              d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
              clip-rule='evenodd'
            />
          </svg>
          on{' '}
          <a
            href='https://github.com/okay-head/portfolio'
            className='underline hover:no-underline inline-block'
          >
            Github.
          </a>{' '}
          <br />
          You can also contact me via mail or twitter.
        </div>
        <div
          ref={ref}
          className='md:mx-8
			md:grid grid-cols-2 items-center lg:mx-auto -mt-4'
        >
          <div>
            <m.img
              style={{ y }}
              loading='lazy'
              src='/assets/th-2066431090-removebg-preview.webp'
              alt='Waving astronaut'
              className='hidden md:block hue-rotate-30 mx-auto w-full md:w-3/4 md:-mt-14 max-w-[400px]'
            />
            <m.img
              loading='lazy'
              src='/assets/th-2066431090-removebg-preview.webp'
              alt='Waving astronaut'
              className='md:hidden hue-rotate-30 mx-auto w-full md:w-3/4 md:-mt-14 max-w-[400px]'
            />
          </div>

          <div className='py-4 relative'>
            <Popup />

            <form onSubmit={(e) => onSubmitHandler(e)}>
              <input
                type='text'
                name='text'
                className='input-style'
                placeholder='Your name'
                required
              />
              <input
                type='email'
                name='email'
                className='input-style'
                placeholder='Your email'
                required
              />

              <textarea
                name='textarea'
                placeholder='Your tiny message...'
                className='input-style min-h-[250px]'
                required
              ></textarea>
              <m.button
                whileHover={{
                  // scale: 1.01,
                  transition: { duration: 0.2 },
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
