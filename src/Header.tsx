import { FC } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
import { Navigation } from "./Navigation";
import { Example } from "./Example";
type HeaderProps = {};
interface Props {
  emoji: any;
  hueA: number;
  hueB: number;
}

const Header: FC<HeaderProps> = (props) => {
  const navigate = useNavigate();
  const food: [any, number, number][] = [
    [
      <button className="sm:p-2 p-1  " onClick={() => navigate("/home")}>
        Home
      </button>,
      340,
      10,
    ],
    [
      <button className="sm:p-2 p-1" onClick={() => navigate("/about")}>
        About
      </button>,
      20,
      40,
    ],
    [
      <button className="sm:p-2 p-1" onClick={() => navigate("/project")}>
        Project
      </button>,
      60,
      90,
    ],
    [
      <button className="sm:p-2 p-1" onClick={() => navigate("/resume")}>
        Resume
      </button>,
      80,
      120,
    ],
  ];

  return (
    <>
      <div className="hidden sm:block ">
        {food.map(([emoji, hueA, hueB]) => (
          <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
        ))}
      </div>
      <div className="sm:hidden">Welcome click this icon for checkout</div>
      <div className="bg-blue-500 ">
        <Example />
      </div>
    </>
  );
};

Header.defaultProps = {};

export default Header;
