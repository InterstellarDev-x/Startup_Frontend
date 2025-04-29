import { motion } from "framer-motion"

const Loader = () => {
  return (
    <div
     
    className='flex items-center justify-center h-auto '>
      <motion.div animate={{
        rotate : 360 
     }}
     
     transition={{
        duration : 1,
        repeat : Infinity,
        ease: 'linear'
     }} 
     className="relative w-14 h-14 border-4 border-t-4 border-blue-500 border-solid rounded-full">
        <motion.div 
        animate={{

            rotate: 2, 
            opacity : [1, 0.5 , 1]
        }} 
        transition={{
            duration: 1,
            repeat : Infinity,
            ease : 'linear'
        }}  
        
        style={{borderTopColor : "transparent"}}
        
        className="absolute inset-0 border-4 border-blue-300 border-solid rounded-full"></motion.div>
      </motion.div>
    </div>
  )
}

export default Loader
