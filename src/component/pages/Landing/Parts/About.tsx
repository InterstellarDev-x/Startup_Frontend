import { motion } from "framer-motion"

const About = () => {
  return (
    <div className='h-[80vh] w-full flex justify-center items-center flex-col pl-12 pr-12'>
      <div className="h-[30%] w-full flex justify-center  items-center "> <h1 className="text-center font-SemiHeadLine text-2xl md:text-4xl">About us</h1></div>
      <motion.div  className="font-SemiBrand text-center text-base md:text-lg lg:text-xl px-4 md:px-12 h-[60%]" 
        initial={{
            y: 100,
            opacity:0
        }}
        whileInView={{
            y:0,
            opacity:1,
            scale:1.05
        }}
        transition={{
            duration:1
        }}>
        <p className="leading-7 md:leading-9 font-LineParagraph" >Entrepreneurship Cell NIT Agartala is a voluntary organization dedicated to encouraging a thriving start-up culture and building an entrepreneurial environment. We take great pride in organizing a series of dynamic events that provide unparalleled opportunities for skill development and networking. Our past events like the Startup Expo, IPL Auction, Content Creation Conclave and others, offer the perfect platform for networking, learning, and honing essential skills, ensuring that every participant finds something uniquely valuable. At E-Cell, we believe that the path to success lies in continuous learning. To that end, we regularly host distinguished speakers from diverse domains who generously impart their insights and experiences in captivating keynote sessions. These sessions are not just educational, they are powerful beacons of inspiration that ignite the path to success for our students. Furthermore, E-Cell NITA is privileged to boast a robust network of accomplished alumni and industry experts, ever-eager to nurture your ideas and propel your entrepreneurial voyage into the boundless realms of possibility.</p></motion.div>
    </div>
  )
}

export default About
