import QuoteCSS from "./Quotes.module.css";
import React from "react";
// import image from "../../logo.svg";
// import { Link } from "react-router-dom";

function Card() {
  return (
    <>
      <div className={QuoteCSS.fullCard}>
        <div className="columns is-multiline">
          <div className="column is-12">
            <div className={QuoteCSS.quote}>
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
        </div>
      </div>
    </>
  );
}
export default Card;
