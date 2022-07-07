import React from "react";
import { Link, useLocation } from 'react-router-dom';
import "./Preview.css";

export default function Preview(props) {
  const location = useLocation();

  return (
    <section className="preview">
      <div className={location.pathname === '/' ? "preview__name" : props.class}>
        <div className="preview__container">
          <h1 className="preview__about">{props.title}</h1>
          <p className="preview__subtitle">{location.pathname === '/' ? "Фотограф" : ""}</p>
        </div>
      </div>
    </section>
  );
}
