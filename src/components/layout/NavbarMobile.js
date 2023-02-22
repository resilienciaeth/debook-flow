import { AUTHORS, MYDEBOOKS, NOTIFICATIONS } from "lib/routes";
import React from "react";
import { AiOutlineBell, AiOutlineTeam, AiOutlineSketch } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

export default function NavbarMobile() {
  const location = useLocation();
  const [selected, setSelected] = React.useState(location.pathname);

  return (
    <nav className="fixed border-t-2 bottom-0 left-0 right-0 flex flex-col bg-white p-4 shadow">
      <div className="flex space-x-4 justify-center">
        <div className="flex justify-between w-full">
          <div
            className={`text-center cursor-pointer ${
              selected === MYDEBOOKS ? "text-debook-1" : "text-black"
            }`}
          >
            <Link to={MYDEBOOKS} onClick={() => setSelected(MYDEBOOKS)}>
              <AiOutlineTeam size={30} />
            </Link>
          </div>
          <div
            className={`text-center cursor-pointer ${
              selected === AUTHORS ? "text-debook-1" : "text-black"
            }`}
          >
            <Link to={AUTHORS} onClick={() => setSelected(AUTHORS)}>
              <AiOutlineSketch size={30} />
            </Link>
          </div>
          <div
            className={`text-center cursor-pointer ${
              selected === NOTIFICATIONS ? "text-debook-1" : "text-black"
            }`}
          >
            <Link to={NOTIFICATIONS} onClick={() => setSelected(NOTIFICATIONS)}>
              <AiOutlineBell size={30} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
