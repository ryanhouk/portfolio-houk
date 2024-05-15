import { useState } from 'react'
import { motion } from 'framer-motion'
import MixtapeView from '../views/MixtapeView'
import MyStuffView from '../views/MyStuffView'

const Toggle = () => {
  const [isActive, setIsActive] = useState(true)

  return (
    <>
      <div className="flex items-center justify-center rounded-[9px] h-[28px] bg-[#767680]/[.24] mx-[14px] p-[2px]">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className={`text-white font-medium w-full text-[13px] h-full rounded-[7px] ${isActive ? 'bg-[#636366]' : ''}`}
          onClick={() => setIsActive(true)}>
          My Stuff
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className={`text-white font-medium w-full text-[13px] h-full rounded-[7px] ${!isActive ? 'bg-[#636366]' : ''}`}
          onClick={() => setIsActive(false)}>
          Mixtapes
        </motion.button>
      </div>

      {isActive ? (
        <div>
          <MyStuffView />
        </div>
      ) : (
        <div>
          <MixtapeView />
        </div>
      )}
    </>
  )
}

export default Toggle
