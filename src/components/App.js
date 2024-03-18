import React from "react";
import BlogPost from "./BlogPost";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  // Example props to pass to BlogPost component
  const blogPostProps = {
    title: "My First Blog Post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "John Doe",
    date: "2024-03-18",
  };

  return (
    <ErrorBoundary>
      <BlogPost {...blogPostProps} />
    </ErrorBoundary>
  );
}

export default App;
