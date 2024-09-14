// Card.js
import React from "react";

function Card({ article }) {
  if (!article) return null; // Ensure the article prop is valid
  console.log("Inside card : ",article)

  return (
    <div className="lg:col-span-4 sm:col-span-6 col-span-12 h-full rounded-2xl shadow-md relative group sm:hover:scale-105 sm:transition-transform sm:duration-500 ease-in-out mt-3 flex flex-col">
    <a href={article.url} className=" w-full h-full text-decoration-none flex flex-col" target="_blank">
      <div className="flex-grow ">
        <img
          src={article.image || "https://via.placeholder.com/150"}
          className="sm:w-full w-[100vw] h-60 object-cover rounded-t-2xl"
          alt={article.title}
        />
      </div>
      <div className="text-content p-3 flex flex-col justify-between h-[60%] text-ellipsis bg-[#e3e1e1a5] rounded-lg">
        <h3 className="sm:text-xl text-[4vw] font-semibold text-[#2f2929] ">
          {article.title}
        </h3>
        <p className="mt-2 text-[#3e3a3a] sm:text-[1.2rem] text-[4vw]">
          {new Date(article.publishedAt).toLocaleString()}
        </p>
        <p className="text-[#3e3a3a] sm:text-[1.2rem] text-[4vw]">
          By <span className="text-[#d21414ef]">{article.source.name}</span>
        </p>
        <p className="text-[#666565] sm:text-[1rem] text-[3vw] w-full overflow-hidden text-ellipsis">
          {article.description}
        </p>
      </div>
      <div className="link-show absolute hidden inset-0 bg-gray-500 bg-opacity-0 group-hover:text-opacity-100 rounded-xl text-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-1000 sm:flex justify-center items-center text-[#d11111] font-bold text-[1.6rem] hover:backdrop-blur-sm">
        Click to know more...
      </div>
    </a>
  </div>
  
  );
}

export default Card;
