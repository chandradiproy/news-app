import React from "react";
import { Link } from "react-router-dom";
import FacebookLogo from '../assets/logo/facebook-app-symbol.png'
import InstaLogo from '../assets/logo/instagram.png'
import GitLogo from '../assets/logo/github-mark-white.png'
import LinkedInLogo from '../assets/logo/linkedin (1).png'

function Footer() {
  return (
    <div className="">
      <div className="w-full h-20 bg-[#427995] flex items-center mt-2 ">
        <div className="w-full h-4/5 flex gap-8 justify-center items-center">
          {/* <div className="sm:w-6 w-[3.5vw]">
            <Link to="https://github.com/" target="_blank">
              <img src={GitLogo} />
            </Link>
          </div> */}
          <div className="sm:w-6 w-[3.5vw]">
            <Link
              to="https://www.linkedin.com/in/chandradiproy/"
              target="_blank"
            >
              <img src={LinkedInLogo} />
            </Link>
          </div>
          <div className="sm:w-6 w-[3.5vw]">
            <Link to="https://github.com/chandradiproy" target="_blank">
              <img src={GitLogo}/>
            </Link>
          </div>
          <div className="sm:w-6 w-[3.5vw]">
            <Link
              to="https://www.instagram.com/chandradip_roy/"
              target="_blank"
            >
              <img src={FacebookLogo} />
            </Link>
          </div>
          <div className="sm:w-6 w-[3.5vw]">
            <Link
              to="https://www.instagram.com/chandradip_roy/"
              target="_blank"
            >
              <img src={InstaLogo} />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-fit   bg-[#29556c] p-2 flex justify-center">
            <p className="text-[#bdbfc2]  sm:text-[1rem] text-[3vw]">&copy; 2024 Copyright : <span className="text-white">Chandradip Roy</span></p>
      </div>
    </div>
  );
}

export default Footer;
