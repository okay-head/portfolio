import H1 from '../../H1'
import Card from '../Card'
import Wrapper from '../Wrapper'

export default function Projects () {
  return (
    <div
      id='projects'
      className=' projects bg-[var(--bg-purple2)]  py-[var(--p-section-y)] scroll-mt-[5.3rem]'
    >
      <Wrapper>
        <H1 classVars='mb-9' hVars='mb-2'>
          Projects
        </H1>
        <div className='text-center text-lg mb-6 italic text-[var(--white-2)] max-w-4xl  mx-auto'>
        Nothing beats the excitement of starting a new project. Esp when you've got 20 of them sitting unfinished. <br />
        These are some of the projects that miraculously made it to completion. 
        </div>
        <div className='md:grid grid-cols-2 auto-rows-fr'>
          <Card
            source={'././assets/Blog-site-snapshot-1.png'}
            alt={'Blog site'}
            caption={'On The Blog'}
            live_url={'https://blog-site-ecru-phi.vercel.app/'}
            code_url={'https://github.com/okay-head/Blog-site'}
            id={1}
          />

          <Card
            source={'././assets/ableton-snapshot-home-IIII.png'}
            alt={'Ableton'}
            caption={'Ableton (responsive)'}
            cls={'row-span-2'}
            live_url={'https://okay-head.github.io/Ableton/'}
            code_url={'https://github.com/okay-head/Ableton'}
            id={2}
          />

          <Card
            source={'././assets/gradient-generator-snapshot-II.png'}
            alt={'Gradient generator'}
            caption={'Gradient generator'}
            code_url={'https://github.com/okay-head/Gradient-generator'}
            live_url={'https://okay-head.github.io/Gradient-generator/'}
            id={3}
          />
        </div>
      </Wrapper>
    </div>
  )
}
