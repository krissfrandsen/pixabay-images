import React from "react";
import PropTypes from "prop-types";

const Container = ({ children }) => <div className="container">{children}</div>;

export default Container;

Container.prototype = {
  children: PropTypes.element,
};
