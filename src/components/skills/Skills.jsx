import Wrapper from '../Wrapper'
import SkillCard from './SkillCard'
export default function Skills() {
  const pth = '././assets/brand/'
	return (
    // view port units for x axis padding?
		<div id='skills' className='skills bg-[var(--bg-primary)] py-[var(--p-section-y)] z-10 relative scroll-mt-16'>
      <Wrapper>
      <h1 className='text-5xl text-center mb-10'>Skills</h1>    
      <div className='text-center text-xl mb-5 italic'>Technologies I've worked with</div>
				<div className=" mx-auto max-w-4xl
        sm:grid sm:grid-cols-3 lg:grid-cols-4">
        <SkillCard title='HTML' source={pth+'icons8-html-5-480.png'}/>
        <SkillCard title='CSS' source={pth+'icons8-css3-480.png'}/>
        <SkillCard title='JS' source={pth+'icons8-javascript-480.png'}/>
        <SkillCard title='React' source={pth+'react-1-logo-png-transparent-removebg-preview.png'}/>
        <SkillCard title='Tailwind' source={pth+'icons8-tailwind-css-480.png'}/>
        <SkillCard title='Bootstrap' source={pth+'icons8-bootstrap-480.png'}/>
        <SkillCard title='Firebase' source={pth+'icons8-firebase-480.png'}/>
        <SkillCard title='jQuery' source={pth+'jquery-icon.png'}/>
        <SkillCard title='AWS' source={pth+'icons8-amazon-web-services-480(1).png'}/>
        <SkillCard title='Node' source={pth+'nodejs.png'} classVars='hue'/>
        <SkillCard title='MongoDb' source={pth+'erkxwhl1gd48xfhe2yld-removebg-preview.png'}/>
        <SkillCard title='Figma' source={pth+'icons8-figma-480.png'}/> 
        </div>
      </Wrapper>
		</div>
	)
}
