/* eslint-disable prettier/prettier */
import React from "react";
import "../styles/property-card.css";
import PropTypes from "prop-types";

const PropertyCard = (props) => {
  const { title, 
    type, 
    bathrooms, 
    bedrooms, 
    price, 
    city, 
    email 
 } = props;

  return (
    <div className="property-card">
      <div className="title">{title}</div>
      <div className="type">{type}</div>
      <div className="bathrooms">{bathrooms}</div>
      <div className="bedrooms">{bedrooms}</div>
      <div className="price">{price}</div>
      <div className="city">{city}</div>
      <div className="email">{email}</div>
    </div>
  );
};

export default PropertyCard;

PropertyCard.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    bedrooms:PropTypes.number.isRequired,
    bathrooms:PropTypes.number.isRequired,
    price:PropTypes.number.isRequired
};
