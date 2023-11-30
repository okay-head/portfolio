import CardAnchor from './projects/CardAnchor'
import { motion as m } from 'framer-motion'

export default function Card({
  source = '././assets/github-finder-I.webp',
  alt,
  cls = '',
  caption = 'caption',
  live_url,
  code_url,
  id,
}) {
  function removeBlur() {
    const x = `card-img${id}`
    const el = document.getElementById(x)

    el.classList.remove('blur-sm')
  }
  return (
    <div
      className={`project-card group shadow-lg p-8 my-12 md:m-4 relative ${cls}`}
    >
      <m.img
        whileInView={removeBlur}
        viewport={{ once: true, amount: 0.4 }}
        loading='lazy'
        src={source}
        alt={alt}
        id={`card-img${id}`}
        className='mb-12 blur-sm card-imgs'
      />
      <div className='caption z-10 px-8 py-4 bg-[--bg-primary]  absolute bottom-0 left-0 right-0 font-bold'>
        <h2>{caption}</h2>
      </div>
      <div className='card-cover bg-[#000000ac] absolute inset-0 bottom-12 flex items-center justify-center transition-opacity ease-in-out duration-300  opacity-0 group-hover:opacity-100'>
        <CardAnchor
          source={'././assets/icons8-external-link-material-sharp-96.webp'}
          alt={'Demo'}
          url={live_url}
        />
        <CardAnchor
          source={'././assets/icons8-github-60.webp'}
          alt={'Code'}
          url={code_url}
        />
      </div>
    </div>
  )
}

// bg-[--bg-primary]
