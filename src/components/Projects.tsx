// import { Button } from "@/components/ui/button";
import axios from "axios";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fadeIn } from "./variants";


function Projects() {
  const [data, setData] = useState<Project[]>([]);
  const [filteredData, setFilteredData] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');


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
    setActiveCategory('All');
  }

  interface Project {
    githubLink: string | undefined;
    image: string;
    title: string;
    description: string;
    category: string;
    hyperlink: string;
  }

  function handleFilter(category: string) {
    const filtered = data.filter(item => item.category === category);
    setFilteredData(filtered);
    setActiveCategory(category)
  }

  // Define a function to return the appropriate button classes
  const buttonClasses = (btnCategory: string) => {
    const baseClasses = "px-4 py-2 rounded transition-colors duration-200";
    // Inactive buttons: gray background, matching your hero section's gray theme
    const inactiveClasses = "bg-gray-200 text-gray-700 hover:bg-gray-300";
    // Active buttons: use orange-500 for headings or indigo if you prefer
    const activeClasses = "bg-orange-500 text-white";
    return `${baseClasses} ${activeCategory === btnCategory ? activeClasses : inactiveClasses}`;
  };// Define a function to return the appropriate button classes


  return (
    <div className="flex flex-col justify-center items-center sm:my-[9rem] my-[6rem]">
      <div
        className="text-3xl sm:text-4xl md:text-5xl font-sansOut font-semibold text-center text-black capitalize ">
        My Creative <span className="text-orange-500"> Portfolio</span> Section
      </div>
      <div className="mt-[64px] flex">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      <button className={buttonClasses("All")} onClick={handleAll}>
        All
      </button>
      <button className={buttonClasses("React")} onClick={() => handleFilter('React')}>
        React
      </button>
      <button className={buttonClasses("Next")} onClick={() => handleFilter('Next')}>
        Next Js
      </button>
      <button className={buttonClasses("js")} onClick={() => handleFilter('js')}>
        Javascript
      </button>
    </div>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4 sm:mt-10 justify-items-center gap-5">
          {filteredData.map((item, index) => (
          <motion.div
  variants={fadeIn("up", 0.6)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount: 0.4 }}
  key={index}
  className="relative w-[250px] m-[30px] border border-xl shadow-2xl shadow-gray-400 p-5 rounded-lg"
>
  <div className="relative block">
    <img
      src={item.image}
      alt={item.title}
      className="h-[250px] rounded-lg object-cover object-center mb-[10px] ease-in-out hover:scale-110 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-black opacity-0 rounded-lg  hover:opacity-50 transition-opacity duration-300"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
      <a href={item.hyperlink} className="border-2 border-solid border-white text-white px-4 py-2 rounded-md transition-colors transform hover:scale-110 duration-300 ease-in-out">
      <img src="/liveLink.svg" alt="github" /> 
      </a>
      <a href={item.githubLink} className="border-2 border-solid border-white text-white px-4 py-2 rounded-md transition-colors transform hover:scale-110 duration-300 ease-in-out">
        <img src="/github.svg" alt="github" />
      </a>
    </div>
  </div>
  
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