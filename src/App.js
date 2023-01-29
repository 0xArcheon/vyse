import './App.css';
import { SDK_VERSION } from 'firebase/app';
import Home from './pages/Home';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import { Children } from 'react';
import Products from './pages/Products';
import Product from './pages/Product';


const Layout = () => {
  return (
    <div className='App'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/admin",
    element: <AdminPanel />
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products/:id",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      },

    ]
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
