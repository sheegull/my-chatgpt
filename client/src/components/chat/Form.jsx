import React, { useState } from "react";
import { format } from "date-fns";
import axios from "axios";
import { motion } from "framer-motion";
import { MdKeyboardVoice } from "react-icons/md";
import { AiOutlinePaperClip } from "react-icons/ai";

const Form = ({ setMessages }) => {
  const [message, setMessage] = useState("");

  const messageResponse = async () => {
    const { data } = await axios.post("https://my-chatgpt-n7af.onrender.com/message", { message });
    // console.log(data);

    setMessages((prev) => [
      ...prev,
      {
        msg: data.message,
        type: "bot",
        time: format(new Date(), "eee MMM dd HH:mm"),
      },
    ]);
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!message) return;

    setMessages((prev) => [
      ...prev,
      {
        msg: message,
        type: "user",
        time: format(new Date(), "eee MMM d HH:mm"),
      },
    ]);
    setMessage("");

    await messageResponse();
  };

  return (
    <form className="flex items-center mt-8 md:mt-12 relative">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        className="relative bg-[#3A3F47] text-white placeholder:text-[#949494] text-sm rounded-full pl-6 md:pl-8 p-3 md:p-4 w-full outline-none"
      />
      <button type="submit" onClick={sendMessage}>
        <AiOutlinePaperClip className="text-[#949494] text-[20px] md:text-[22px] absolute right-[68px] top-[13px] md:right-[80px] md:top-[16px] hover:opacity-50 transition-opacity" />
      </button>
      <motion.div
        whileHover={{ scale: [null, 1.2, 1.2] }}
        transition={{ duration: 0.3 }}
        className=" bg-[#176FFF] rounded-full p-[11px] md:p-3 ml-3 md:ml-4 cursor-pointer"
      >
        <MdKeyboardVoice className="text-white text-xl md:text-2xl" />
      </motion.div>
    </form>
  );
};

export default Form;
