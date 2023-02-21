import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./lib/routes";
import { ProSidebarProvider } from "react-pro-sidebar";
import "../src/style/input.css";
import "flowbite";

export default function App() {
  return (
    <ChakraProvider>
      <ProSidebarProvider>
        <RouterProvider router={router} />
      </ProSidebarProvider>
    </ChakraProvider>
  );
}
