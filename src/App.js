import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import STORE from "./Components/Store/STORE";
import HOME from "./Components/Home/HOME";
import ABOUT from "./Components/About/ABOUT";
import CONTACT from "./Components/Contact/CONTACT";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import ProductDetail from "./Components/Store/ProductDetail";
import CartProvider from "./Components/Context/CartProvider";
// import { Router } from "react-router-dom";
// const Router = createBrowserRouter([
//   { path: "/STORE", element: <STORE /> },
//   { path: "/", element: <HOME /> },
//   {path: "/ABOUT", element: <ABOUT /> },
//   {path:'/CONTACT',element:<CONTACT/>}
// ]);
const App = () => {
  return (
    <CartProvider>
      <Header />
      <main style={{ minHeight: "90vh" }}>
        {/* <RouterProvider router={Router} /> */}
        <Switch>
          <Route path="/" exact>
            <Redirect to="/HOME" />
          </Route>
          <Route exact path="/HOME">
            <HOME />
          </Route>
          <Route path="/STORE/:Id" exact>
            <ProductDetail />
          </Route>
          <Route exact path="/STORE">
            <STORE />
          </Route>
          <Route path="/ABOUT">
            <ABOUT />
          </Route>
          <Route path="/CONTACT">
            <CONTACT />
          </Route>
        </Switch>
      </main>
      <Footer />
    </CartProvider>
  );
};

export default App;
