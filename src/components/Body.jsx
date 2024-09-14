// Body.js
import React, { useContext } from "react";
import { ArticleContext } from "../ArticleContext/ArticleContext";
import Card from "./Card";
import Loader from './Loader'


function Body() {
  const { articles, isLoading } = useContext(ArticleContext);
  console.log(articles);
  
  if (isLoading) return <Loader/>;
  return (
    <div className="w-full h-fit flex justify-center mt-4 mb-5">
    <div className="grid grid-cols-12 gap-4 md:gap-y-6 w-[90%]">
      {articles.length > 0 ? (
        articles.map((article, index) => <Card key={index} article={article} />)
      ) : (
        <p>No articles found.</p>
      )}
      {/* <Card article={article}/> */}
    </div>
    </div>
  );
}

export default Body;
