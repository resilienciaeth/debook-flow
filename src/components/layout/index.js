import { LOGIN } from "lib/routes";
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "hooks/auth";
import Navbar from "components/layout/Navbar";
import { Box, Flex } from "@chakra-ui/react";
import NavbarMobile from "./NavbarMobile";
import Loader from "components/Loader";

export default function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && pathname.startsWith("/protected") && !user)
      navigate(LOGIN);
  }, [pathname, user, isLoading]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="layout-wrapper min-h-screen">
      <Navbar className="fixed w-full z-50" />
      <div className="layout-content mt-20">
        <div className="pb-12 mx-auto nm:flex nm:flex-col nm:justify-center nm:items-center ">
          <div className="nm:flex nm:flex-col nm:justify-center nm:items-center">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="navbar-container nm:max-w-md nm:flex nm:justify-center nm:items-center">
        <NavbarMobile />
      </div>
    </div>
  );
}
