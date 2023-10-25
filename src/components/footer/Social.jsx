import { SocialIcon } from 'react-social-icons'
export default function Social ({ url, classVars }) {
  return (
    <SocialIcon
      url={url}
      bgColor='transparent'
      fgColor='#f8fafc'
      className={`social mx-2 border-[0px] border-[#f8fafc] rounded-[50%] ${classVars}`}
    />
  )
}
