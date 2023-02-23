import {
  COMMUNITY,
  DMS,
  FEEDFOURAGREEMENTS,
  FEEDTHEFREEDOM,
  NOTIFICATIONS,
  READER,
  READERFOURAGREEMENTS,
  READERTHEFREEDOM,
  SEARCH,
} from "lib/routes";
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
    <nav className="fixed border-t-2 navbarmobile rounded-[11px] bottom-0 left-0 right-0 flex flex-col bg-white p-4 shadow">
      <div className="flex space-x-2 justify-center">
        <div className="flex justify-between w-full">
          <div
            className={`text-center cursor-pointer rounded-full px-2 py-2 ${
              selected === COMMUNITY
                ? "text-white bg-debook-2"
                : "text-debook-2 bg-[#FFF2F0]"
            }`}
          >
            <Link to={FEEDTHEFREEDOM} onClick={() => setSelected(COMMUNITY)}>
              <AiOutlineHome size={20} />
            </Link>
          </div>
          <div
            className={`text-center cursor-pointer rounded-full  px-2 py-2 ${
              selected === SEARCH
                ? "text-white bg-debook-2"
                : "text-debook-2 bg-[#FFF2F0]"
            }`}
          >
            <Link to={SEARCH} onClick={() => setSelected(SEARCH)}>
              <AiOutlineCompass size={20} />
            </Link>
          </div>
          <div
            className={`text-center cursor-pointer rounded-full px-2 py-2 ${
              selected === READER
                ? "text-white bg-debook-2"
                : "text-debook-2 bg-[#FFF2F0]"
            }`}
          >
            <Link to={READERTHEFREEDOM} onClick={() => setSelected(READER)}>
              <AiOutlineBook size={20} />
            </Link>
          </div>
          <div
            className={`text-center cursor-pointer rounded-full  px-2 py-2 ${
              selected === NOTIFICATIONS
                ? "text-white bg-debook-2"
                : "text-debook-2 bg-[#FFF2F0]"
            }`}
          >
            <Link to={NOTIFICATIONS} onClick={() => setSelected(NOTIFICATIONS)}>
              <AiOutlineBell size={20} />
            </Link>
          </div>
          <div
            className={`text-center cursor-pointer rounded-full  px-2 py-2 ${
              selected === DMS
                ? "text-white bg-debook-2"
                : "text-debook-2 bg-[#FFF2F0]"
            }`}
          >
            <Link to={DMS} onClick={() => setSelected(DMS)}>
              <AiOutlineMail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
