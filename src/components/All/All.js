import React from "react";
import "./All.css";
import p1 from "../../images/all/1.jpg";
import p2 from "../../images/all/2.jpg";
import p3 from "../../images/all/3.jpg";
import p5 from "../../images/all/5.jpg";
import p6 from "../../images/all/6.jpg";
import p7 from "../../images/all/7.jpg";
import p8 from "../../images/all/8.jpg";
import p10 from "../../images/all/10.jpg";

export default function All() {
  return (
    <section className="all">
      <div className="all__container">
        <div className="all__vertical">
          <img className="all__image" src={p1} alt="1" />
          <img className="all__image" src={p8} alt="2" />
        </div>
        <div className="all__horizontal">

          <div className="all__two">
          <img className="all__image" src={p6} alt="3" />
          </div>
          <img className="all__image" src={p2} alt="4" />
            <img className="all__image" src={p3} alt="5" />
        </div>
        <div className="all__more">
          <img className="all__image" src={p10} alt="6" />
          <img className="all__image" src={p7} alt="7" />
          <img className="all__image" src={p5} alt="8" />
        </div>
      </div>
    </section>
  );
}
