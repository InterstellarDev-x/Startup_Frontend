import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../../../ui/Navbar";





const scrollToBottom = () => {

  window.scrollTo({
    top: 2300,
    behavior: 'smooth', 
  });
};

const Landing = () => {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 1000], [1, 2]);
  // const opacity = useTransform(scrollY, [0, 1000], [1, 0]);

  return (
    <div className="h-screen flex items-center justify-center overflow-hidden relative">
      {/* Text div */}
      <div className="absolute inset-0   flex-col z-10 text-white ">
        <Navbar />
        <div className="Hero-Section h-[40vh] w-full justify-center items-center flex flex-col">
          <motion.div
            className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-4 font-Brand bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-center px-2"
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            whileInView={{
              scale: 1.1,
            }}
          >
            {" "}
            Submit Your Startup Idea
          </motion.div>

          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="text-md md:text-lg lg:text-xl font-medium font-SemiBrand text-center px-4"
          >
            Share your innovative startup concepts with the E-Cell community and
            get feedback from peers and mentors.
          </motion.div>
        </div>
        <motion.div
          className="button flex justify-center"
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.2,
          }}
        >
          {" "}
          <div className="p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-md w-fit mx-auto">
            <button className= " active:scale-90 bg-black text-white py-3 px-6 md:py-4 md:px-8 font-SemiBrand text-lg md:text-xl rounded-md" onClick={scrollToBottom}>
              Submit Your Idea
            </button>
          </div>
          
        </motion.div>
        <motion.div 
          
        
  
        whileInView={{
          opacity:1,
          y: [0 , 20 , 0]
        }}
         
        transition={{

          duration:2,
          repeat : Infinity
        }}

         className="flex justify-center text-sm md:text-base h-[20vh] md:h-[30vh] w-full items-center text-white">Scroll Down</motion.div 
        >
        
      </div>

      <motion.img
        className=" shadow-lg inset-0 w-full h-full object-cover "
        // src={"https://assets.lummi.ai/assets/QmU5fboJ9SV2nrsmhhLW7QXHCSwjjWXHvCtAD7MfAkGeNW?auto=format&w=1500"}
        src={
          "https://images.unsplash.com/photo-1534156039819-c89418369a4f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        style={{ scale  }}
      />
    </div>
  );
};

export default Landing;
