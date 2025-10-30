import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login")
      document.title = "Login - React SB Admin";
    else if (location.pathname === "/register")
      document.title = "Register - React SB Admin";
    else if (location.pathname === "/forgot-password")
      document.title = "Forgot Password - React SB Admin";
    else if (location.pathname === "/dashboard")
      document.title = "Dashbaord - React SB Admin";
    else document.title = "React SB Admin";
  }, [location.pathname]);

  return children;
};

export default PageTitle;

// const PageTitle2 = ({ children }) => {
//   const location = useLocation();

//   useEffect(() => {
//     switch (location.pathname) {
//       case "/login":
//         document.title = "Login - React SB Admin";
//         break;
//       case "/register":
//         document.title = "Register - React SB Admin";
//         break;
//       case "/dashboard":
//         document.title = "Dashboard - React SB Admin";
//         break;
//       default:
//         document.title = "React SB Admin";
//     }
//   }, [location.pathname]);

//   return children;
// };

// export default PageTitle2;
