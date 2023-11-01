import { motion } from 'framer-motion'
import { useState } from 'react'

interface CollapseItem {
  title: string
  description: string
  isEnable?: boolean
}

export const Collapse = ({ elements }: { elements: CollapseItem[] }) => {
  const [isOpen, setIsOpen] = useState(1)
  return (
    <div className='grid grif-flow-row'>
      {elements.map((ele, i) => (
        <CollapseItem key={i} id={i + 1} {...ele} isOpen={isOpen} setIsOpen={setIsOpen} />
      ))}
    </div>
  )
}

export const CollapseItem = ({ title, description, id, isOpen, setIsOpen }) => {
  const openItem = isOpen === id

  return (
    <div onClick={() => setIsOpen(id)}>
      <div className={`flex flex-row align-middle gap-2 border-t-2 ${openItem && 'border-green-500'} hover:cursor-pointer`}>
        <span className={`p-2 ${openItem ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-500'} font-bold text-2xl transition-all`}>{id}</span>
        <p className='place-self-center text-xl'>{title}</p>
      </div>
      {openItem && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className='px-10 py-4'>
          {description}
        </motion.div>
      )}
    </div>
  )
}
