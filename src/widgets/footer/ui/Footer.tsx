import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__container">
          <div className="typography__h2">News for everyone</div>
          <div className="flex flex-col">
            <h3 className="typography__h3">Наша команда</h3>
            <ul className="typography__body">
              <li>Волжанин Михаил</li>
              <li>Холев Артем</li>
              <li>Бобков Павел</li>
              <li>Журавлева Анастасия</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
