// use of / is it links to the root page -it is absolute links vice versa is relative links



import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { About } from "./components/about";

import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { OrderConfirmed } from "./components/OrderConfirmed";
import { NoMatch } from "./components/NoMatch";
import { Products } from "./components/Products";
import { NewProducts } from "./components/NewProducts";
import { FeatureProducts } from "./components/FeatureProducts";
import { User } from "./components/User";
import { UserDetails } from "./components/UserDetails";
import { Admin } from "./components/Admin";
const LazyAbout = React.lazy(()=> import('./components/About') )

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<React.Suspense fallback='Loading...'><LazyAbout /> </React.Suspense>}></Route>
        <Route path="order-summary" element={<OrderConfirmed />} />

        <Route path="*" element={<NoMatch />} />
        <Route path="products" element={<Products />}>
          <Route path="new" element={<NewProducts />} />
          <Route path="feature" element={<FeatureProducts />} />
          <Route index element={<FeatureProducts />} />
        </Route>
        <Route path="users" element={<User />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
