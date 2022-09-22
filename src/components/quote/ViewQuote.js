import React, { useState, useEffect } from "react";
import ViewQuoteCSS from "./ViewQuote.module.css";
import Comment from "../comment/Comment";
import { useParams } from "react-router";

function ViewQuote({ user }) {
  const { id } = useParams();
  console.log("quote 23 first", id);

  const [quote, setQuote] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/quotes/${id}`)
      .then((r) => r.json())
      .then((quote) => setQuote(quote));
  }, [id]);

  useEffect(() => {
    if (quote.comments) {
      setComments(quote.comments);
    }
  }, [quote.comments]);

  function onAddComment(newComments) {
    setComments([...comments, newComments]);
  }

  const [body, setBody] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(body.length);
    console.log(e.target.body.value);
    //not send whitespace to db
    if (body != null && body.trim() !== "") {
      fetch("https://secret-oasis-36643.herokuapp.com/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.id,
          comment: body,
          quote_id: id,
          like: true,
        }),
      })
        .then((r) => r.json())
        .then((newComment) => {
          onAddComment(newComment);
          console.log(newComment);
          setBody("");
        });
    } else {
      console.log("Error");
    }
  }

  console.log("comments", quote.comments);
  return (
    <section>
      <div className={ViewQuoteCSS.fullCard} key={quote.id}>
        <div className={ViewQuoteCSS.quote}>
          <div>
            <p>{quote.content}</p>
            <div></div>
          </div>
          <div>
            <div>{!quote.author ? "unknown" : quote.author}</div>
            <div>
              <em>{new Date(quote.created_at).toLocaleDateString()}</em>
            </div>
          </div>
        </div>
      </div>

      <form className={ViewQuoteCSS.newComment} onSubmit={handleSubmit}>
        <input
          id="body"
          type="text"
          name="body"
          autoComplete="off"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Comment</button>
      </form>
      <Comment comments={comments} />
    </section>
  );
}
export default ViewQuote;
