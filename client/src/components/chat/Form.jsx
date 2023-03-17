import React, { useState } from "react";
import { format } from "date-fns";
import axios from "axios";
import { MdKeyboardVoice } from "react-icons/md";
import { AiOutlinePaperClip } from "react-icons/ai";

const Form = ({ setMessages }) => {
  const [message, setMessage] = useState("");

  const messageResponse = async () => {
    const { data } = await axios.post("http://localhost:5001/message", { message });
    // console.log(data);

    setMessages((prev) => [
      ...prev,
      {
        msg: data.message,
        type: "bot",
        time: format(new Date(), "HH:mm"),
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
        time: format(new Date(), "HH:mm"),
      },
    ]);
    setMessage("");

    await messageResponse();
  };

  return (
    <form className="flex items-center mt-12 relative">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        className="relative bg-[#3A3F47] text-white placeholder:text-[#949494] text-sm rounded-full pl-8 p-4 w-full outline-none"
      />
      <button type="submit" onClick={sendMessage}>
        <AiOutlinePaperClip className="text-[#949494] text-[22px] absolute right-[80px] top-[16px]" />
      </button>
      <div className=" bg-[#176FFF] rounded-full p-3 ml-4 cursor-pointer">
        <MdKeyboardVoice className="text-white text-2xl" />
      </div>
    </form>
  );
};

export default Form;
