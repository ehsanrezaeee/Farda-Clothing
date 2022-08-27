import Home from "./components/pages/home";
import { Routes, Route } from "react-router-dom";
import NavBare from "./components/pages/Navigation-Bar";
import Authentication from "./components/pages/Authentication/Authentication";
import Shop from './components/pages/shop/shop';
import Checkout from "./components/Checkout/Checkout";


const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<NavBare />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
