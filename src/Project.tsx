import { FC } from "react";
type ProjectProps = {};
const Project: FC<ProjectProps> = (props) => {
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
          <div></div>
          <div>
            <a
              className="bg-blue-800 rounded-md  p-1 sm:p-2"
              href="https://shimmering-moonbeam-ef209f.netlify.app"
            >
              See Project
            </a>
          </div>
        </div>
        <div className=" sm:flex">
          <div>
            <h2 className="p-2 text-blue-500">Show finder</h2>
            <p className="p-2">
              About Project-Its a show finder app using Redux, Redux Saga,
            </p>
          </div>
          <div>
            <a
              className="bg-blue-800 rounded-md p-1 sm:p-2"
              href="https://gentle-sundae-9d98a0.netlify.app"
            >
              See Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Project.defaultProps = {};

export default Project;
