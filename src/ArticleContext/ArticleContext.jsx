// ArticleContext.js
import React, { createContext, useEffect, useState } from "react";

export const ArticleContext = createContext();

export function ArticleProvider({ children }) {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: "general",
    language: "en",
    country: "in",
    search:''
  });

  useEffect(() => {
    const fetchArticles = async () => {
      const { category, language, country,searchTerm } = filters;
      const API_KEY = "";
      let apiUrl='';
      if(searchTerm!==''){
        apiUrl = `https://gnews.io/api/v4/search?q=${searchTerm}&apikey=${API_KEY}`;
      }else{
        apiUrl = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${language}&country=${country}&apikey=${API_KEY}`;
      }

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        console.log(data.articles)

        setArticles(data.articles);
        setFilteredArticles(data.articles);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [filters]);

  const updateFilters = (newFilters) => {
    setIsLoading(true);
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  };

  return (
    <ArticleContext.Provider value={{ articles: filteredArticles, isLoading, updateFilters }}>
      {children}
    </ArticleContext.Provider>
  );
}
