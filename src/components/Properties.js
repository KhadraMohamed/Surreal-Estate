import axios from "axios";
import { React, useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import Alert from "./Alert";
import PropertyCard from "./PropertyCard";
import "../styles/properties.css";
import SideBar from "./SideBar";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  // const alert = {
  // message: "",
  //  isSuccess: false,
  // };
  // const [alert1, setAlert1] = useState(alert);
  // const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing/`)
      .then(({ data }) => setProperties(data));
    // .catch(() => {
    // setAlert1({
    // message: "Server error. Please try again later.",
    // });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
  //     .then(({ data }) => setProperties(data))
  //     .catch((err) => console.error(err));
  // }, [search]);

  return (
    <div>
      <SideBar />
      {properties.map((property) => (
        <div key={property._id} className="item">
          <PropertyCard {...property} />
        </div>
      ))}
    </div>
    /* <Alert message={alert1.message} success={alert1.isSuccess} /> */
  );
};

export default Properties;
