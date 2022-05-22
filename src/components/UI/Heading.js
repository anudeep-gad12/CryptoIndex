import React from "react";

const Heading = (props) => {
  return (
    <h2 className="text-grey-dark text text-2xl font-medium mt-6 mb-4">
      {props.children}
    </h2>
  );
};

export default Heading;
