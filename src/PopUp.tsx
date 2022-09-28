import { FC, useState } from "react";
type PopUpProps = {};
const PopUp: FC<PopUpProps> = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="relative bg-red-500 flex justify-between z-20">
        <div>
          <h1>items</h1>
          <h2>xyz</h2>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-green-500 "
        >
          toggle
        </button>
      </div>
      (
      <div
        className={
          " fixed top-0 bottom-0 right-0 z-10 bg-yellow-500 transform  w-40" +
          (menuOpen ? "" : "translate-x-full")
        }
      >
        jxdnknkfbnknknknknknknk
      </div>
      )
    </>
  );
};

PopUp.defaultProps = {};

export default PopUp;
