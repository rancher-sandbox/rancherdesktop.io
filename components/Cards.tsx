import { motionListItems } from '@/assets/animations'
import { LinkSVG } from '@/assets/images'
import { motion } from 'framer-motion'

export const BulletPointCard = ({ item }) => {
  return (
    <motion.div variants={motionListItems} key={item} className='relative grid items-center p-4 text-secondary-dark bg-gray-100 font-bold'>
      <span className='flex gap-2 justify-start py-4'>
        <span className='mt-1'>{/* <CheckMarkSVG className='w-6 h-6 fill-current text-secondary-light' /> */}</span>
        <span className='text-xl italic text-center'>{item}</span>
      </span>
    </motion.div>
  )
}

interface GetStartedDownloadCardT {
  index: number
  title: string
  description?: string
  action?: {
    isEnable: boolean
    title: string
    url: string
  }
  externalLink?: {
    isEnable: boolean
    url: string
  }
}

export const GetStartedDownloadCard = ({ index, title, action, description, externalLink }: GetStartedDownloadCardT) => {
  return (
    <div className='flex flex-row justify-start gap-1' key={index}>
      <span className='text-secondary-light font-bold text-2xl -mt-1'>{index}</span>
      <div className='grid grid-flow-row place-content-start justify-items-start gap-2'>
        <span className='text-lg font-bold'>{title}</span>

        <p className='text-secondary-light'>
          {externalLink && externalLink.isEnable ? (
            <a className='flex gap-1 align-middle self-center hover:underline' href={externalLink.url} target='_blank' rel='noreferrer'>
              {description}
              <LinkSVG className='fill-current w-4' />
            </a>
          ) : (
            description
          )}
        </p>
        {action && action.isEnable && (
          <a className='p-2 bg-primary self-start text-xs font-bold' href={action.url} target='_blank' rel='noreferrer'>
            {action.title}
          </a>
        )}
      </div>
    </div>
  )
}
