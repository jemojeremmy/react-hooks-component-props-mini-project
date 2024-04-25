// Article.js
import React from 'react';

const Article = ({ title, date, preview }) => {
  const minutesToRead = Math.ceil(preview.split(" ").length / 200);
  const emoji = minutesToRead <= 5 ? "☕️" : "🍱";
  const emojis = emoji.repeat(Math.ceil(minutesToRead / (emoji === "☕️" ? 5 : 10)));

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <small>{emojis} {minutesToRead} min read</small>
    </article>
  );
};

export default Article;
