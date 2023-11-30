import { motion as m, useScroll, useTransform } from 'framer-motion'
export default function Home() {
  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [0, 3 * distance])
  }

  const { scrollYProgress } = useScroll()
  const y = useParallax(scrollYProgress, 100)

  return (
    <section id='home' className='home min-h-screen relative scroll-m-20'>
      <img
        loading='eager'
        src='/assets/64c71112-c87c-4874-b26d-30ca6454dd11.webp'
        alt=''
        id='heroImg'
      />
      <div
        className='home-container max-w-[1000px] min-h-[80vh] 
			py-5 mx-8
			md:grid grid-cols-2 items-center lg:mx-auto'
      >
        <div className='order-last relative'>
          {/* <m.img 

					src="/assets/star-svgrepo-com.webp" alt="small star" className='w-5 absolute left-10' /> */}
          <m.img
            style={{ y }}
            // style={{ y: scrollYProgress }}
            // variants={floatVariants}
            // initial = {{ y: '-20%'}}
            // animate = {{ y: '0%'}}
            transition={{ delay: 0.2, duration: 1 }}
            className='mx-auto -mt-4 w-[80%]'
            src='/assets/cute-astronaut-working-with-computer-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4172-removebg-preview_cleanup.webp'
            alt='Astronaut using a laptop'
          />
        </div>

        <div className='text-lg mb-16 md:mb-0'>
          <div className='overflow-hidden'>
            <m.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className='text-5xl'
            >
              Hi!
            </m.h1>
          </div>
          <div className='overflow-hidden  mb-4'>
            <m.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className='text-5xl'
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
              with serverless.
            </m.div>
          </div>
        </div>
      </div>
    </section>
  )
}
