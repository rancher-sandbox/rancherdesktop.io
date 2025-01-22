import { RancherLogoSVG } from '@/assets/images'
import ElementalLogo from '@/assets/products-logos/icon-elemental.svg'
import HarvesterLogo from '@/assets/products-logos/icon-harvester.svg'
import FleetLogo from '@/assets/products-logos/icon-fleet.svg'
import useStore, { ThemeI } from '@/store/main.store'
import { useEffect } from 'react'
import { DocAndGitLinks } from '../DocAndGitLinks'
export const Header = () => {
  const { theme, updateTheme } = useStore((state) => state)

  const toggleTheme = () => {
    const toggleTheme = theme === 'dark' ? 'light' : 'dark'
    updateTheme(toggleTheme)
    document.getElementsByTagName('html')[0].setAttribute('class', toggleTheme)
    localStorage.setItem('theme', toggleTheme)
  }

  useEffect(() => {
    // Persist the theme in localStorage
    const persistedTheme = localStorage.getItem('theme') as ThemeI

    if (persistedTheme) {
      updateTheme(persistedTheme)
      document.getElementsByTagName('html')[0].setAttribute('class', persistedTheme)
    } else {
      document.getElementsByTagName('html')[0].setAttribute('class', theme)
      localStorage.setItem('theme', theme)
    }
  }, [theme, updateTheme])

  return (
    <div className='relative bg-primary-light text-white dark:bg-secondary-dark dark:text-white py-2'>
      <div className='grid grid-flow-row place-self-end md:grid-flow-row mx-auto 2xl:w-4/6'>
        {/* Main Header */}
        <div className='flex place-self-end md:place-self-end self-center gap-2 px-4 py-4'>
          <DocAndGitLinks />

          <div className='relative flex self-center align-middle md:ml-2 group hover:cursor-pointer'>
            <div className='p-2 border border-opacity-20 rounded-md'>
              <span className='hidden md:flex'>More from SUSE</span>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='flex md:hidden w-6 h-6'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
              </svg>
            </div>

            <div className='absolute -left-20 md:left-0 top-10 hidden group-hover:flex flex-col bg-primary-light bg-opacity-95  dark:bg-secondary-dark text-sm drop-shadow shadow-sm shadow- p-4 z-10 min-w-[180px] transition-all'>
              <a rel='nofollow noreferrer' href='https://rancher.com/' target='_blank' className='flex gap-2 hover:ml-2 transition-all'>
                <RancherLogoSVG className='w-4' />
                Rancher
              </a>

              <hr className='mt-2 mb-2 border-gray-400 border-opacity-20' />

              <a rel='nofollow noreferrer' href='https://elemental.docs.rancher.com/' target='_blank' className='flex py-2 gap-2 hover:ml-2 transition-all'>
                <img width={16} height={16} src={ElementalLogo.src} alt='' />
                Elemental
              </a>
              <a rel='nofollow noreferrer' href='https://fleet.rancher.io/' target='_blank' className='flex py-2 gap-2 hover:ml-2 transition-all'>
                <img width={20} height={20} src={FleetLogo.src} alt='' />
                Fleet
              </a>
              <a rel='nofollow noreferrer' href='https://harvesterhci.io/' target='_blank' className='flex py-2 gap-2 hover:ml-2 transition-all'>
                <img width={16} height={16} src={HarvesterLogo.src} alt='' />
                Harvester
              </a>

              <hr className='mt-2 mb-2 border-gray-400 border-opacity-20' />

              <a rel='nofollow noreferrer' href='https://opensource.suse.com/' target='_blank' className='flex gap-2 hover:ml-2 transition-all'>
                More projects...
              </a>
            </div>
          </div>

          <span className='self-center opacity-20 mx-2'>|</span>

          <button className='flex self-center px-2 h-8 bg-white rounded-full transition-all' onClick={toggleTheme}>
            <span className='self-center'>{theme === 'dark' ? '🌚' : '🌞' }</span>
          </button>
        </div>
      </div>
    </div>
  )
}
