import React from "react";
import PropTypes from "prop-types";

function Comment({ commentText }) {
  return <article className="comment">{commentText}</article>;
}

Comment.propTypes = {
  commentText: PropTypes.string.isRequired,
};

export default Comment;
