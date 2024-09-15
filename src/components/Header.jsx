import React, { useState, useEffect, useContext, useRef } from "react";
import { ArticleContext } from "../ArticleContext/ArticleContext"; // Adjust path as necessary
import { NavLink } from "react-router-dom";

function Header() {
  const { updateFilters } = useContext(ArticleContext);
  const [category, setCategory] = useState("general");
  const [language, setLanguage] = useState("en");
  const [country, setCountry] = useState("in");
  const [isMobileInputVisible, setIsMobileInputVisible] = useState(false);
  const [isMobileInputVisibleOption, setIsMobileInputVisibleOption] = useState(window.innerWidth >= 768);
  const [searchTerm, setSearchTerm] = useState("");
  const [initialWidth, setInitialWidth] = useState(window.innerWidth); // Store the initial window width

  // Ref for detecting clicks inside the menu and input field
  const menuRef = useRef(null);

  const showMenu = () => {
    setIsMobileInputVisible((prev) => !prev);
    setIsMobileInputVisibleOption((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      // Only update the mobile visibility if the width changes
      if (window.innerWidth !== initialWidth) {
        setIsMobileInputVisible(false);
        setIsMobileInputVisibleOption(window.innerWidth >= 768);
        setInitialWidth(window.innerWidth); // Update initialWidth when width changes
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [initialWidth]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If click happens outside the menuRef, hide input and options
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileInputVisible(false);
        setIsMobileInputVisibleOption(window.innerWidth >= 768);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFilterClick = () => {
    updateFilters({ category, language, country, searchTerm });
  };

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleFilterClick();
    }
  };

  return (
    <div className="w-full flex flex-col items-center h-fit shadow-md pb-3">
      <div className="w-[90%] md:h-[5rem] h-fit p-1 flex mt-4 items-center justify-between">
        <div className="logo-div sm:w-[10rem] w-[20vw] h-full flex items-center">
          <NavLink to="/">
            <img src="/public/logo/aconews-high-resolution-logo-transparent.png" alt="Logo" />
          </NavLink>
        </div>

        <div className="search-div md:block hidden">
          <input
            type="text"
            placeholder="Search..."
            className="w-[30rem] h-[3rem] p-3 border-2 rounded-lg"
            onKeyPress={handleKeyPress}
            onChange={handleSearchInputChange}
          />
        </div>

        <div className="menu-div md:hidden w-[5vw]">
          <img src="/public/logo/menu.png" onClick={showMenu} alt="Menu" />
        </div>
      </div>

      {/* Mobile Input and Options */}
      <div ref={menuRef} className="w-full">
        {/* Mobile Input */}
        <div
          className={`mobile-view-input w-[100%] flex justify-center mt-3 mb-2 transition-max-height duration-500 ease-in-out overflow-hidden ${
            isMobileInputVisible ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          <input
            type="text"
            placeholder="Search..."
            className="w-[90vw] sm:text-[2.5vw] text-[2.9vw] border-2 h-9 p-3 rounded-md"
            onKeyPress={handleKeyPress}
            onChange={handleSearchInputChange}
            enterKeyHint="go"
          />
        </div>

        {/* Mobile Options */}
        <div
          className={`options-div mt-3 flex sm:gap-x-3  sm:justify-center justify-evenly w-full transition-max-height duration-500 ease-in-out overflow-hidden ${
            isMobileInputVisibleOption ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <select
            id="category"
            name="category"
            className="w-[8rem] cursor-pointer h-fit p-2 rounded-md text-[3vw] sm:text-xl shadow-lg bg-[#f6f5f5ef]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="general">General</option>
            <option value="world">World</option>
            <option value="nation">Nation</option>
            <option value="business">Business</option>
            <option value="technology">Technology</option>
            <option value="entertainment">Entertainment</option>
            <option value="sports">Sports</option>
            <option value="science">Science</option>
            <option value="health">Health</option>
          </select>

          <select
            id="lang"
            name="lang"
            className="sm:w-[7rem] cursor-pointer w-[20vw] h-fit p-2 rounded-md text-[3vw] sm:text-xl shadow-lg bg-[#f6f5f5ef]"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="ml">Malayalam</option>
            <option value="mr">Marathi</option>
            <option value="ta">Tamil</option>
            <option value="te">Telugu</option>
          </select>

          <select
            id="country"
            name="country"
            className="sm:w-[7rem] cursor-pointer w-[20vw] h-fit p-2 rounded-md text-[3vw] sm:text-xl shadow-lg bg-[#f6f5f5ef]"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="in">India</option>
            <option value="au">Australia</option>
            <option value="ca">Canada</option>
            <option value="cn">China</option>
            <option value="de">Germany</option>
            <option value="gb">United Kingdom</option>
            <option value="us">United States</option>
          </select>

          <button
            className="sm:w-[4rem] w-[12vw] bg-[#336A86] sm:text-xl text-[3vw] text-white rounded-lg shadow-lg"
            onClick={handleFilterClick}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
