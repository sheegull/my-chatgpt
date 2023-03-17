import React from "react";
import { motion } from "framer-motion";

const Message = ({ msg, type, time }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center ${type === "bot" ? "justify-start" : "justify-end"}`}
    >
      <div className={`flex flex-col ${type === "user" && "items-end"}`}>
        <div
          className={`flex flex-col text-white rounded-xl p-4 ${
            type === "bot" ? "bg-[#3A3F47] rounded-bl-none" : "bg-[#176FFF] rounded-br-none"
          } `}
        >
          <p>{msg}</p>
        </div>
        <span className={`text-xs mt-3 text-[#949494]`}>{time}</span>
      </div>
    </motion.div>
  );
};

const Messages = ({ messages }) => {
  return (
    <div className="space-y-4">
      {messages.map((message, idx) => (
        <Message key={idx} {...message} />
      ))}
    </div>
  );
};

export default Messages;
