import { lazy } from "react";

import  LandingPage from "../Pages/landingpage";
import Contact from "../Pages/contact";
import Blog from "../Pages/blog";
import CaseStudies from  "../Pages/casestudies";
import Team from  "../Pages/team";
import AboutUs from"../Pages/aboutus";

export const pageRoutes = [
  { path: "/", element: <LandingPage /> },
  { path: "/contact", element: <Contact /> },
  { path: "/casestudies", element: <CaseStudies /> },
  { path: "/team", element: <Team /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/blog", element: <Blog /> },
];

