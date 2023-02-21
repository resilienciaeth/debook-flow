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
import { COMMUNITY, PROTECTED, USERS } from "lib/routes";
import { Link } from "react-router-dom";
import Avatar from "components/profile/Avatar";
import { GoVerified } from "react-icons/go";
import { useAuth } from "hooks/auth";

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
  return <HiOutlineBookOpen size={29} className="text-[#FF4227]" />;
}

function HiInboxNew() {
  return <HiInbox size={29} className="text-[#FF4227]" />;
}

function HiUserNew() {
  return <HiUser size={29} className="text-[#FF4227]" />;
}

function HiArrowSmRightNew() {
  return <HiInbox size={29} className="text-[#FF4227]" />;
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
                      Connect Your Wallet
                    </Sidebar.Item>
                  </Link>
                  <Sidebar.Collapse icon={BsBookHalfNew} label="My debooks">
                    <div className="flex flex-col space-y-2">
                      <Link to={COMMUNITY}>
                        <div className="flex w-full space-x-2 px-0 hover:bg-gray-200 rounded-2xl flex-row items-center justify-center">
                          <Image
                            w={10}
                            rounded="3xl"
                            src="https://res.cloudinary.com/drxuutjwr/image/upload/v1674677968/DEBOOK_PORTADA_a2sabb.jpg"
                          />
                          <h1 className="text-[14px]">
                            The Freedom of being who you are
                          </h1>
                        </div>
                      </Link>

                      <div className="flex w-full space-x-2 px-0 hover:bg-gray-200 rounded-2xl flex-row items-center justify-start ">
                        <Image
                          w={10}
                          rounded="3xl"
                          src="https://res.cloudinary.com/drxuutjwr/image/upload/v1672258550/debook-art_yawpmi.png"
                        />
                        <h1 className="text-[14px]">DEBOOK Magickey</h1>
                      </div>
                    </div>
                  </Sidebar.Collapse>
                  <Sidebar.Item href="#" icon={HiInboxNew}>
                    Inbox
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiUserNew}>
                    Test
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiArrowSmRightNew}>
                    Sign Out
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
