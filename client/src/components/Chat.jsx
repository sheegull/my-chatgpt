import React, { useState } from "react";
import { format, formatRelative } from "date-fns";

import Head from "./chat/Head";
import Messages from "./chat/Messages";
import Form from "./chat/Form";

const Chat = () => {
  const [messages, setMessages] = useState([
    // {
    //   msg: "Hello, how are you?",
    //   type: "bot",
    //   time: format(new Date(), "HH:mm"),
    // },
    // {
    //   msg: "I am fine, thank you!",
    //   type: "user",
    //   time: format(new Date(), "HH:mm"),
    // },
    // {
    //   msg: "How can I help you?",
    //   type: "bot",
    //   time: format(new Date(), "HH:mm"),
    // },
  ]);

  return (
    <div className="w-[calc(100%-100px)] p-12 md:px-20 rounded-3xl bg-[#2F343C]">
      <Head />
      <div className="w-full h-[1px] my-8 bg-[#4F5361]" />
      <Messages messages={messages} />
      <div className="w-full h-[1px] my-8 bg-[#4F5361]" />
      <Form setMessages={setMessages} />
    </div>
  );
};

export default Chat;
