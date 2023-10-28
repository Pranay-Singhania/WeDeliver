import { LoadScript, GoogleMap, StandaloneSearchBox } from "@react-google-maps/api";
import "./SearchLocation.scss";
import { useDispatch, useSelector } from "react-redux";
import { setMyAddress } from "../../store/AddressSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Map(props) {
  const dispatch = useDispatch();
  const myAddress = useSelector((store) => store.myAddress.data);

  const navigate = useNavigate();
  function handleLoad() {
    console.log(process.env.REACT_APP_KEY);
    console.log("handleLoad called");
  }
  document.addEventListener("keydown", function (e) {
    // Check if the pressed key is the "Enter" key
    if (e.key === "Enter" || e.keyCode === 13) {
      // Trigger a click event on the element
      navigate("./CategoryPage");
    }
  });
  function handlePlacesChanged() {
    console.log("handlePlacesChanged called");
    console.log(myAddress);
  }
  useEffect(() => {
    console.log(myAddress);
  }, [myAddress]);
  return (
    <LoadScript id="script-loader" googleMapsApiKey={process.env.REACT_APP_KEY} libraries={["places"]}>
      <StandaloneSearchBox className="search-input-container" id="stand-search" onLoad={handleLoad} onPlacesChanged={handlePlacesChanged}>
        <input
          type="text"
          placeholder="Enter the location"
          value={myAddress}
          onChange={(e) => {
            dispatch(setMyAddress(e.target.value));
          }}
        />
      </StandaloneSearchBox>
    </LoadScript>
  );
}
