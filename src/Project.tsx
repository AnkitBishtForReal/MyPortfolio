import { motion } from "framer-motion";
import { FC } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
type ProjectProps = {};
const Project: FC<ProjectProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" p-2 border-b-8 border-gray-200 ">
        <div className="flex justify-around">
          <h1 className="text-4xl leading-6 font-medium text-indigo-900 ">
            Projects
          </h1>
        </div>
      </div>

      <div className="p-5">
        <div className="sm:flex">
          <div>
            <h1 className="p-2 text-blue-500"> Todo App</h1>
            <p className="p-2 ">
              About Project-Simple Todo App using react, taiwind css
            </p>
          </div>

          <a
            className="bg-blue-800 rounded-md  p-1 sm:p-2 sm:w-32 sm:h-10"
            href="https://shimmering-moonbeam-ef209f.netlify.app"
          >
            See Project
          </a>
        </div>
        <div className=" sm:flex">
          <div>
            <h2 className="p-2 text-blue-500">Show finder</h2>
            <p className="p-2">
              About Project-Its a show finder app using Redux, Redux Saga,
            </p>
          </div>

          <a
            className="bg-blue-800 rounded-md p-1 sm:p-2 sm:w-36 sm:h-10"
            href="https://gentle-sundae-9d98a0.netlify.app"
          >
            See Project
          </a>
        </div>
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

Project.defaultProps = {};

export default Project;
