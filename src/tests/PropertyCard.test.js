import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const Props = {
    title: "",
    type: "",
    bathrooms: 0,
    bedrooms: 0,
    price: 0,
    city: "",
    email: "",
  };

  test("renders title correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={Props.title}
        type={Props.type}
        bathrooms={Props.bathrooms}
        bedrooms={Props.bedrooms}
        price={Props.price}
        city={Props.city}
        email={Props.email}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders type correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={Props.title}
        type={Props.type}
        bathrooms={Props.bathrooms}
        bedrooms={Props.bedrooms}
        price={Props.price}
        city={Props.city}
        email={Props.email}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test("renders bathrooms correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={Props.title}
        type={Props.type}
        bathrooms={Props.bathrooms}
        bedrooms={Props.bedrooms}
        price={Props.price}
        city={Props.city}
        email={Props.email}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test("renders bedrooms correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={Props.title}
        type={Props.type}
        bathrooms={Props.bathrooms}
        bedrooms={Props.bedrooms}
        price={Props.price}
        city={Props.city}
        email={Props.email}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test("renders price correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={Props.title}
        type={Props.type}
        bathrooms={Props.bathrooms}
        bedrooms={Props.bedrooms}
        price={Props.price}
        city={Props.city}
        email={Props.email}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test("renders city correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={Props.title}
        type={Props.type}
        bathrooms={Props.bathrooms}
        bedrooms={Props.bedrooms}
        price={Props.price}
        city={Props.city}
        email={Props.email}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test("renders email correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={Props.title}
        type={Props.type}
        bathrooms={Props.bathrooms}
        bedrooms={Props.bedrooms}
        price={Props.price}
        city={Props.city}
        email={Props.email}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
