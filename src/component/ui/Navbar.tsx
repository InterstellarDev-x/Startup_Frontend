import { motion } from "framer-motion"
import SlideAnimationButton from "./SlideAnimationButton"


const Navbar = () => {
  return (
    <div className="  navbar h-[20vh] w-full flex justify-between items-center pl-4 pr-4"> 
       <motion.img className="h-24 w-28 ml-10" src={"https://ecell-nita.vercel.app/assets/Logo-d844f2a8.png"}/>
       {/* <div className="text-2xl mr-2 font-normal">Submit Idea</div> */}
       <SlideAnimationButton/>
       </div>
  )
}

export default Navbar
