import Login from "components/auth/Login";
import Register from "components/auth/Register";
import { createBrowserRouter } from "react-router-dom";
import Layout from "components/layout";
import Layout1 from "components/community/layout";
import Dashboard from "components/dashboard";
import Comments from "components/comments";
import Profile from "components/profile";
import Users from "components/users";
import ConnectWallet from "components/wallets";
import Community from "components/community";
import Reader from "components/reader";
import Search from "components/search";
import Dms from "components/dms";
import Notifications from "components/notifications";
import MyDebooks from "components/mydebooks";
import LayoutFourAgreements from "components/FourAgreements/layout";
import FeedFourAgreements from "components/FourAgreements";
import ReaderFourAgreements from "components/FourAgreements/reader";
import Authors from "components/authors/Authors";

export const ROOT = "/login";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const PROTECTED = "/protected";
export const DASHBOARD = "/protected/dashboard";
export const USERS = "/protected/users";
export const PROFILE = "/protected/profile/:id";
export const COMMENTS = "/protected/comments/:id";
export const WALLETS = "/protected/:id/wallets";
export const COMMUNITY = "/protected/community/thefreedom";
export const SEARCH = "protected/search";
export const MYDEBOOKS = "/protected/mydebooks";
export const READER = "/protected/community/reader";
export const READERFOURAGREEMENTS = "/protected/reader/fourAgreements";
export const DMS = "protected/dms";
export const NOTIFICATIONS = "protected/notifications";
export const FEEDFOURAGREEMENTS = "/protected/feedfouragreements";
export const AUTHORS = "/protected/authors";

export const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: LOGIN, element: <Login /> },
  { path: REGISTER, element: <Register /> },
  {
    path: PROTECTED,
    element: <Layout />,
    children: [
      {
        path: DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: USERS,
        element: <Users />,
      },
      {
        path: PROFILE,
        element: <Profile />,
      },
      {
        path: MYDEBOOKS,
        element: <MyDebooks />,
      },
      {
        path: AUTHORS,
        element: <Authors />,
      },
      {
        path: COMMENTS,
        element: <Comments />,
      },
      {
        path: WALLETS,
        element: <ConnectWallet />,
      },
    ],
  },
  {
    path: PROTECTED,
    element: <Layout1 />,
    children: [
      {
        path: COMMUNITY,
        element: <Community />,
      },
      {
        path: SEARCH,
        element: <Search />,
      },
      {
        path: READER,
        element: <Reader />,
      },
      {
        path: NOTIFICATIONS,
        element: <Notifications />,
      },
      {
        path: DMS,
        element: <Dms />,
      },
    ],
  },
  {
    path: PROTECTED,
    element: <LayoutFourAgreements />,
    children: [
      {
        path: FEEDFOURAGREEMENTS,
        element: <FeedFourAgreements />,
      },
      {
        path: SEARCH,
        element: <Search />,
      },
      {
        path: READERFOURAGREEMENTS,
        element: <ReaderFourAgreements />,
      },
      {
        path: NOTIFICATIONS,
        element: <Notifications />,
      },
      {
        path: DMS,
        element: <Dms />,
      },
    ],
  },
]);
