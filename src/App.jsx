import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
// import AboutUs from "./components/AboutUs";
import { createRoot } from "react-dom/client";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantCard from "./components/RestaurantCard";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery"

// Chunking
// Code Splitting
// Dynamic Bundling
// lazy loading 
// on demand loading
// dynamic import  ,  all are the same
const Grocery = lazy(() => import("./components/Grocery"));

const AboutUs = lazy(() => import("./components/AboutUs")) ;

function App() {
  const [userName, setUserName] = useState(); 

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: " Vishal Singh",
    } 
    setUserName(data.name)
  }, [])

  return (
    <Provider store={appStore}>
     {/* default value */}
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        {/* Vishal Singh */}
        {/* <UserContext.Provider value={{loggedInUser: "Elon Musk"}}> */}
          {/* Elon Musk */}
          <Header />
        {/* </UserContext.Provider> */}
        <Outlet />
      </UserContext.Provider>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
        {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
