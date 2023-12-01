import { LoadScript, GoogleMap, StandaloneSearchBox } from "@react-google-maps/api";
import "./SearchLocation.scss";
import { useDispatch, useSelector } from "react-redux";
import { setMyAddress } from "../../store/AddressSlice";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
export default function Map(props) {
  const dispatch = useDispatch();
  const myAddress = useSelector((store) => store.myAddress.data);
  const searchBoxRef = useRef(null); // Ref to store the StandaloneSearchBox instance

  const navigate = useNavigate();
  function handleLoad(searchBox) {
    searchBoxRef.current = searchBox;

    console.log(process.env.REACT_APP_KEY);
    console.log("handleLoad called");
  }
  function handlePlacesChanged() {
    const searchBox = searchBoxRef.current;

    if (searchBox) {
      const places = searchBox.getPlaces();

      if (places.length > 0) {
        const selectedPlace = places[0];
        const selectedAddress = selectedPlace.formatted_address;

        dispatch(setMyAddress(selectedAddress));
      }
    }
    console.log(myAddress);
  }

  document.addEventListener("keydown", function (e) {
    // Check if the pressed key is the "Enter" key
    if (e.key === "Enter" || e.keyCode === 13) {
      // Trigger a click event on the element
      navigate("/restaurants");
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
