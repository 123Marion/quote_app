import QuoteCSS from "./Quotes.module.css";
import React from "react";
// import image from "../../logo.svg";
import { Link } from "react-router-dom";

function Quotes({ quotes }) {
  return (
    <>
      {quotes.map((quote) => (
        <div className={QuoteCSS.fullCard} key={quote.id}>
          <div className="columns is-multiline">
            <div className="column is-12">
              <div className={QuoteCSS.quote}>
                <div>
                  <p>{quote.content}</p>
                  <div>
                    <Link to={`/add-comment/1`}>
                      <div>comment</div>
                    </Link>
                  </div>
                </div>
                <div>
                  <div>{quote.author}</div>
                  <div>
                    <em>{new Date(quote.created_at).toLocaleDateString()}</em>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default Quotes;
