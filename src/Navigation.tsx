import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { useNavigate } from "react-router-dom";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ emoji }: any) => {
  const navigate = useNavigate();
  const itemIds = [
    [
      1,
      <h1 className="sm:p-2 p-1 " onClick={() => navigate("/home")}>
        Home
      </h1>,
    ],
    [
      2,
      <h1 className="sm:p-2 p-1" onClick={() => navigate("/about")}>
        About
      </h1>,
    ],
    [
      3,
      <h1 className="sm:p-2 p-1" onClick={() => navigate("/project")}>
        Project
      </h1>,
    ],
    [
      4,
      <h1 className="sm:p-2 p-1" onClick={() => navigate("/resume")}>
        Resume
      </h1>,
    ],
  ];
  return (
    <motion.ul variants={variants}>
      {itemIds.map(([i, emoji]) => (
        <MenuItem i={i} key={i} emoji={emoji} />
      ))}
    </motion.ul>
  );
};
