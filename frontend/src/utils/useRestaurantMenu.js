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
        `https://wedeliver-pranays-projects-abd5e9c0.vercel.app/api/restaurants/${resId}`
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
