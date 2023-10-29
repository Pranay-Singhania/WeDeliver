import { useEffect, useState } from "react";

const useOfferRes = () => {
  const [resList, setResList] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://wedeliver-pranays-projects-abd5e9c0.vercel.app/api/restaurants");
    const json = await data.json();
    // setResList(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants ||
    //     json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
    //       ?.restaurants ||
    //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //       ?.restaurants
    // );
    setResList(json);
  };
  return resList;
};

export default useOfferRes;
