import { useEffect, useState } from "react";

const useOfferRes = () => {
  const [resList, setResList] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("mongodb+srv://pranays4299:ZqH50ZVpzUqTKgAa@cluster0.t8s5tyf.mongodb.net/?retryWrites=true&w=majority/api/restaurants");
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
