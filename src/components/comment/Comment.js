import React from "react";
import CommentCSS from "./Comment.module.css";
function Comment() {
  return (
    <>
      <div className={CommentCSS.comment}>
        <div>
            <span>username</span>
            <span>date posted</span>
        </div>
        <div className={CommentCSS.content}>
            content
        </div>
      </div>
    </>
  );
}
export default Comment;
