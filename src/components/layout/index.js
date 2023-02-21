import { LOGIN } from "lib/routes";
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "hooks/auth";
import Navbar from "components/layout/Navbar";
import { Box, Flex, Image } from "@chakra-ui/react";
import NavbarMobile from "./NavbarMobile";

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
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar />
      <div style={{ flex: 1, overflowY: "scroll" }}>
        <Flex mx="auto" bgColor="transparent" w="full">
          <Box w="900px">
            <Outlet />
          </Box>
        </Flex>
      </div>
      <NavbarMobile />
    </div>
  );
}
