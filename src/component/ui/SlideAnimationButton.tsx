import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";
import { FaBars } from 'react-icons/fa'
import { Link } from "react-router-dom";

const menuVariant = {
    open : {x:"0" },
    close : {x:"110%"}
}

const SlideAnimationButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <div className="p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-md flex justify-center items-center">
            <button className="bg-black text-white py-2 px-4 font-SemiBrand text-xl rounded-md flex items-center justify-center " onClick={()=>setIsOpen(cur => !cur)}>
             <FaBars className="text-2xl"/>
            </button>
          </div>
  <AnimatePresence>
      <motion.div className="fixed top-0 right-0 w-64 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500/90 backdrop-blur-md h-full z-50 p-4 flex flex-col " 
      variants={menuVariant}
      initial="close" 
      animate={isOpen ? "open" : "close"}
      transition={{
         ease: 'linear'
      }}>
          <div className="w-full flex justify-end md:mt-12 md:pr-6">  <button className="text-2xl text-white" onClick={() => setIsOpen((cur) => !cur)}><AiOutlineClose/></button> </div>
          <ul className="flex flex-col gap-4 text-white font-SemiBrand text-lg mt-8">
          <motion.li  

          initial={{
            x:50,
            opacity: 0
          }}

          whileInView={{
            x:0,
            opacity:1
          }}

          whileHover={{
            scale: 1.1
          }}

          whileTap={{
            scale: 0.8
          }}

          transition={{
            duration: .5,
             ease : 'easeInOut'
          }}
          
          className="px-4 py-2 border border-white rounded-md text-center">
              <Link to="https://www.ecellnita.in/" className="block w-full h-full">Ecell</Link>
            </motion.li>
            <motion.li
            initial={{
              x:50,
              opacity: 0
            }}

            whileTap={{
              scale: 0.8
            }}
  
            whileInView={{
              x:0,
              opacity:1
            }}

            whileHover={{
              scale: 1.1
            }}
  
            transition={{
              duration: .5,
               ease : 'easeInOut'
            }} 
            className="px-4 py-2 border border-white rounded-md text-center">
              <Link to="https://www.youtube.com/" className="block w-full h-full">X</Link>
            </motion.li>
            <motion.li
            
            initial={{
              x:50,
              opacity: 0
            }}

            whileTap={{
              scale: 0.8
            }}
  
            whileInView={{
              x:0,
              opacity:1
            }}

            whileHover={{
              scale: 1.1
            }}
  
            transition={{
              duration: .5,
               ease : 'easeInOut'
            }}
            className="px-4 py-2 border border-white rounded-md text-center" >
              <Link to="/about" className="block w-full h-full">Youtube</Link>
            </motion.li>
            
            <motion.li
               initial={{
                x:50,
                opacity: 0
              }}
    
              whileHover={{
                scale: 1.1
              }}

              whileTap={{
                scale: 0.8
              }}

              whileInView={{
                x:0,
                opacity:1
              }}
    
              transition={{
                duration: .5,
                 ease : 'easeInOut'
              }}
            className="px-4 py-2 border border-white rounded-md text-center">
              <Link to="/content" className="block w-full h-full">Content</Link>
            </motion.li>
            <motion.li
               initial={{
                x:50,
                opacity: 0
              }}
    
              whileInView={{
                x:0,
                opacity:1
              }}

              whileTap={{
                scale: 0.8
              }}

              whileHover={{
                scale: 1.1
              }}
    
              transition={{
                duration: .5,
                 ease : 'easeInOut'
              }}
            className="px-4 py-2 border border-white rounded-md text-center">
              <Link to="/signin" className="block w-full h-full">Admin Login</Link>
            </motion.li>
            <motion.li
               initial={{
                x:50,
                opacity: 0
              }}
    
              whileInView={{
                x:0,
                opacity:1
              }}
              whileTap={{
                scale: 0.8
              }}
            

              whileFocus={{
                scale: 0.8
              }}

              whileHover={{
                scale: 1.1
              }}
    
              transition={{
                duration: .5,
                 ease : 'easeInOut'
              }}
            className="px-4 py-2 border border-white rounded-md text-center">
              <Link to="" className="block w-full h-full">Try</Link>
            </motion.li>
          </ul>

      </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SlideAnimationButton;
