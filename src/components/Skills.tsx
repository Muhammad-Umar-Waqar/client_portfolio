// import { fadeIn } from "./variants";
// import { motion } from "framer-motion";

// function Skills() {
//   return (

//     <div className=" flex flex-col items-center justify-center  sm:my-[9rem] my-[6rem]">
//       <h1 className="text-3xl sm:text-4xl md:text-5xl font-DMsans font-semibold text-center text-black capitalize ">Skills & <span className="text-orange-500 font-semibold">Experience</span></h1>

//       <div className="flex flex-col md:flex-row mt-[64px] md:gap-20 items-center">
//       <motion.div variants={fadeIn("right", 0.5)}
//               initial="hidden"
//               whileInView={"show"}
//               viewport={{ once: false, amount: 0.4 }}  className=" grid grid-cols-2 sm:grid-cols-3  gap-10  justify-items-center">
//       < >
//       <div>
//       <img src="./git.webp" className="rounded-full  bg-white h-[70px] w-auto " alt="" />
//       <h1>Git</h1>
//       </div>
      
     

//       <div >
//       <img src="./js.webp" className="rounded-full  bg-gray-100 shadow-md h-[70px] w-auto " alt="" />
//       <h1>Javascript</h1>
//       </div >
//       <div>
//       <img src="./tailwind.png" className="rounded-full shadow-md h-[70px] w-auto " alt="" />
//       <h1>Tailwind</h1>
//       </div>
//       <div>
//       <img src="./ts.webp" className="rounded-full  bg-gray-100 shadow-md h-[70px] w-auto " alt="" />
//       <h1>TypeScript</h1>
//       </div>
//       <div>
//       <img src="./react.webp" className="rounded-full  bg-gray-100 shadow-md h-[70px] w-auto " alt="" />
//       <h1>React</h1>
//       </div>
//       <div>
//       <img src="./next.webp" className="rounded-full  bg-gray-100  shadow-2xl  h-[70px] w-auto " alt="" />
//       <h1>Next Js</h1>
//       </div>
//         </ >
//       </motion.div>
//         <motion.div variants={fadeIn("left", 0.5)}
//               initial="hidden"
//               whileInView={"show"}
//               viewport={{ once: false, amount: 0.4 }}  className=" md:mt-[0px] mt-[50px]">
//           {/* <div>
//             <h1 className="text-blue-900 text-xl leading-10 ">2023<span className="  text-black text-xl DMsans"  > Full Stack Developer</span></h1>            
//           </div> */}
//           <div>
//             <h1 className="text-xl leading-10" >Front End Developer Intern</h1>
          
//           </div>
//           <div>
//             <h1 className="text-black text-xl leading-10" >At<span className=" text-xl DMsans text-blue-900"  > YoungDevIntern</span></h1>
//           </div>
//         </motion.div>
//       </div>
//       <a
//   className="mt-5 inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-colors duration-200"
//   href="/myCV.pdf"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Download CV
// </a>

//       </div>

//   )
// }

// export default Skills














// import {  useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// function Skills() {
//   // Dummy experiences array – add more experiences as needed
//   const experiences = [
//     {
//       id: 1,
//       title: "Front End Developer Intern",
//       company: "YoungDevIntern",
//       icons: [
//         { src: "./git.webp", alt: "Git", label: "Git" },
//         { src: "./js.webp", alt: "Javascript", label: "Javascript" },
//         { src: "./tailwind.png", alt: "Tailwind", label: "Tailwind" },
//         { src: "./ts.webp", alt: "TypeScript", label: "TypeScript" },
//       ],
//     },
//     {
//       id: 2,
//       title: "Backend Developer",
//       company: "Coderatory",
//       icons: [
//         { src: "./ts.webp", alt: "TypeScript", label: "TypeScript" },
//         { src: "./tailwind.png", alt: "Tailwind", label: "Tailwind" },
//         { src: "./next.webp", alt: "Next Js", label: "Next Js" },
//         { src: "./react.webp", alt: "React", label: "React" },
//       ],
//     },
//     {
//       id: 3,
//       title: "Associate MERN Stack Dev.",
//       company: "IOTFIY",
//       icons: [
//         { src: "./js.webp", alt: "Javascript", label: "Javascript" },
//         { src: "./tailwind.png", alt: "Tailwind", label: "Tailwind" },
//         { src: "./ts.webp", alt: "TypeScript", label: "TypeScript" },
//         { src: "./react.webp", alt: "React", label: "React" },
//       ],
//     },
//   ];

//   // current holds the index; direction holds animation direction (1 for next, -1 for previous)
//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const nextExperience = () => {
//     setDirection(1);
//     setCurrent((prev) => (prev + 1) % experiences.length);

//   };

//   const prevExperience = () => {
//     setDirection(-1);
//     setCurrent((prev) => (prev - 1 + experiences.length) % experiences.length);
//   };


//   return (
//     <div className="flex flex-col items-center justify-center sm:my-[9rem] my-[6rem] px-4">
//       <h1 className="text-3xl sm:text-4xl md:text-5xl font-DMsans font-semibold text-center text-black capitalize">
//         Skills & <span className="text-orange-500 font-semibold">Experience</span>
//       </h1>

//       <div className="relative mt-[64px] w-full max-w-4xl">
//         <motion.div
//           className="min-h-60 backdrop-blur-lg border border-gray-300 rounded-xl p-8 shadow-xl relative"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={experiences[current].id}
//               initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
//               transition={{ duration: 0.5 }}
//               className="flex flex-col md:flex-row items-center justify-around"
//             >
//               {/* Icons Section */}
//               <div className="grid grid-cols-2 gap-6 justify-items-center">
//                 {experiences[current].icons.map((icon, index) => (
//                   <div key={index} className="flex flex-col items-center">
//                     <img
//                       src={icon.src}
//                       alt={icon.alt}
//                       className="rounded-full bg-gray-100 shadow-md h-[70px] w-auto"
//                     />
//                     <h1 className="mt-2 text-sm">{icon.label}</h1>
//                   </div>
//                 ))}
//               </div>

//               {/* Experience Details */}
//               <div className="mt-8 md:mt-0 text-center md:text-left">
//                 <h1 className="text-xl font-semibold leading-10">
//                   {experiences[current].title}
//                 </h1>
//                 <h1 className="text-black text-xl leading-10">
//                   At{" "}
//                   <span className="text-xl font-DMsans text-blue-900">
//                     {experiences[current].company}
//                   </span>
//                 </h1>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Carousel Arrow Icons inside the card */}
//           <button
//             onClick={prevExperience}
//             className="absolute left-4 top-1/2 transform -translate-y-1/2 sm:bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200 rounded-full p-3 shadow"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>
//           <button
//             onClick={nextExperience}
//             className="absolute right-4 top-1/2 transform -translate-y-1/2 sm:bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200 rounded-full p-3 shadow"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </motion.div>
//       </div>

//       <a
//         className="mt-8 inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-colors duration-200"
//         href="/myCV.pdf"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Download CV
//       </a>
//     </div>
//   );
// }

// export default Skills;















import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export function Skills() {
  // Dummy experiences array – add more experiences as needed
  const experiences = [
    {
      id: 1,
      title: "Front End Developer Intern",
      company: "YoungDevIntern",
      icons: [
        { src: "./git.webp", alt: "Git", label: "Git" },
        { src: "./js.webp", alt: "Javascript", label: "Javascript" },
        { src: "./tailwind.png", alt: "Tailwind", label: "Tailwind" },
        { src: "./ts.webp", alt: "TypeScript", label: "TypeScript" },
      ],
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Coderatory",
      icons: [
        { src: "./ts.webp", alt: "TypeScript", label: "TypeScript" },
        { src: "./tailwind.png", alt: "Tailwind", label: "Tailwind" },
        { src: "./next.webp", alt: "Next Js", label: "Next Js" },
        { src: "./react.webp", alt: "React", label: "React" },
      ],
    },
    {
      id: 3,
      title: "Associate MERN Stack Dev.",
      company: "IOTFIY",
      icons: [
        { src: "./js.webp", alt: "Javascript", label: "Javascript" },
        { src: "./tailwind.png", alt: "Tailwind", label: "Tailwind" },
        { src: "./ts.webp", alt: "TypeScript", label: "TypeScript" },
        { src: "./react.webp", alt: "React", label: "React" },
      ],
    },
  ];

  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <div className="flex flex-col items-center justify-center sm:my-[9rem] my-[6rem] px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-sansOut font-semibold text-center text-black capitalize">
        Skills & <span className="text-orange-500 font-semibold">Experience</span>
      </h1>

      <div className="relative  mt-[64px] w-full  max-w-4xl  ">
        <Carousel  setApi={setApi} className="w-full ">
          <CarouselContent>
            {experiences.map((exp) => (
              <CarouselItem key={exp.id} className="w-full">
                <div className=" backdrop-blur-lg border min-h-[28rem] sm:min-h-[auto] border-gray-300 rounded-xl p-8 shadow-xl relative">
                  <div className="flex flex-col md:flex-row items-center justify-around">
                    {/* Icons Section */}
                    <div className="grid grid-cols-2 gap-6 justify-items-center">
                      {exp.icons.map((icon, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <img
                            src={icon.src}
                            alt={icon.alt}
                            className="rounded-full bg-gray-100 shadow-md h-[70px] w-auto"
                          />
                          <h1 className="mt-2 text-sm">{icon.label}</h1>
                        </div>
                      ))}
                    </div>
                    {/* Experience Details */}
                    <div className="mt-8 md:mt-0 text-center ">
                      <h1 className="text-xl font-semibold leading-10">
                        {exp.title}
                      </h1>
                      <h1 className="text-black text-xl leading-10">
                        At{" "}
                        <span className="text-xl font-DMsans text-blue-900">
                          {exp.company}
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Carousel Navigation Arrows */}
          <CarouselPrevious className="sm:bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200 rounded-full p-3 shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </CarouselPrevious>
          <CarouselNext className="sm:bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200 rounded-full p-3 shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </CarouselNext>
        </Carousel>
      </div>

      <a
        className="mt-8 inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-colors duration-200"
        href="/myCV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download CV
      </a>
    </div>
  );
}

export default Skills;
