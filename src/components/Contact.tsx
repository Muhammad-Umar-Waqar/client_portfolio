import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useRef, useState } from "react"; // Import useRef
import { useForm } from "react-hook-form";
import { fadeIn } from "./variants";
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null); // Initialize useRef with null
const [loading, setLoading] = useState(false)


const sendEmail = (_data: any, resetForm: () => void) => {
  setLoading(true);
  emailjs
    .sendForm('service_s0tfb9m', 'template_kbe18nf', formRef.current!, {
      publicKey: '_inDmGHuLEo18yunJ',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        resetForm();
        toast.success("Message Sent Successfully!", {
          position: "top-right"
        });
      },
      (error) => {
        toast.error("Email Not Sent !", {
          position: "top-right"
        });
        console.log('FAILED to Send Email...', error);
      }
    )
    .finally(() => {
      setLoading(false); // Set loading to false regardless of success or failure
    });
};


  const onSubmit = (data: any) => {
    
    sendEmail(data, resetForm); // Send email using EmailJS
   
  };

  const resetForm = () => {
    formRef.current?.reset(); // Reset the form using formRef.current
  };

  const { register, handleSubmit } = useForm();

  return (
    <div className="mt-[100px]" id="contact">
      <div className="text-3xl sm:text-4xl md:text-5xl font-DMsans font-semibold text-center text-black capitalize ">
        Take A <span className="text-blue-900">Coffee</span> &{" "}
        <span className="text-blue-900">Connect</span> With Me
      </div>
      <div className="flex  md:flex-row flex-col  items-center justify-center md:space-x-10 mt-[64px]">
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
        >
          <button className=" shadow-2xl flex bg-pink-50 h-[70px] min-w-[290px]   rounded-xl items-center p-[16px]">
            <img
              src="./email.jpg"
              className="h-[30px] w-auto mr-2"
              alt=""
            />
            <a href="mailto:mohammthegreat@gmail.com">
              mohammthegreat@gmail.com
            </a>
          </button>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
        >
          <button className="  shadow-2xl flex bg-blue-50 h-[70px] min-w-[290px] md:mt-[0] mt-[20px]   rounded-xl items-center p-[16px]">
            <img
              src="./mobile.jpg"
              className="h-[30px] w-auto mr-2"
              alt=""
            />
            <h1>+92 312-5321226 </h1>
          </button>
        </motion.div>
      </div>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 items-center justify-center mt-[70px]">
          <div>
            <input
              {...register("from_name")}
              name="from_name"
              type="text"
              placeholder="Your Name"
              className="md:w-[650px] w-[300px] sm:w-[500px] p-[15px]  rounded-xl bg-gray-100 outline-none"
            />
          </div>
          <div>
          <input
  {...register("from_email", {
    required: "Email is required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Invalid email address"
    }
  })}
  name="from_email"
  type="email"
  placeholder="Your Email"
  className="md:w-[650px] w-[300px] sm:w-[500px] p-[15px] rounded-xl bg-gray-100 outline-none"
/>

          </div>
          <div>
            <textarea
              {...register("message")}
              name="message"
              placeholder="your message"
              className="md:w-[650px] w-[300px] sm:w-[500px] rounded-xl p-[15px] bg-gray-100 outline-none"
              cols={10}
              rows={7}
            />
          </div>
          <div>
            <Button
              type="submit"
              variant="destructive"
              className="p-[5px ] h-[50px] mb-[60px] hover:bg-red-700"
            >
              {loading === true ? "Sending Mesage...":"Send Message"}
            </Button>
          </div>
        </div>
      </form>
      {/* <p className="m-50px">{data}</p> */}
       <ToastContainer/>
    </div>
  );
}

export default Contact;
