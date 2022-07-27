import React, { useState } from "react";
import "../styles/add-property.css";
import axios from "axios";

const AddProperty = () => {
  const initialState = {
    fields: {
      city: "Manchester",
      title: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const handleAddProperty = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/api/v1/PropertyListing")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <div className="add-property">
      {" "}
      Add Property Page
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="type">
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace"> End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor="bathrooms">
          bathrooms
          <input
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="bedrooms">
          bedrooms
          <input
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="email">
          email
          <input
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="price">
          price
          <input
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </label>
        <button type="submit"> Add </button>
      </form>
    </div>
  );
};

export default AddProperty;
