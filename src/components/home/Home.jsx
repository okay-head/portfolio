import { useMediaQuery } from 'react-responsive'
import { motion as m, useScroll, useTransform } from 'framer-motion'
export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' })
  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [0, 3 * distance])
  }

  const { scrollYProgress } = useScroll()
  const y = useParallax(scrollYProgress, 100)

  return (
    <section
      id='home'
      className='home min-h-screen relative scroll-m-20 grid place-items-center md:block'
    >
      {isMobile ? (
        <img
          loading='eager'
          src='/assets/mobile/bg.webp'
          alt='bg image'
          id='heroImg'
        />
      ) : (
        <img
          loading='eager'
          src='/assets/64c71112-c87c-4874-b26d-30ca6454dd11.webp'
          alt='bg image'
          id='heroImg'
        />
      )}

      <div
        className='home-container max-w-[1000px] min-h-[80vh] 
			py-5 mx-8
			md:grid grid-cols-2 items-center lg:mx-auto'
      >
        <div className='order-last relative -mt-8 md:mt-[unset]'>
          <m.img
            style={{ y }}
            transition={{ delay: 0.2, duration: 1 }}
            className='mx-auto -mt-4 md:w-[80%] w-[90%] max-w-[400px]'
            src='/assets/Untitled_design-removebg-preview.webp'
            alt='Astronaut using a laptop'
          />
        </div>

        <div className='text-base md:text-lg mb-16 md:mb-0'>
          <div className='overflow-hidden'>
            <m.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className='text-4xl md:text-5xl'
            >
              Hi!
            </m.h1>
          </div>
          <div className='overflow-hidden  mb-4'>
            <m.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className='text-4xl md:text-5xl'
            >
              I'm Shashwat Jaiswal
            </m.h1>
          </div>
          <div>
            <m.div
              initial={{ y: '50%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              // viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className='text-[var(--white-2)]'
            >
              I am a developer who thrives on passion and curiosity. Currently,
              I’m focused on building responsive full-stack web applications
              with serverless. I'm proficient in creating mockups and custom
              components from the ground up.
            </m.div>
          </div>
        </div>
      </div>
    </section>
  )
}
