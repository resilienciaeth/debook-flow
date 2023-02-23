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
import FeedTheFreedom from "components/TheFreedom";
import ReaderTheFreedom from "components/TheFreedom/reader";
import Authors from "components/authors/Authors";
import MintTheFreedom from "components/mint/MintTheFreedom";
import Marketplace from "components/marketplace";
import LayoutTheFreedom from "components/TheFreedom/layout";
import ReaderFourAgreements from "components/FourAgreements/reader";
import FeedFourAgreements from "components/FourAgreements";
import MintFourAgreements from "components/mint/MintFourAgreements";

export const ROOT = "/login";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const PROTECTED = "/protected";
export const DASHBOARD = "/protected/dashboard";
export const USERS = "/protected/users";
export const PROFILE = "/protected/profile/:id";
export const COMMENTS = "/protected/comments/:id";
export const WALLETS = "/protected/:id/wallets";
export const SEARCH = "protected/search";
export const MYDEBOOKS = "/protected/mydebooks";
export const READER = "/protected/community/reader";
export const READERFOURAGREEMENTS = "/protected/reader/fouragreements";
export const DMS = "protected/dms";
export const NOTIFICATIONS = "protected/notifications";
export const FEEDFOURAGREEMENTS = "/protected/feedFourAgreements";
export const AUTHORS = "/protected/authors";
export const MINTTHEFREEDOM = "/protected/authors/buythefreedom";
export const MINTFOURAGREEMENTS = "/protected/authors/buyfouragreement";
export const MARKETPLACE = "/protected/marketplace";
export const FEEDTHEFREEDOM = "/protected/feedTheFreedom";
export const READERTHEFREEDOM = "/protected/reader/thefreedom";
export const COMMUNITY = "/protected/community";

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
        path: MINTFOURAGREEMENTS,
        element: <MintFourAgreements />,
      },
      {
        path: MINTTHEFREEDOM,
        element: <MintTheFreedom />,
      },
      {
        path: MARKETPLACE,
        element: <Marketplace />,
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
  {
    path: PROTECTED,
    element: <LayoutTheFreedom />,
    children: [
      {
        path: FEEDTHEFREEDOM,
        element: <FeedTheFreedom />,
      },
      {
        path: SEARCH,
        element: <Search />,
      },
      {
        path: READERTHEFREEDOM,
        element: <ReaderTheFreedom />,
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
