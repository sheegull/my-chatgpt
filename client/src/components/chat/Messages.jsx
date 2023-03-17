import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Message = ({ msg, type, time }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center ${type === "bot" ? "justify-start" : "justify-end"}`}
    >
      <div className={`flex flex-col ${type === "user" && "items-end"} max-w-[60%]`}>
        <div
          className={`flex flex-col text-white rounded-xl px-4 py-3 md:py-4 ${
            type === "bot" ? "bg-[#3A3F47] rounded-bl-none" : "bg-[#176FFF] rounded-br-none"
          } `}
        >
          <p>{msg}</p>
        </div>
        <span className={`text-xs mt-2 text-[#949494]`}>{time}</span>
      </div>
    </motion.div>
  );
};

const Messages = ({ messages }) => {
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="space-y-4 max-h-[500px] overflow-y-scroll scrollbar-hide">
      {messages.length ? (
        messages.map((message, idx) => <Message key={idx} {...message} />)
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-white text-sm">Ask the bot anything...</p>
        </div>
      )}
      <div ref={messageEndRef} />
    </div>
  );
};

export default Messages;
