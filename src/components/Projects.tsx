import { Button } from "@/components/ui/button";
import axios from "axios";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fadeIn } from "./variants";


function Projects() {
  const [data, setData] = useState<Project[]>([]);
  const [filteredData, setFilteredData] = useState<Project[]>([]);

  useEffect(() => {
    axios.get("./Projects.json")
      .then(res => {
        const data = res.data;
        setData(data);
        setFilteredData(data);
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
      });
  }, []);

  function handleAll() {
    setFilteredData(data);
  }

  interface Project {
    image: string;
    title: string;
    description: string;
    category: string;
    hyperlink: string;
  }

  function handleFilter(category: string) {
    const filtered = data.filter(item => item.category === category);
    setFilteredData(filtered);
  }

  return (
    <div id="projects" className="mt-[100px] flex flex-col justify-center items-center m-4">
      <div
        className="text-3xl sm:text-4xl md:text-5xl font-DMsans font-semibold text-center text-black capitalize ">
        My Creative <span className="text-blue-800"> Portfolio</span> Section
      </div>
      <div className="mt-[50px] flex">
        <div className="grid grid-cols-2 sm:grid-cols-4    gap-2">
          
            <Button className="" onClick={() => handleFilter('React')}>React</Button>

            <Button className="mx-[10px]" onClick={() => handleFilter('Next')}>Next Js</Button>
            
          
            <Button className="" onClick={() => handleFilter('js')}>Javascript</Button>
            
          
            <Button className="mx-[10px]" >All</Button>
         
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 justify-items-center gap-5">
          {filteredData.map((item, index) => (
          <motion.div
  variants={fadeIn("up", 0.6)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount: 0.4 }}
  key={index}
  className="relative w-[250px] m-[30px] border border-xl shadow-2xl shadow-gray-400 p-5 rounded-lg"
>
  <a href={item.hyperlink} className="relative block">
    <img
      src={item.image}
      alt={item.title}
      className="h-[250px] rounded-lg object-cover object-center mb-[10px] ease-in-out hover:scale-110 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-black opacity-0 rounded-lg  hover:opacity-50 transition-opacity duration-300"></div>
    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
      <a href={item.hyperlink} className="border-2 border-solid border-white text-white px-4 py-2 rounded-md transition-colors duration-300">
        Visit
      </a>
    </div>
  </a>
  
  <a href={item.hyperlink}>
    <h1 className="font-bold DMsans" rel="noopener noreferrer">{item.title}</h1>
  </a>
  <p className="mt-[10px] text-gray-600 text-sm ml-[13px] text-left font- leading-relaxed">{item.description}</p>
</motion.div>

        
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;