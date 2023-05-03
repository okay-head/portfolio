export default function SkillCard({source='/assets/brand/icons8-css3-480.png', title, classVars=''}) {
  return (
    <div title={title} className={`bg-transparent my-4 ${classVars}`}>
      <img src={source} alt="cssIcon" className='w-[55%] mx-auto' />
    </div>
  )
}