import React from "react";
import "../styles/sidebar.css";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";

const buildQueryString = (operation, valueObj) => {
  const { search } = useLocation();

  const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify(valueObj),
  };
  return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
};
const SideBar = () => {
  return (
    <div className="sidebar">
      <Link className="sidebar-links" to={("query", { city: "Manchester" })}>
        Manchester
      </Link>
      <Link className="sidebar-links" to={("query", { city: "Sheffield" })}>
        Sheffield
      </Link>
      <Link className="sidebar-links" to={("query", { city: "Leeds" })}>
        Leeds
      </Link>
      <Link className="sidebar-links" to={("query", { city: "Liverpool" })}>
        Liverpool
      </Link>
      <Link
        className="price-link"
        to={buildQueryString("query", { price: +1 })}
      >
        Ascending Price
      </Link>
      <Link
        className="price-link"
        to={buildQueryString("query", { price: -1 })}
      >
        Descending Price
      </Link>
    </div>
  );
};

export default SideBar;
