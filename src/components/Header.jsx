import React, { useState, useEffect, useContext, useRef } from "react";
import { ArticleContext } from "../ArticleContext/ArticleContext"; // Adjust path as necessary

function Header() {
  const { updateFilters } = useContext(ArticleContext);
  const [category, setCategory] = useState("general");
  const [language, setLanguage] = useState("en");
  const [country, setCountry] = useState("in");
  const [isMobileInputVisible, setIsMobileInputVisible] = useState(false);
  const [isMobileInputVisibleOption, setIsMobileInputVisibleOption] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Ref for detecting clicks inside the menu
  const menuRef = useRef(null);

  const showMenu = () => {
    setIsMobileInputVisible((prev) => !prev);
    setIsMobileInputVisibleOption((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileInputVisible(false);
      }
      if (window.innerWidth<768) {
        setIsMobileInputVisibleOption(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close mobile input/options if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileInputVisible(false);
        setIsMobileInputVisibleOption(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

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
          <img src="/public/logo/aconews-high-resolution-logo-transparent.png" alt="Logo" />
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

      {/* Mobile Input */}
      <div
        ref={menuRef} // Attach the ref to detect clicks inside
        className={`mobile-view-input w-[90%] transition-max-height duration-500 ease-in-out overflow-hidden ${
          isMobileInputVisible ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-[90vw] sm:text-[2.5vw] text-[2.9vw] border-2 h-9 p-3 rounded-md"
          onKeyPress={handleKeyPress}
          onChange={handleSearchInputChange}
        />
      </div>

      {/* Mobile Options */}
      <div
        ref={menuRef} // Attach the same ref for the mobile options
        className={`options-div mt-3 flex sm:gap-3 sm:justify-center justify-evenly w-full transition-max-height duration-500 ease-in-out overflow-hidden ${
          isMobileInputVisibleOption ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <select
          id="category"
          name="category"
          className="w-[8rem] cursor-pointer h-fit p-2 rounded-md text-[3vw] sm:text-xl shadow-lg"
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
          className="sm:w-[7rem] cursor-pointer w-[20vw] h-fit p-2 rounded-md text-[3vw] sm:text-xl shadow-lg"
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
          className="sm:w-[7rem] cursor-pointer w-[20vw] h-fit p-2 rounded-md text-[3vw] sm:text-xl shadow-lg"
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
  );
}

export default Header;
