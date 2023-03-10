import { useAuth } from "hooks/auth";
import {
  AUTHORS,
  DMS,
  MARKETPLACE,
  MYDEBOOKS,
  NOTIFICATIONS,
  PROFILE,
  PROTECTED,
  USERS,
  SEARCH,
} from "lib/routes";
import React from "react";
import {
  AiOutlineBell,
  AiOutlineTeam,
  AiOutlineSketch,
  AiOutlineMedium,
  AiOutlineHome,
  AiOutlineCompass,
  AiOutlineBook,
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineShop,
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

export default function NavbarMobile() {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  const [selected, setSelected] = React.useState(location.pathname);

  return (
    <nav className="sticky border-t-2 navbarmobile rounded-[11px] bottom-0 left-0 right-0 flex flex-col bg-white p-4 shadow">
      <div className="flex space-x-2 justify-center">
        <div className="flex justify-between w-full">
          <div
            className={`text-center cursor-pointer rounded-full px-2 py-2 ${
              selected === MYDEBOOKS
                ? "text-white bg-debook-2"
                : "text-debook-2 bg-[#FFF2F0]"
            }`}
          >
            <Link to={MYDEBOOKS} onClick={() => setSelected(MYDEBOOKS)}>
              <AiOutlineHome size={20} />
            </Link>
          </div>
          <div
            className={`text-center cursor-pointer rounded-full  px-2 py-2 ${
              selected === AUTHORS
                ? "text-white bg-debook-2"
                : "text-debook-2 bg-[#FFF2F0]"
            }`}
          >
            <Link to={AUTHORS} onClick={() => setSelected(AUTHORS)}>
              <AiOutlineCompass size={20} />
            </Link>
          </div>
          <div
            className={`text-center cursor-pointer rounded-full px-2 py-2 ${
              selected === MARKETPLACE
                ? "text-white bg-debook-2"
                : "text-debook-2 bg-[#FFF2F0]"
            }`}
          >
            <Link to={MARKETPLACE} onClick={() => setSelected(MARKETPLACE)}>
              <AiOutlineShop size={20} />
            </Link>
          </div>
          <div
            className={`text-center cursor-pointer rounded-full  px-2 py-2 ${
              selected === PROFILE
                ? "text-white bg-debook-2"
                : "text-debook-2 bg-[#FFF2F0]"
            }`}
          >
            <Link
              to={`${PROTECTED}/profile/${user?.id}`}
              onClick={() => setSelected(PROFILE)}
            >
              <AiOutlineUser size={20} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
