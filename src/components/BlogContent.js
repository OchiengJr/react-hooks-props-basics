import React from "react";
import PropTypes from "prop-types";

function BlogContent({ articleText }) {
  return <article className="blog-content">{articleText}</article>;
}

BlogContent.propTypes = {
  articleText: PropTypes.string.isRequired,
};

export default BlogContent;
