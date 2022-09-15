import HeroCSS from "./Hero.module.css";

import React from "react";
import Quotes from "../quote/Quotes";

function Hero({quotes, user}) {
  return (
    <>
        <header className={HeroCSS.section + " " + HeroCSS.hero}>
          <div className="columns">
            <div className="column is-12">
              <div className={HeroCSS.image}>
                <img
                  alt="featured quote of the day"
                  src="https://images.unsplash.com/photo-1552508744-1696d4464960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                ></img>
              </div>
            </div>
          </div>
        </header>
      <section className={HeroCSS.section}>
        <Quotes quotes={quotes}/>
      </section>
    </>
  );
}
export default Hero;
