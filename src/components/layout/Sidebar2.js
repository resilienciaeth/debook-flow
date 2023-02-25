import { Sidebar } from "flowbite-react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineBookOpen,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";
import {
  AUTHORS,
  COMMUNITY,
  FEEDFOURAGREEMENTS,
  MARKETPLACE,
  MYDEBOOKS,
  PROTECTED,
  USERS,
} from "lib/routes";
import { Link } from "react-router-dom";
import Avatar from "components/profile/Avatar";
import { GoVerified } from "react-icons/go";
import { useAuth, useLogout } from "hooks/auth";
import {
  AiOutlineBook,
  AiOutlineCompass,
  AiOutlineShop,
  AiOutlineWallet,
} from "react-icons/ai";

const {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
  Code,
  Image,
} = require("@chakra-ui/react");

function BsBookHalfNew() {
  return <AiOutlineBook size={29} className="text-debook-2" />;
}

function HiInboxNew() {
  return <AiOutlineWallet size={29} className="text-debook-2" />;
}

function HiUserNew() {
  return <AiOutlineShop size={29} className="text-debook-2" />;
}

function HiArrowSmRightNew() {
  return <AiOutlineCompass size={29} className="text-debook-2" />;
}

function ActiveUser(onClose) {
  const { user, isLoading } = useAuth();

  if (isLoading) return "Loading auth user..";

  return (
    <Stack align="center" spacing="5" my="8">
      <Avatar onClick={onClose} user={user} size="xl" />

      <div className="flex flex-row items-center space-x-2">
        <Code size="md" fontSize="16px">
          @{user.username}
        </Code>
        {user.isVerified === true && (
          <GoVerified size={20} className="text-[#FF4227]" />
        )}
      </div>
      <Link to={`${PROTECTED}/profile/${user.id}`} onClick={onClose}>
        <Button
          bg="#ff4227"
          borderColor="#ff4227"
          color="white"
          _hover={{ bg: "#ebedf0" }}
          w="full"
          className="bg-[#FF4227] text-white"
        >
          Edit Profile
        </Button>
      </Link>
    </Stack>
  );
}

export default function Sidebar2() {
  const { logout } = useLogout();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { user, isLoading } = useAuth();

  if (isLoading) return "Loading auth user..";

  return (
    <>
      <GiHamburgerMenu
        className="sb-button text-[#FF4227]"
        size={20}
        ref={btnRef}
        onClick={onOpen}
      />

      <Drawer
        size="lg"
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent w="270px" maxW="270px">
          <DrawerCloseButton style={{ color: "#FF4227" }} />

          <ActiveUser onClose={onClose} />

          <div className="w-fit">
            <Sidebar aria-label="Sidebar with multi-level dropdown example">
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <Link
                    to={`${PROTECTED}/${user.id}/wallets`}
                    onClick={onClose}
                  >
                    <Sidebar.Item href="#" icon={HiInboxNew}>
                      My wallets
                    </Sidebar.Item>
                  </Link>
                  <Link to={MYDEBOOKS} onClick={onClose}>
                    <Sidebar.Item href="#" icon={BsBookHalfNew}>
                      My debooks
                    </Sidebar.Item>
                  </Link>
                  <Link to={MARKETPLACE} onClick={onClose}>
                    <Sidebar.Item href="#" icon={HiUserNew}>
                      Marketplace
                    </Sidebar.Item>
                  </Link>
                  <Link to={AUTHORS} onClick={onClose}>
                    <Sidebar.Item href="#" icon={HiArrowSmRightNew}>
                      Explore Authors
                    </Sidebar.Item>
                  </Link>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
            <div className="flex items-center justify-center">
              <Button
                colorScheme="#FF4227"
                bg="#FF4227"
                p="4"
                size="sm"
                onClick={logout}
                isLoading={isLoading}
              >
                Logout
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
