import { fadeIn } from "./variants";
import { motion } from "framer-motion";

function Skills() {
  return (

    <div className=" flex flex-col items-center justify-center md:mt-[200px] mt-[100px] md:h-[70vh] mb-[60px]" id="skills">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-DMsans font-semibold text-center text-black capitalize">Skills & Experience</h1>

      <div className="flex flex-col md:flex-row mt-[50px] md:gap-20 items-center">
      <motion.div variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}  className=" grid grid-cols-2 sm:grid-cols-3  gap-10 mt-10 justify-items-center">
      < >
      <div>
      <img src="./git.webp" className="rounded-full  bg-white h-[70px] w-auto " alt="" />
      <h1>Git</h1>
      </div>
      
     

      <div >
      <img src="./js.webp" className="rounded-full  bg-gray-100 shadow-md h-[70px] w-auto " alt="" />
      <h1>Javascript</h1>
      </div >
      <div>
      <img src="./tailwind.png" className="rounded-full shadow-md h-[70px] w-auto " alt="" />
      <h1>Tailwind</h1>
      </div>
      <div>
      <img src="./ts.webp" className="rounded-full  bg-gray-100 shadow-md h-[70px] w-auto " alt="" />
      <h1>TypeScript</h1>
      </div>
      <div>
      <img src="./react.webp" className="rounded-full  bg-gray-100 shadow-md h-[70px] w-auto " alt="" />
      <h1>React</h1>
      </div>
      <div>
      <img src="./next.webp" className="rounded-full  bg-gray-100  shadow-2xl  h-[70px] w-auto " alt="" />
      <h1>Next Js</h1>
      </div>
        </ >
      </motion.div>
        <motion.div variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}  className=" md:mt-[0px] mt-[50px]">
          {/* <div>
            <h1 className="text-blue-900 text-xl leading-10 ">2023<span className="  text-black text-xl DMsans"  > Full Stack Developer</span></h1>            
          </div> */}
          <div>
            <h1 className="text-blue-900 text-xl leading-10" >2024 <span className="text-black text-xl DMsans"  >Front End Developer Intern</span></h1>
          
          </div>
          <div>
            <h1 className="text-black text-xl leading-10" >At<span className=" text-xl DMsans text-blue-900"  > YoungDevIntern</span></h1>
          </div>
        </motion.div>
      </div>
      </div>

  )
}

export default Skills