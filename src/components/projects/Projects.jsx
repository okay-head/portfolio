import Card from '../Card'
import Wrapper from '../Wrapper'

export default function Projects() {
	return (
		<div className='projects bg-[var(--bg-purple)] py-10'>
			<Wrapper>
      <h1 className='text-5xl text-center mb-10'>Projects</h1>    
				<div className="md:grid grid-cols-2 auto-rows-fr">
          <Card source={'./../../../src/assets/github-finder-II.png'} alt={'Github finder'} caption={'Github finder'} live_url={'https://okay-head-github-finder.netlify.app/'} code_url={'https://github.com/okay-head/Github-Finder'}/> 

          <Card source={'./../../../src/assets/ableton-snapshot-home-IIII.png'} alt={'Ableton'} caption={'Ableton'} cls={'row-span-2'} live_url={'https://okay-head.github.io/Ableton/'} code_url={'https://github.com/okay-head/Ableton'}/>

          <Card source={'./../../../src/assets/gradient-generator-snapshot-II.png'} alt={'Gradient generator'} caption={'Gradient generator'} code_url={'https://github.com/okay-head/Gradient-generator'} live_url={'https://okay-head.github.io/Gradient-generator/'}/>
        </div>
			</Wrapper>
		</div>
	)
}
