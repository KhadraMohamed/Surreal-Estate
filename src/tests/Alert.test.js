import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

test("display an error message", () => {
  const { getByText, asFragment } = render(<Alert message="Error!" />);

  expect(asFragment()).toMatchSnapshot();
  expect(getByText(/Error/).textContent).toBe("Error!");
});

test("display a success message", () => {
  const { getByText, asFragment } = render(
    <Alert message="Success!!!!" success />
  );

  expect(asFragment().toMatchSnapshot);
  expect(getByText(/Success/).textContent).toBe("Success!!!!");
});

test("does not render an error or a success message if message props is empty", () => {
  const { asFragment } = render(<Alert message="" />);
  const alert = asFragment();

  expect(alert).toMatchSnapshot();
});
