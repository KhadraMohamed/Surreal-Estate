import axios from "axios";
import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Alert from "./Alert";
import PropertyCard from "./PropertyCard";
import "../styles/properties.css";
import SideBar from "./SideBar";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing/`)
      .then(({ data }) => setProperties(data))
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
        });
      }, []);
    const { search } = useLocation();
    useEffect(() => {
      axios
        .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
        .then(({ data }) => setProperties(data))
        .catch((err) => console.error(err));
    }, [search]);
    return (
      <div>
        <SideBar />
        <div> Properties Page </div>;
        <div className="properties">
          {properties.map((property) => (
            <div key={property._id} className="item">
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
        <Alert message={alert.message} success={alert.isSuccess} />
      </div>
    );
  });
};

export default Properties;
