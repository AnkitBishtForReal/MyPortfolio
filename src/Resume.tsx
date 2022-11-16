import { motion } from "framer-motion";
import { FC } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
type ResumeProps = {};
const Resume: FC<ResumeProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className=" p-2 border-b-8 border-gray-200 ">
          <div className="flex justify-around">
            <h1 className="text-4xl leading-6 font-medium text-indigo-900 ">
              Resume
            </h1>
          </div>
        </div>

        <div>
          <dt>
            <div className="px-4 py-6 sm:grid grid-cols-2 gap">
              <dt className="text-sm font-medium text-gray-500">Name</dt>

              <dd>Ankit Bisht </dd>
            </div>

            <div className=" px-2 py-4 sm:grid grid-cols-2 gap">
              <dt className="text-sm font-medium text-gray-500">Education</dt>

              <dd>Civil Engineering Diploma From GP Lohaghat </dd>
            </div>
            <div className=" px-4 py-6 grid grid-cols-2 gap ">
              <dt className="text-sm font-medium text-gray-500">
                Intermediate
              </dt>

              <dd>Oakland Public School Lohaghat </dd>
            </div>
            <div className="  px-4 py-6 grid grid-cols-2 gap ">
              <dt className="text-sm font-medium text-gray-500">
                Certiificates
              </dt>

              <dd>Code Yogi 6 months Completion Certificate</dd>
            </div>
            <div className="px-2 py-4  sm:grid grid-cols-2 gap ">
              <dt className="text-sm font-medium text-gray-500 ">Skills</dt>

              <dd className="sm:font-bold">
                Tailwind Css,JavaScript,React,Redux,Redux Saga,TypeScript
              </dd>
            </div>
          </dt>
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

Resume.defaultProps = {};

export default Resume;
