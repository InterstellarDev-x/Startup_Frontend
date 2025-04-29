import { motion, useScroll, useTransform } from "framer-motion";

import { FaGlobeAmericas, FaLightbulb, FaHandshake, FaChartLine } from "react-icons/fa";
import CardComponent from "../../../ui/CardComponent";

const WhyJoin = () => {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [800, 2000], [2, 1]);
//   const opacity = useTransform(scrollY, [1000, 2000], [1, 0]);

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative px-4 py-12">
      {/* Text div */}
      <div className="absolute inset-0 flex-col z-10 text-white">
        <div className="h-fit w-full flex flex-col items-center">
          <h1 className="font-SemiHeadLine text-5xl text-center mt-12 mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Why Submit Your Startup Idea to E-Cell?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl px-4">
            <CardComponent
              title="Exposure to Real-World Opportunities"
              body="E-Cell NIT Agartala bridges the gap between ideas and reality by hosting startup summits, pitch competitions, and networking events. You’ll have the chance to interact with seasoned entrepreneurs, industry leaders, and potential investors, giving your startup the visibility it needs to thrive in the competitive ecosystem."
              icon={<FaGlobeAmericas />}
            />
            <CardComponent
              title="Support for Innovation and Incubation"
              body="Turn your vision into reality with E-Cell’s comprehensive incubation support. From access to funding opportunities and mentorship to state-of-the-art technical resources, we provide everything you need to develop your startup idea into a market-ready product, ensuring you’re supported at every step of your entrepreneurial journey."
              icon={<FaLightbulb />}
            />
            <CardComponent
              title="Build a Strong Entrepreneurial Network"
              body="At E-Cell NIT Agartala, you’ll join a vibrant community of driven innovators and future leaders. Collaborate with peers, exchange groundbreaking ideas, and form partnerships that can propel your startup forward. Our network empowers you to build connections that last, fostering growth and innovation."
              icon={<FaHandshake />}
            />
            <CardComponent
              title="Showcase Your Idea to Investors"
              body="Equip yourself with the tools to succeed through E-Cell’s expertly curated workshops, training sessions, and mentorship programs. Learn essential entrepreneurial skills like effective pitching, business strategy, and market analysis, ensuring you’re well-prepared to navigate the challenges of building and scaling your startup."
              icon={<FaChartLine />}
            />
          </div>
        </div>
      </div>

      <motion.img
        className="absolute z-0 w-full h-full object-cover"
        // src={"https://assets.lummi.ai/assets/QmU5fboJ9SV2nrsmhhLW7QXHCSwjjWXHvCtAD7MfAkGeNW?auto=format&w=1500"}
        src={
          "https://images.unsplash.com/photo-1534156039819-c89418369a4f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        style={{ scale   }}
      />
    </div>
  );
};

export default WhyJoin;
