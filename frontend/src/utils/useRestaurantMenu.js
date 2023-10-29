import axios from "axios";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const resp = await axios.get(
        `mongodb+srv://pranays4299:ZqH50ZVpzUqTKgAa@cluster0.t8s5tyf.mongodb.net/?retryWrites=true&w=majority/api/restaurants/${resId}`
        // `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=${resId}`
      );
      setResInfo(resp.data.data);
      console.log("respdata", resp.data.data);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
