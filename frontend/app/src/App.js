import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Restaurants } from './containers/Restaurants.jsx';
import { Foods } from './containers/Foods.jsx';
import { Orders } from './containers/Orders.jsx';


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/restaurants" element={<Restaurants/>}/>
          <Route path="/restaurants/:restaurantsId/foods" element={<Foods/>}/>
        <Route path="/foods" element={<Foods/>}/>      
        <Route path="/orders" element={<Orders/>}/>
      </Routes>
    </BrowserRouter>
  );
}
