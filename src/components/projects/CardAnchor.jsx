export default function CardAnchor ({ url, source, alt }) {
  return (
    <a href={url} target='_blank' className='cardAnchor mx-3'>
      <img
        loading='lazy'
        src={source}
        alt={alt}
        className='w-[45px] p-2 rounded-[50%] bg-slate-50'
      />
    </a>
  )
}
