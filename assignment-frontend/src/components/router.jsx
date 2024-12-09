import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Sidebar from "./Sidebar";
import DashboardLayout from "./Layout";
import SpoofChecker from "./SpoofChecker";
import UserSettings from "./UserSettings";
import UserManagement from "./UserManagement";

const router = createBrowserRouter([
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
    //   { path: "get-started", element: <GetStarted /> },
    // { path: "progress", element: <Progress /> },
    // { path: "feedback", element: <Feedback /> },
      {
        path: "sidebar",
        element: <Sidebar />,
      },

      {
        path: "spoofchecker", 
        element: <SpoofChecker/>, 
      },

      {
        path: "usersettings", 
        element: <UserSettings/>, 
      },
      {
        path: "usermanagement", 
        element: <UserManagement/>, 
      },
      // Add other dashboard children here
    ],
  },
]);

export default router;
