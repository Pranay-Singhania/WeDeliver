import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import { Provider } from "react-redux";
import store from "./store/Store";
import RestaurantModal from "./components/RestaurantModal/RestaurantModal";
import Admin from "./pages/AdminPage/Admin.js";
import AuthenticatedRoute from "./components/AuthenticatedRoute/AuthenticatedRoute.js";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/restaurants/*"
              element={
                <AuthenticatedRoute>
                  <CategoryPage />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/restaurants/:resId"
              element={
                <AuthenticatedRoute>
                  <RestaurantModal />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/super_admin"
              element={
                <AuthenticatedRoute>
                  <Admin />
                </AuthenticatedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
