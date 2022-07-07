import React from "react";
import "./Love.css";
import p1 from "../../images/love/1.jpg";
import p2 from "../../images/love/2.jpg";
import p3 from "../../images/love/3.jpg";
import p4 from "../../images/love/4.jpg";
import p5 from "../../images/love/5.jpg";
import p6 from "../../images/love/6.jpg";
import p7 from "../../images/love/7.jpg";
import p8 from "../../images/love/8.jpg";
import p9 from "../../images/love/9.jpg";

export default function Love() {
  return (
    <section className="love">
      <div className="love__container">
        <img className="love__image" src={p1} alt="2" />
        <img className="love__image" src={p2} alt="3" />
        <img className="love__image" src={p3} alt="4" />
        <div className="love__three">
          <img className="love__image" src={p4} alt="5" />
          <img className="love__image" src={p5} alt="6" />
          <img className="love__image" src={p6} alt="7" />
        </div>
        <div className="love__last">
          <img className="love__image" src={p7} alt="8" />
          <img className="love__image" src={p8} alt="9" />
          <img className="love__image" src={p9} alt="10" />
        </div>
      </div>
    </section>
  );
}
