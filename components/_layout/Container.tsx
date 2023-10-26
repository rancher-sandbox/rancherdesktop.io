import { Footer } from './Footer'
import { Header } from './Header'

export const Container = ({ children }) => {
  return (
    <div className='grid grid-flow-row dark:bg-customDark dark:text-white'>
      <Header />
      <div className='flex-grow min-h-screen'>{children}</div>

      <Footer />
    </div>
  )
}
