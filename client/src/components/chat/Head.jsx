import React from "react";
import bot from "../../assets/bot.svg";
import { BsTelephoneFill } from "react-icons/bs";
import { IoVideocam } from "react-icons/io5";

const Head = () => {
  return (
    <div className="flex items-center justify-between mx-4 md:mx-0">
      <div className="flex items-center">
        <img
          src={bot}
          alt="bot-image"
          className="w-12 h-12 md:w-14 md:h-14 bg-[#176FFF] rounded-xl md:rounded-2xl justify-center flex items-center p-[2px]"
        />
        <div className="text-white ml-6 flex flex-col">
          <p className="font-bold">ChatBot</p>
          <p className="text-xs mt-1">Online</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row text-white gap-3 md:gap-6  items-center">
        <IoVideocam className="text-[20px] md:text-[26px] cursor-pointer hover:opacity-50 transition-opacity" />
        <BsTelephoneFill className="text-[14px] md:text-[20px] cursor-pointer hover:opacity-50 transition-opacity" />
      </div>
    </div>
  );
};

export default Head;
