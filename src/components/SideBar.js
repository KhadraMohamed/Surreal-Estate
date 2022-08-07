import React, { useState } from "react";
import "../styles/sidebar.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";

const buildQueryString = (operation, valueObj) => {
  const { search } = useLocation();

  const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify({
      ...JSON.parse(currentQueryParams[operation] || "{}"),
      ...valueObj,
    }),
  };
  return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
};
const SideBar = () => {
  const [query, setQuery] = useState("");
  const history = useHistory();
  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    history.push(newQueryString);
  };
  return (
    <div className="sidebar">
      <form className="form" onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
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
