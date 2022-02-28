// put links to linkedin and email
// put form
import { ChatAlt2Icon, FastForwardIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Resume() {

    const val = `New submission from Contact page! - ${new Date(Date.now()).toDateString()}`;
    // checking if url is long enough to match cwm, if not then url is localhost
    const url = window.location.href.substring(34) ? "https://connectwithmusa.com" : "http://localhost:3000";

    useEffect(() => {
      window.scrollTo({top: 0, behavior: "smooth"});
    },[])

  return (
    <section className="text-white bg-gradient-to-t from-g-dark to-g-light min-h-screen">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 ">
        <div className="flex flex-col w-full mb-16">
          <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2 }}
          >  
          <ChatAlt2Icon
            className="mx-auto inline-block w-10 mb-4 text-t-darkyellow" />
          </motion.div>
          <h1 className="sm:text-3xl text-2xl font-rock-salt mb-4 text-h-brightgreen">
            Contact
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl font-dm-sans italic">
            Questions, comments, or concerns? Reach out!
          </p>
        </div>
        
        <form className="font-dm-sans text-t-darkyellow outline-none drop-shadow-2xl" id="contact"
            action="https://formsubmit.co/musaa.ahmed7@gmail.com" method="POST">
        {/* https://formsubmit.co */}
        <div className="flex flex-col sm:flex-row justify-center">
            <input placeholder="Name" type="text" name="name" required
            className="w-full mb-4 sm:mb-0 sm:w-80 mr-5 py-4 px-6 rounded-[38px] bg-b-darkishpurple placeholder:text-[#AA9106]
            border-[3px] border-br-lightpurple text-xl outline-none"/>
            <input placeholder="Email" type="email" name="email" required
            className="w-full sm:w-80 py-4 px-6 rounded-[38px] bg-b-darkishpurple placeholder:text-[#AA9106]
            border-[3px] border-br-lightpurple text-xl outline-none"/>
            <input type="hidden" name="_next" value={url + "/thanks"} />
            <input type="hidden" name="_subject" value={val} />
            <input type="text" name="_honey" className="hidden" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
        </div>
        
        <textarea placeholder="Write your message here!" required form="contact" name="message"
        className="mt-7 w-full md:w-[41.25rem] h-80 px-6 py-4 rounded-[38px] border-[3px] border-br-lightpurple
        bg-b-darkishpurple text-xl placeholder:text-[#AA9106] outline-none"/>
        <br />
        <button type="submit" className="inline-flex mt-3 text-xl bg-b-darkishpurple px-6 py-2 border-[3px] border-br-lightpurple
            rounded-[38px] text-h-brightgreen hover:bg-h-brightgreen hover:text-b-darkishpurple transition-all duration-500">
            <FastForwardIcon className="w-7 h-7"/>
            &nbsp;Send
        </button>
        </form>

    </div>
    </section>
  );
}
