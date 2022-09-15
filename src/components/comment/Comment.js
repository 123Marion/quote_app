import React from "react";
import CommentCSS from "./Comment.module.css";
function Comment({ comments }) {
  console.log("Comments all", comments);
  return (
    <>
      {comments.map((comment) => (
        <div className={CommentCSS.comment} key={comment.id}>
          <div>
            <span>{comment.user.name}</span>
            <span>{new Date(comment.created_at).toLocaleDateString()}</span>
          </div>
          <div className={CommentCSS.content}>{comment.comment}</div>
        </div>
      ))}
    </>
  );
}
export default Comment;
