import Wrapper from '../Wrapper'
import SkillCard from './SkillCard'
export default function Skills() {
  const pth = '././assets/brand/'
	return (
    // view port units for y axis padding?
		<div id='skills' className='skills bg-[var(--bg-primary)] py-[var(--p-section-y)] z-10 relative scroll-mt-16'>
      <Wrapper>
      <h1 className='text-5xl text-center mb-10'>Skills</h1>    
      <div className='text-center text-xl mb-5 text-[var(--bg-purple3)]'>Technologies I've worked with</div>
				<div className=" mx-auto max-w-4xl
        sm:grid sm:grid-cols-3 lg:grid-cols-4">
        <SkillCard source={pth+'icons8-html-5-480.png'}/>
        <SkillCard source={pth+'icons8-css3-480.png'}/>
        <SkillCard source={pth+'icons8-javascript-480.png'}/>
        <SkillCard source={pth+'react-1-logo-svg-vector.svg'}/>
        <SkillCard source={pth+'icons8-tailwind-css-480.png'}/>
        <SkillCard source={pth+'icons8-bootstrap-480.png'}/>
        <SkillCard source={pth+'icons8-firebase-480.png'}/>
        <SkillCard source={pth+'jquery_vertical_logo_icon_169489.png'}/>
        <SkillCard source={pth+'icons8-amazon-web-services-480(1).png'}/>
        <SkillCard source={pth+'nodejs-1-logo.png'}/>
        <SkillCard source={pth+'png-transparent-mongodb-original-wordmark-logo-icon-thumbnail-removebg-preview.png'}/>
        <SkillCard source={pth+'icons8-figma-480.png'}/> 
        </div>
      </Wrapper>
		</div>
	)
}
