import { motion } from "framer-motion";
import { FC } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
type AboutProps = {};
const About: FC<AboutProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" p-2 border-b-8 border-gray-200 ">
        <div className="flex justify-around">
          <h1 className="text-4xl leading-6 font-medium text-indigo-900 ">
            About Me
          </h1>
        </div>
      </div>

      <div className="px-4 py-6 grid grid-cols-2 gap">
        <h1 className="text-sm font-medium text-gray-500">Name</h1>

        <h2>Ankit Bisht </h2>
      </div>

      <div className="px-4 py-6 grid grid-cols-2 gap">
        <h1 className="text-sm  text-gray-500">Email Adress</h1>

        <h2 className="truncate">Eminentman91@gmail.com </h2>
      </div>
      <div className="px-4 py-6 grid grid-cols-2 gap">
        <h1 className="text-sm font-medium text-gray-500">Mobile No</h1>

        <dd>8534807411 </dd>
      </div>
      <div className="px-4 py-6 grid grid-cols-2 gap ">
        <h2 className="text-sm font-medium text-gray-500">About</h2>

        <h3>
          I have studied from code yogi batch. And developed interest in coding.{" "}
        </h3>
      </div>
      <motion.button
        onClick={() => navigate("/")}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        Back
      </motion.button>
    </div>
  );
};

About.defaultProps = {};

export default About;
