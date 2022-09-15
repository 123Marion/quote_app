import React, {useState} from "react";
import ViewQuoteCSS from "./ViewQuote.module.css";
import Comment from "../comment/Comment";
function ViewQuote({currentUser, onAddComment}) {
    const [body, setBody] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        console.log(body.length)
        console.log(e.target.body.value)
        //not send whitespace to db
        if (body != null && body.trim() !== '') {
        fetch("http://localhost:9292/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: currentUser.username,
            body: body,
          }),
        })
          .then((r) => r.json())
          .then((newComment) => {
            onAddComment(newComment);
            setBody("");
          });
        }
        else{
          console.log("Error");
        }
      }
  return (

    <>
      <section>
        <div className={ViewQuoteCSS.fullCard}>
          <div className={ViewQuoteCSS.quote}>
            <div>
              <p>hello there i am here</p>
              <div></div>
            </div>
            <div>
              <div>Author</div>
              <div>date</div>
            </div>
          </div>
        </div>
        <form className="new-message" onSubmit={handleSubmit}>
          <input
            type="text"
            name="body"
            autoComplete="off"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
        <Comment />
      </section>
    </>
  );
}
export default ViewQuote;
