import { Key } from 'react'

/* eslint-disable @next/next/no-img-element */
export const SponsorsList = ({ sponsors }) => {
  return (
    <div className='flex justify-center items-center flex-wrap gap-4 p-4'>
      {sponsors.map((sponsor: { href: string; logo: { src: string } }, i: Key) => {
        return (
          <a key={i} href={sponsor.href} target='_blank' rel='noreferrer'>
            <img className='px-4 max-h-8' src={sponsor.logo.src} width={120} alt='' />
          </a>
        )
      })}
    </div>
  )
}
