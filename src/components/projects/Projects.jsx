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
        <H1 classVars='mb-[calc(5rem-0.5rem)]' hVars='mb-2'>
          Projects
        </H1>
        <div className='md:grid grid-cols-2 auto-rows-fr'>
          <Card
            source={'././assets/github-finder-II.png'}
            alt={'Github finder'}
            caption={'Github finder'}
            live_url={'https://okay-head-github-finder.netlify.app/'}
            code_url={'https://github.com/okay-head/Github-Finder'}
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
