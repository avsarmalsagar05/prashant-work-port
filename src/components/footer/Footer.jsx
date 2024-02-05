import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-red-300 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 id="letschat"
          data-aos="zoom-out"
          className=" font-bold text-5xl sm:text-3xl"
        >
          Let's Chat 🗨️
        </h2>
        <div className="flex flex-col items-start gap-4">
          {/* Social Media Links */}
          <div className="flex items-center gap-8 sm:gap-5">
            <a
              data-aos="fade-up"
              data-aos-duration="1000"
              href="https://www.instagram.com/__bunny07_/"
              className="box font-medium text-white   flex items-center justify-center flex-col"
            >
              <RiInstagramFill className=" text-black text-3xl hover:scale-125 cursor-pointer" />
              <p>Instagram</p>
            </a>
            <a
              data-aos="fade-up"
              data-aos-duration="1200"
              href=""
              className="box font-medium text-white  flex items-center justify-center flex-col"
            >
              <IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer" />
              <p>WhatsApp</p>
            </a>
            <a
              data-aos="fade-up"
              data-aos-duration="1400"
              href=""
              className="box font-medium text-white  flex items-center justify-center flex-col"
            >
              <FaTelegramPlane className=" text-black text-3xl hover:scale-125 cursor-pointer" />
              <p>Telegram</p>
            </a>
            <a
              data-aos="fade-up"
              data-aos-duration="1400"
              href=""
              className="box font-medium text-white  flex items-center justify-center flex-col"
            >
              <FaFacebookF className=" text-black text-3xl hover:scale-125 cursor-pointer" />
              <p>Facebook</p>
            </a>
          </div>

          {/* Quick Links */}
          <h6 className="text-gray-400 uppercase mt-8"></h6>
        </div>
        <div className="sm:text-[12px]" >
          | Copyright &copy; <span>@SpyTECH Pvt LTD. </span> All rights reserved | 
        <div className="sm:text-[12px] flex items-center justify-center"> | 📞+919920075872 |</div>
          
          <a href="#"></a> 
        </div>
      </div>
    </div>
  );
};

export default Footer;
