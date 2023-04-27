import CardAnchor from './projects/CardAnchor';

export default function Card({
	source = './../../../src/assets/github-finder-I.png',
	alt,
	cls = '',
	caption = 'caption',
  live_url,
  code_url
}) {
	return (
		<div className={`project-card group shadow-lg p-8 my-12 md:m-4 relative ${cls}`}>
			<img src={source} alt={alt} className='mb-12' />
			<div className='caption z-10 px-8 py-4 bg-[--bg-primary]  absolute bottom-0 left-0 right-0 font-bold'>
				<h2>{caption}</h2>
			</div>
			<div className='card-cover bg-[#000000ac] absolute inset-0 bottom-12 flex items-center justify-center transition-opacity ease-in-out duration-300  opacity-0 group-hover:opacity-100'>
      <CardAnchor source={'./../../../src/assets/icons8-external-link-material-sharp-96.png'} alt={'Demo'} url={live_url}/>
      <CardAnchor source={'./../../../src/assets/icons8-github-60.png'} alt={'Code'} url={code_url}/>
			</div>
		</div>
	)
}

// bg-[--bg-primary]
