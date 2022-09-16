import React, { useState } from "react";
import Input from "../input/Input";
import AddQuoteCSS from "./AddQuote.module.css";

function AddQuote({ onAddQuote }) {
  const [input, setInput] = useState({
    author: "",
    content: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    console.log(input.content.length);
    console.log(e.target.content.value);
    //not send whitespace to db
    if (input.content != null && input.content.trim() !== "") {
      fetch("http://localhost:9292/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author: input.author,
          content: input.content,
        }),
      })
        .then((r) => r.json())
        .then((newQuote) => {
          onAddQuote(newQuote);
          console.log("new", newQuote);
          const clearInputs ={
            author: "",
            content: "",
          };
          setInput(clearInputs);
        });
    } else {
      console.log("Error");
    }
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <Input
          id="content"
          type="text"
          name="content"
          value={input.content}
          onChange={handleOnChange}
          label="quote"
        />
        <Input
          id="author"
          type="text"
          name="author"
          value={input.author}
          onChange={handleOnChange}
          label="author"
        />

        <div className={AddQuoteCSS.buttons}>
          <button className="add-quote" type="submit">Send</button>
        </div>
      </form>
    </section>
  );
}
export default AddQuote;
