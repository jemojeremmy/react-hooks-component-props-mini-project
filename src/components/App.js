import React from 'react';
import Header from './Header'; // Ensure that Header.js exists in the same directory
import About from './About'; // Ensure that About.js exists in the same directory
import ArticleList from './ArticleList'; // Ensure that ArticleList.js exists in the same directory
import posts from '../data/blog'; 




const App = () => {
  return (
    <div className="App"> {/* Assuming that you have a className="App" */}
      <Header name="My Personal Blog" />
      <About
        image="https://my-personal-blog.com/logo.png"
        about="Welcome to my personal blog! Here, I share my thoughts and experiences on various topics."
      />
      <ArticleList posts={posts} />
    </div>
  );
};

export default App;

