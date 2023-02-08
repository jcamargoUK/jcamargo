import React, { useState, useEffect } from "react"; // Import the useState and useEffect hooks from React
import '../styles/main.css'
const apikey = "87bfb93ef955f5ca52a2ae8707529af3"; // Set the apikey to the one i got from GNews

// Create the Main component
const Main = () => {
  const [articles, setArticles] = useState([]); // Create a state variable called articles and set it to an empty array
  //   const [loading, setLoading] = useState(true); // Create a state variable called loading and set it to true
  //   const [error, setError] = useState(null); // Create a state variable called error and set it to null
  const [category, setCategory] = useState("business"); // Create a state variable called category and set it to business

  // Use the useEffect hook to fetch the data from the GNews API
  useEffect(() => {
    const url =
      "https://gnews.io/api/v4/search?q=" +
      category +
      "&apikey=" +
      apikey +
      "&lang=en&country=us&max=10"; // Set the url to the GNews API

    fetch(url) // Fetch the data from the url
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => setArticles(data.articles)) // Set the articles state variable to the articles array from the data
      .catch((error) => console.error(error)); // Log any errors to the console
  }, [category]); // Only run this effect once

  const handleCategory = (newCategory) => {
    setCategory(newCategory);
  };

  // Return the JSX for the Main component
  return (
    <div className="main">
      <button onClick={() => handleCategory("sports")}>Sports</button>
      <button onClick={() => handleCategory("business")}>Business</button>
      <button onClick={() => handleCategory("technology")}>Technology</button>
      <button onClick={() => handleCategory("science")}>Science</button>
      <button onClick={() => handleCategory("entertainment")}>
        Entertainment
      </button>
      <button onClick={() => handleCategory("health")}>Health</button>
      <h1>Category: {category}</h1>
      <ul>
        {articles.map((article) => (
          // Add a key to the li element
          <li key={article.title}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p>{article.content}</p>
            <img className="article_img" src={article.image} alt={article.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
