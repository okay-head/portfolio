export default function SkillCard({source='./../../../src/assets/brand/icons8-css3-480.png'}) {
  return (
    <div className="bg-transparent my-4">
      <img src={source} alt="cssIcon" className='w-[55%] mx-auto' />
    </div>
  )
}