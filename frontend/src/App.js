import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import { Provider } from "react-redux";
import store from "./store/Store";
import RestaurantModal from "./components/RestaurantModal/RestaurantModal";
import Admin from "./pages/AdminPage/Admin.js";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element=<HomePage /> />
            <Route path="/restaurants" element=<CategoryPage /> />
            <Route path="/restaurants/:resId" element=<RestaurantModal /> />
            <Route path="/super_admin" element=<Admin /> />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
