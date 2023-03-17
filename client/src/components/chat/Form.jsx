import React, { useState } from "react";
import { format } from "date-fns";

const Form = ({ setMessages }) => {
  const [text, setText] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!text) return;

    setMessages((prev) => [
      ...prev,
      {
        msg: text,
        type: "user",
        time: format(new Date(), "HH:mm"),
      },
    ]);
  };

  return (
    <form className="flex items-center">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message"
        className="bg-[#3A3F47] text-white placeholder:text-[#949494] text-sm rounded-2xl p-4 w-full outline-none"
      />
      <button type="submit" onClick={sendMessage}></button>
    </form>
  );
};

export default Form;
