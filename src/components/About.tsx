import { motion } from "framer-motion"
import { fadeIn } from "./variants"
import Home from "./Home"



function About() {

  return (

    <div>
    <Home />
     <div className="sm:my-[9rem] my-[6rem] " >
      
        <h1 className="text-3xl sm:px-auto sm:text-3xl md:text-5xl font-sansOut  font-semibold text-center text-black capitalize ">
          I Know That <span className="text-orange-500 font-semibold"> Good Apps</span>
        </h1>
        <h1 className="text-3xl sm:text-3xl md:text-5xl  font-sansOut font-semibold text-center text-black capitalize ">
      Means Good Business
        </h1>
      
        <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 justify-items-center gap-5">
          <div className="  shadow-gray-400 border-xl w-[250px] m-[30px] border border-xl shadow-2xl p-5 rounded-lg">
            <img src="image3.jpg" className=" ease-in-out hover:scale-110 transition-transform duration-300" alt="" />
            <h1 className="font-bold DMsans">Backend Development</h1>
            <p className="mt-[10px] text-gray-600 text-sm ml-[13px] text-left font- leading-relaxed">Strong skills in building scalable and maintainable web applications using RESTful as well as GraphQL APIs.</p>
          </div>
          <div className="  shadow-gray-400 border-xl w-[250px] m-[30px] border border-xl shadow-2xl p-5 rounded-lg">
            <img src="./image6.jpg" className=" ease-in-out hover:scale-110 transition-transform duration-300" alt="" />
            <h1 className="font-bold DMsans">Fluency With Dev Tools</h1>
            <p className="mt-[10px] text-gray-600 text-sm  ml-[10px] text-left font- leading-relaxed">Proficiency in Dev Tools such as VsCode, Git, CI/CD. These tools aid in tasks such as writing, debugging, testing, and deploying code.</p>
          </div>
          <div className="  shadow-gray-400 border-xl w-[250px] m-[30px] border border-xl shadow-2xl p-5 rounded-lg">
            <img src="./image4.jpg" className=" ease-in-out hover:scale-110 transition-transform duration-300" alt="" />
            <h1 className="font-bold DMsans">Frontend Development</h1>
            <p className="mt-[10px] text-gray-600 text-sm  ml-[13px] text-left font- leading-relaxed">Skilled in creating complex UI designs and implementing them in efficient, reusable code while adhering to best practices and standards.</p>
          </div>

          <div className="  shadow-gray-400 border-xl  md:hidden block w-[250px] m-[30px] border border-xl shadow-2xl p-5 rounded-lg">
          <img src="./image5.jpg" className=" ease-in-out hover:scale-110 transition-transform duration-300" alt="" />
            <h1 className="font-bold DMsans">Database Technologies</h1>
            <p className="mt-[10px] text-gray-600 text-sm  ml-[10px] text-left font- leading-relaxed">Experience in designing and optimizing database schemas, writing complex queries, and implementing efficient indexing strategies.</p>
            </div>

        </motion.div>
          <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }} className="  shadow-gray-400 border-xl w-[250px] hidden md:block md:mr-auto md:ml-auto m-[30px] border border-xl shadow-2xl p-5 rounded-lg">
            <img src="./image5.jpg" className=" ease-in-out hover:scale-110 transition-transform duration-300" alt="" />
            <h1 className="font-bold DMsans">Database Technologies</h1>
            <p className="mt-[10px] text-gray-600 text-sm  ml-[10px] text-left font- leading-relaxed">Experience in designing and optimizing database schemas, writing complex queries, and implementing efficient indexing strategies.</p>
          </motion.div>
      </div>
    </div>
  )
}

export default About