import { LoadScript, GoogleMap, StandaloneSearchBox } from "@react-google-maps/api";
import "./SearchLocation.scss";
import { useDispatch, useSelector } from "react-redux";
import { setMyAddress } from "../../store/AddressSlice";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Map({}) {
  const dispatch = useDispatch();
  const myAddress = useSelector((store) => store.myAddress.data);
  const [localAddress, setLocalAddress] = useState("Regus, Jharsa, Durga Colony, Sector 39, Gurgaon, Haryana, India");
  const searchBoxRef = useRef(null);

  useEffect(() => {
    dispatch(setMyAddress(localAddress));
  }, [handleLoad]);

  useEffect(() => {
    setLocalAddress(myAddress);
  }, []);

  function handleLoad(searchBox) {
    searchBoxRef.current = searchBox;
  }

  function handlePlacesChanged() {
    const searchBox = searchBoxRef.current;

    if (searchBox) {
      const places = searchBox.getPlaces();

      if (places.length > 0) {
        const selectedPlace = places[0];
        const selectedAddress = selectedPlace.formatted_address;
        setLocalAddress(selectedAddress);
        // dispatch(setMyAddress(selectedAddress));
      }
    }
    console.log(myAddress);
  }

  function handleInputChange(e) {
    setLocalAddress(e.target.value);
    console.log("This is the address which i was talking about", e.target.value);
  }
  function handlePlacesChanged() {
    console.log("handlePlacesChanged called");
    console.log("Local address is being set to -", localAddress);
  }
  return (
    <LoadScript id="script-loader" googleMapsApiKey={process.env.REACT_APP_KEY} libraries={["places"]}>
      <StandaloneSearchBox className="search-input-container" id="stand-search" onLoad={handleLoad} onPlacesChanged={handlePlacesChanged}>
        <input type="text" placeholder="Enter the location" value={localAddress} onChange={handleInputChange} />
      </StandaloneSearchBox>
    </LoadScript>
  );
}
