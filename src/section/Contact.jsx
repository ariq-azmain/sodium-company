'use client';
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import clsx from 'clsx';

import { EarthCanvas, StarsCanvas } from "@/canvas";
import { slideIn } from "@/utils/motion";
import {Button} from '@/components';


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // setLoading(true);

    // emailjs
    //   .send(
    //     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    //     {
    //       from_name: form.name,
    //       to_name: "SODIUM",
    //       from_email: form.email,
    //       to_email: "contact@sodium.com",
    //       message: form.message,
    //     },
    //     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);
    //       alert("Thank you. We will get back to you as soon as possible.");

    //       setForm({
    //         name: "",
    //         email: "",
    //         message: "",
    //       });
    //     },
    //     (error) => {
    //       setLoading(false);
    //       console.error(error);

    //       alert(`Ahh, something went wrong. Please try again. \n Error: ${error}`);
    //     }
    //   );
  };
  
  return (
      <div
        className='xl:mt-12 flex flex-col-reverse gap-10 overflow-hidden items-center'
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='bg-zinc-800 p-8 rounded-2xl w-10/12'
        >
          <p className="sm:text-[18px] text-[14px] text-gray-300 uppercase tracking-wider text-center">Get in touch</p>
          <h3
            className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center"
          >Contact.</h3>
          <br />
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8 items-center'
          >
            <label className='flex flex-col '>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className='bg-stone-700 selection:text-amber-500 selection:bg-zinc-700 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium'
                required
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className='bg-stone-700 selection:text-amber-500 selection:bg-zinc-700 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium'
                required
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                cols={25}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
                className='bg-stone-700 selection:text-amber-500 selection:bg-zinc-700 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium'
                required
              />
            </label>

            <Button
              type='submit'
              icon='/images/icons/magictouch.svg'
              markerFill="#00f0a2"
              containerClassName={loading ? "w-[120px]" : "w-[90px]"}
            >
              {loading ? "Sending..." : "Send"}
            </Button>
            <br />
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='2xl:h-[880px] 2xl:w-[880px] xl:h-[800px] xl:w-[900px] lg:h-[780px] md:h-[580px] sm:h-[480px] h-[330px] w-[100vw]'
        >
          <EarthCanvas />
        <StarsCanvas color="#e566a3" rotX={10} rotY={15} />
        </motion.div>
      </div>
  );
};

export default Contact
