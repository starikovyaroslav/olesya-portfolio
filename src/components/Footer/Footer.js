import React from "react";

import { Link, useLocation } from "react-router-dom";
import "./Footer.css";
import telegram from "../../images/telegram.svg";
import whatsapp from "../../images/whatsapp.svg";
import instagram from "../../images/instagram.svg";
import mail from "../../images/mail.svg";
import phone from "../../images/phone.svg";
import github from "../../images/github.svg";

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__email">
          <img src={mail} alt="mail" className="footer__icon" />
          <p className="footer__subtitle">shakina.ol011@mail.ru</p>
        </div>
        <div className="footer__media">
          <h3 className="footer__title">Соцсети</h3>
          <ul className="footer__links">
            <li className="footer__link-item">
              <a
                href="https://t.me/olesyashakina"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="footer__link-media"
                  src={telegram}
                  alt="telegram"
                />
              </a>
            </li>
            <li className="footer__link-item">
              <a
                href="https://wa.me/79513614205"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="footer__link-media"
                  src={whatsapp}
                  alt="whatsapp"
                />
              </a>
            </li>
            <li className="footer__link-item">
              <a
                href="https://instagram.com/olesshak.ph?igshid=YmMyMTA2M2Y="
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="footer__link-media"
                  src={instagram}
                  alt="instagram"
                />
              </a>
            </li>
          </ul>
          <div className="footer__info">
            <p className="footer__copyright">&copy; 2022 Стариков Ярослав</p>
            <a
              href="https://github.com/starikovyaroslav"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" className="footer__link-github" />
            </a>
          </div>
        </div>
        <div className="footer__telephone">
          <img src={phone} alt="phone" className="footer__icon" />
          <p className="footer__subtitle">+7 951 361 42 05</p>
        </div>
      </div>
    </footer>
  );
}
