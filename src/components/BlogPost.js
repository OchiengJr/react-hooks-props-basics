import React from "react";
import PropTypes from "prop-types";
import BlogContent from "./BlogContent";
import Comment from "./Comment";

function BlogPost() {
  return (
    <article className="blog-post">
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
      <section className="comments">
        <Comment commentText="I agree with this statement. - Angela Merkel" />
        <Comment commentText="A universal truth. - Noam Chomsky" />
        <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
      </section>
    </article>
  );
}

BlogPost.propTypes = {
  // Define propTypes if necessary
};

export default BlogPost;
