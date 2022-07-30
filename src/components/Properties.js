import axios from "axios";
import { React, useEffect, useState } from "react";
import Alert from "./Alert";
import PropertyCard from "./PropertyCard";
import "../styles/properties.css";

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
    return (
      <div>
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
