import React from "react";
import { CookiesProvider } from "react-cookie";

export const wrapRootElement = ({ element }) => {
  return <CookiesProvider>{element} </CookiesProvider>;
};
