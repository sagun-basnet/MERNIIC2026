import { useEffect, useState } from "react";
import Form from "./components/Form";
// import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Button from "./components/Button";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ServicePage from "./pages/ServicePage";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import LoginPage from "./pages/LoginPage";
import RootLayout from "./layout/RootLayout";
// import DashboardLayout from "./layout/DashboardLayout";
const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/service",
          element: <ServicePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    // {
    //   path: "/dashboard",
    //   element: <DashboarLayout />,
    //   children: [
    //     {
    //       path: "",
    //       element: <Dashboard />,
    //     },
    //     {
    //       path: "/dashboard/user-management",
    //       element: <UserManagement />,
    //     },
    //     {
    //       path: "/dashboard/manage-post",
    //       element: <PostManagement />,
    //     },
    //   ],
    // },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={route} />
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer /> */}
    </>
  );
};
export default App;
