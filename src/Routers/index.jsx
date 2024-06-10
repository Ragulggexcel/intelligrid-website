import { createBrowserRouter, Navigate, useRouteError } from "react-router-dom";
import { pageRoutes } from "./pageroutes";
import HomeLayout from "../Layout/HomeLayout";

const ErrorElement = () => {
  const error = useRouteError();
  const goBack = () => {
    window.location.href = "/";
  };

  return (
    <div>
      <p>
        <span>!</span> Something went wrong.
      </p>
      <p>{error?.message}</p>
      <button className="btn btn-primary" onClick={goBack}>
        Go Back
      </button>
    </div>
  );
};

export const Routers = createBrowserRouter([
  {
    errorElement: <ErrorElement />,
    children: [
      {
        errorElement: <ErrorElement />,
        children: [
          {
            element: <HomeLayout />,
            children: pageRoutes,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
