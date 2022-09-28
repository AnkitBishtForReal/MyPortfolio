import { FC } from "react";
type HeaderProps = {};
const Header: FC<HeaderProps> = (props) => {
  return (
    <div className="flex bg-gray-200 ">
      <div>
        <img
          className="sm:w-20 sm:h-16 hidden sm:block"
          src="https://media.discordapp.net/attachments/966570615236595712/982970628170735646/unknown.png?width=427&height=427"
        />
      </div>
      <div className="p-2">
        <h1 className="hidden sm:block">Ankit Bisht</h1>
        <h2 className="hidden sm:block">Portfolio</h2>
      </div>
      <nav className=" sm:p-5 ">
        <ul>
          <li>
            <a className="sm:p-2 p-1" href="#home">
              Home
            </a>
            <a className="sm:p-2 p-1" href="#about">
              About
            </a>
            <a className="sm:p-2 p-1" href="#project">
              Projects
            </a>
            <a className="sm:p-2 p-1" href="#resume">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Header.defaultProps = {};

export default Header;
