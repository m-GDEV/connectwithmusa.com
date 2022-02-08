// put links to linkedin and email
// put form
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
    return (
          <div className="bg-black h-80 rounded w-100 overflow-hidden">   
          <motion.p
              whileHover={{ scale: 10 }}
              whileTap={{ scale: 0.9 }}
               className="text-white text-lg text-center">hello</motion.p>
          </div>
      );
}
