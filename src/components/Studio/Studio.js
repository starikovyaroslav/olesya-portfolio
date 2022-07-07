import React from "react";
import "./Studio.css";
import p1 from "../../images/studio/1.jpg";
import p2 from "../../images/studio/2.jpg";
import p3 from "../../images/studio/3.jpg";
import p4 from "../../images/studio/4.jpg";
import p5 from "../../images/studio/5.jpg";
import p6 from "../../images/studio/6.jpg";
import p7 from "../../images/studio/7.jpg";
import p8 from "../../images/studio/8.jpg";
import p9 from "../../images/studio/9.jpg";

export default function Studio() {
  return (
    <section className="studio">
      <div className="studio__container">
        <img className="studio__image" src={p1} alt="1" />
        <img className="studio__image" src={p2} alt="2" />
        <img className="studio__image" src={p4} alt="4" />
        <div className="studio__three">
          <img className="studio__image" src={p3} alt="3" />
          <img className="studio__image" src={p5} alt="5" />
          <img className="studio__image" src={p6} alt="6" />
        </div>
        <img className="studio__image" src={p7} alt="7" />
        <img className="studio__image" src={p8} alt="8" />
        <img className="studio__image" src={p9} alt="9" />
      </div>
    </section>
  );
}
