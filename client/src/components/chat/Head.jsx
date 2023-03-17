import React from "react";
import bot from "../../assets/bot.svg";
import { BsTelephoneFill } from "react-icons/bs";
import { IoVideocam } from "react-icons/io5";

const Head = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={bot}
          alt="bot-image"
          className="w-14 h-14 bg-[#176FFF] rounded-2xl justify-center flex items-center p-[2px]"
        />
        <div className="text-white ml-6 flex flex-col">
          <p className="font-bold">ChatBot</p>
          <p className="text-xs mt-1">Online</p>
        </div>
      </div>
      <div className="flex text-white gap-6 flex-row items-center">
        <IoVideocam className="text-[26px] cursor-pointer hover:opacity-50 transition-opacity" />
        <BsTelephoneFill className="text-[20px] cursor-pointer hover:opacity-50 transition-opacity" />
      </div>
    </div>
  );
};

export default Head;
