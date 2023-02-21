import { Box, Flex } from "@chakra-ui/react";
import Navbar from "components/layout/Navbar";
import { useAuth } from "hooks/auth";
import { LOGIN } from "lib/routes";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";

export default function LayoutFourAgreements() {
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
        <Flex pb="12" mx="auto" w="full">
          <Box w="900px">
            <Outlet />
          </Box>
        </Flex>
      </div>
      <NavbarMobile />
    </div>
  );
}
