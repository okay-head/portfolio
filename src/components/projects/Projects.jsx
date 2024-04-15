import { useMediaQuery } from 'react-responsive'
import H1 from '../../H1'
import Card from '../Card'
import Wrapper from '../Wrapper'

export default function Projects() {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' })

  return (
    <section
      id='projects'
      className=' projects bg-[var(--bg-purple2)]  py-[var(--p-section-y)] scroll-mt-[5.3rem]'
    >
      <Wrapper>
        <H1 classVars='mb-4' hVars='mb-2'>
          Projects
        </H1>
        <div className='text-center lg:text-lg mb-14 text-[var(--white-2)] max-w-4xl  mx-auto'>
          Nothing beats the excitement of starting a new project. Esp when
          you've got 20 of them sitting unfinished. These are some of the
          projects that miraculously made it to completion.
        </div>
        <div className='md:grid grid-cols-2 auto-rows-fr'>
          <Card
            source={`././assets${
              isMobile ? '/mobile' : ''
            }/Blog-site-snapshot-1.webp`}
            alt={'Blog site'}
            caption={'On The Blog'}
            live_url={'https://blog-site-ecru-phi.vercel.app/'}
            code_url={'https://github.com/okay-head/Blog-site'}
            id={1}
          />

          <Card
            source={`././assets${
              isMobile ? '/mobile' : ''
            }/ableton-snapshot-home-IIII.webp`}
            alt={'Ableton'}
            caption={'Ableton'}
            cls={'row-span-2'}
            live_url={'https://okay-head.github.io/Ableton/'}
            code_url={'https://github.com/okay-head/Ableton'}
            id={2}
          />

          <Card
            source={`././assets${
              isMobile ? '/mobile' : ''
            }/gradient-generator-snapshot-II.webp`}
            alt={'Gradient generator'}
            caption={'Gradient generator'}
            code_url={'https://github.com/okay-head/Gradient-generator'}
            live_url={'https://okay-head.github.io/Gradient-generator/'}
            id={3}
          />

          {/* -------------------- */}
          <Card
            source={`././assets${
              isMobile ? '/mobile' : ''
            }/Blog-site-snapshot-1.webp`}
            alt={'Blog site'}
            caption={'On The Blog'}
            live_url={'https://blog-site-ecru-phi.vercel.app/'}
            code_url={'https://github.com/okay-head/Blog-site'}
            id={4}
          />

          <Card
            source={`././assets${
              isMobile ? '/mobile' : ''
            }/ableton-snapshot-home-IIII.webp`}
            alt={'Ableton'}
            caption={'Ableton'}
            cls={'row-span-2'}
            live_url={'https://okay-head.github.io/Ableton/'}
            code_url={'https://github.com/okay-head/Ableton'}
            id={5}
          />

          <Card
            source={`././assets${
              isMobile ? '/mobile' : ''
            }/gradient-generator-snapshot-II.webp`}
            alt={'Gradient generator'}
            caption={'Gradient generator'}
            code_url={'https://github.com/okay-head/Gradient-generator'}
            live_url={'https://okay-head.github.io/Gradient-generator/'}
            id={6}
          />
        </div>
      </Wrapper>
    </section>
  )
}
