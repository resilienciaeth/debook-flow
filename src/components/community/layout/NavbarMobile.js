import { COMMUNITY, DMS, NOTIFICATIONS, READER, SEARCH } from "lib/routes";
import React from "react";
import {
  AiOutlineHome,
  AiOutlineBook,
  AiOutlineCompass,
  AiOutlineBell,
  AiOutlineMail,
} from "react-icons/ai";
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
              selected === COMMUNITY ? "text-debook-1" : "text-black"
            }`}
          >
            <Link to={COMMUNITY} onClick={() => setSelected(COMMUNITY)}>
              <AiOutlineHome size={30} />
            </Link>
          </div>
          <div
            className={`text-center cursor-pointer ${
              selected === SEARCH ? "text-debook-1" : "text-black"
            }`}
          >
            <Link to={SEARCH} onClick={() => setSelected(SEARCH)}>
              <AiOutlineCompass size={30} />
            </Link>
          </div>
          <div
            className={`text-center cursor-pointer ${
              selected === READER ? "text-debook-1" : "text-black"
            }`}
          >
            <Link to={READER} onClick={() => setSelected(READER)}>
              <AiOutlineBook size={30} />
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
          <div
            className={`text-center cursor-pointer ${
              selected === DMS ? "text-debook-1" : "text-black"
            }`}
          >
            <Link to={DMS} onClick={() => setSelected(DMS)}>
              <AiOutlineMail size={30} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
