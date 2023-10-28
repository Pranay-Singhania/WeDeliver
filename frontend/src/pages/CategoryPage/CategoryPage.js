import React, { useEffect } from "react";
import "./CategoryPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { setMyAddress } from "../../store/AddressSlice";
import mockMenu from "../../utils/mockMenu";
import { data } from "../../utils/dummyMenu";
import Card from "../../components/Card/Card";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import CategoryFeedResults from "../../components/CategoryFeedResults/CategoryFeedResults";
const CategoryPage = () => {
  const dispatch = useDispatch();
  const myAddress = useSelector((store) => store.myAddress.data);
  useEffect(() => {
    dispatch(setMyAddress(myAddress));
  }, []);
  // console.log(mockMenu.data.cards[0].card.card);
  return (
    <>
      <CategoryNav />
      <CategoryFeedResults />
    </>
  );
};

export default CategoryPage;
