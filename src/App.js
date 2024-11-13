import { Routes, Route } from "react-router-dom";

import './scss/app.scss'

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from "./pages/Cart";
import MainLayout from "./layouts/MainLayout";
import ItemDescription from "./pages/ItemDescription";




function App() {

  return (

    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<ItemDescription />} />
      </Route>

    </Routes>



  );
}

export default App;
