import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="">
      <div className="w-full h-20 bg-[#6B7380] flex items-center mt-2 ">
        <div className="w-full h-4/5 flex gap-8 justify-center items-center">
          <div className="sm:w-6 w-[3.5vw]">
            <Link to="https://github.com/" target="_blank">
              <img src="/public/logo/github-mark-c791e9551fe4/github-mark/github-mark-white.png" />
            </Link>
          </div>
          <div className="sm:w-6 w-[3.5vw]">
            <Link
              to="https://www.linkedin.com/in/chandradiproy/"
              target="_blank"
            >
              <img src="/public/logo/linkedin (1).png" />
            </Link>
          </div>
          <div className="sm:w-6 w-[3.5vw]">
            <Link to="https://github.com/chandradiproy" target="_blank">
              <img src="/public/logo/facebook-app-symbol.png" />
            </Link>
          </div>
          <div className="sm:w-6 w-[3.5vw]">
            <Link
              to="https://www.instagram.com/chandradip_roy/"
              target="_blank"
            >
              <img src="/public/logo/instagram.png" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-fit bg-[#41464d] p-2 flex justify-center">
            <p className="text-[#a4a8ad]  sm:text-[1rem] text-[3vw]">&copy; 2024 Copyright : <span className="text-white">Chandradip Roy</span></p>
      </div>
    </div>
  );
}

export default Footer;
