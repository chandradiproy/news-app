import React, { useState, useEffect, useContext, useRef } from "react";
import { ArticleContext } from "../ArticleContext/ArticleContext";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo/aconews-high-resolution-logo-transparent.png';
import menu from '../assets/logo/menu.png';

function Header() {
  const { updateFilters } = useContext(ArticleContext);
  const [category, setCategory] = useState("general");
  const [language, setLanguage] = useState("en");
  const [country, setCountry] = useState("in");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileInputVisible, setIsMobileInputVisible] = useState(false);
  const [isMobileOptionsVisible, setIsMobileOptionsVisible] = useState(false); // Changed from `isMobileInputVisibleOption`
  const [initialWidth, setInitialWidth] = useState(window.innerWidth);

  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMobileInputVisible(prev => !prev);
    setIsMobileOptionsVisible(prev => !prev);

    
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth !== initialWidth) {
        setIsMobileInputVisible(false);
        setIsMobileOptionsVisible(window.innerWidth >= 768);
        setInitialWidth(window.innerWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [initialWidth]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileInputVisible(false);
        setIsMobileOptionsVisible(window.innerWidth >= 768);
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
      setIsMobileInputVisible(prev => !prev);
      setIsMobileOptionsVisible(prev => !prev);
      e.target.blur();
    }
  };

  const handleLogoClick = () => {
    setCategory("general");
    setLanguage("en");
    setCountry("in");
    setSearchTerm("");
    updateFilters({
      category: "general",
      language: "en",
      country: "in",
      searchTerm: "",
    });
  };

  return (
    <div className="w-full flex fixed top-0 z-10 bg-[#ffffff] flex-col items-center h-fit shadow-md pb-3">
      <div className="w-[90%] md:h-[5rem] h-fit p-1 flex mt-4 items-center justify-between">
        <div className="logo-div sm:w-[10rem] w-[20vw] h-full flex items-center">
          <NavLink to="/" onClick={handleLogoClick}>
            <img src={logo} alt="Logo" />
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
          <img src={menu} onClick={handleMenuToggle} alt="Menu" />
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
            className="w-[90vw] sm:text-[2.5vw] text-[2.9vw] border-2 h-9 p-3 rounded-md "
            onKeyPress={handleKeyPress}
            onChange={handleSearchInputChange}
            enterKeyHint="go"
          />
        </div>

        {/* Mobile Options */}
        <div
          className={`options-div mt-3 mb-2 flex sm:gap-x-3 sm:justify-center justify-evenly w-full  transition-max-height duration-500 ease-in-out overflow-hidden  ${
            isMobileOptionsVisible ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <select
            id="category"
            name="category"
            className="sm:w-[7rem] mb-2 w-[21vw] cursor-pointer h-fit p-2 rounded-md text-[3vw] sm:text-xl shadow-lg bg-[#f6f5f5ef]"
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
            className="sm:w-[7rem] cursor-pointer w-[25vw] h-fit p-2 rounded-md text-[3vw] sm:text-xl shadow-lg bg-[#f6f5f5ef]"
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
            className="sm:w-[7rem] cursor-pointer mb-2 w-[20vw] h-fit p-2 rounded-md text-[3vw] sm:text-xl shadow-lg bg-[#f6f5f5ef]"
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
            <div className="h-[2.3rem] rounded-lg">
          <button
            className="sm:w-[7rem] cursor-pointer mb-2 w-[20vw] h-fit p-2 rounded-md text-[3vw] sm:text-xl shadow-lg bg-[#336A86] text-white hover:bg-[#427995]"
            onClick={handleFilterClick}
          >
            Filter
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
