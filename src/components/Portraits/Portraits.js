import React from "react";
import "./Portraits.css";
import p1 from "../../images/portraits/1.jpg";
import p2 from "../../images/portraits/2.jpg";
import p3 from "../../images/portraits/3.jpg";
import p4 from "../../images/portraits/4.jpg";
import p5 from "../../images/portraits/5.jpg";
import p6 from "../../images/portraits/6.jpg";
import p7 from "../../images/portraits/7.jpg";
import p8 from "../../images/portraits/8.jpg";
import p9 from "../../images/portraits/9.jpg";
import p10 from "../../images/portraits/10.jpg";

export default function Portraits() {
  return (
    <section className="portraits">
      <div className="portraits__container">
        <div className="portraits__three">
          <img className="portraits__image span" src={p10} alt="1" />
          <img className="portraits__image" src={p1} alt="2" />
          <img className="portraits__image" src={p2} alt="3" />
        </div>

        <img className="portraits__image" src={p3} alt="4" />
        <img className="portraits__image" src={p4} alt="5" />
        <img className="portraits__image" src={p5} alt="6" />
        <div className="portraits__four">
          <img className="portraits__image" src={p6} alt="7" />
          <img className="portraits__image" src={p7} alt="8" />
          <img className="portraits__image" src={p8} alt="9" />
          <img className="portraits__image" src={p9} alt="10" />
        </div>
      </div>
    </section>
  );
}
