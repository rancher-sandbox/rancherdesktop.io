import { motion } from 'framer-motion'
import React from 'react'
import ReactPlayer from 'react-player'

export const VideoBox = ({ url }: { url: string }) => {
  return (
    <motion.div
      initial={{
        x: -100,
        opacity: 0,
      }}
      animate={{ x: 0, opacity: 1 }}
      className='grid  grid-gap-4 bg-blue-500 text-white '
    >
      <div className='relative'>
        <ReactPlayer width='100%' url={url} controls={true} />
        <div className='absolute w-full bottom-0 h-2'>
          <motion.div
            initial={{
              x: -200,
              opacity: 1,
            }}
            animate={{ x: 0, opacity: 1 }}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  )
}
