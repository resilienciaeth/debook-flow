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
      <div className="layout-content mt-24">
        <Flex pb="12" mx="auto" w="full">
          <Box w="900px">
            <Outlet />
          </Box>
        </Flex>
      </div>
      <div className="flex items-center w-[90%] justify-center">
        <NavbarMobile />
      </div>
    </div>
  );
}
