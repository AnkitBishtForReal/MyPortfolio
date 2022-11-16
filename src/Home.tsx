import { FC } from "react";
type HomeProps = {};
const Home: FC<HomeProps> = (props) => {
  return (
    <div className="flex justify-between md:flex-row  flex-col">
      <div>
        <h1 className=" text-5xl text-purple-700 md:text-7xl font-bold">
          HI! I AM ANKIT BISHT. FRONT-END DEVELOPER.
        </h1>
        <h2 className="py-3 text-5xl  md:text-7xl font-bold">
          I like coding.{" "}
        </h2>
      </div>
      <div>
        <img
          className=" w-32 rounded-full object-cover border-8 border-gray-400 sm:w-3/4 "
          src="https://cdn.discordapp.com/attachments/966570615236595712/997465364571099167/IMG-20220103-WA00263.jpg"
        />
      </div>
    </div>
  );
};

Home.defaultProps = {};

export default Home;
