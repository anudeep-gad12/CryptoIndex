import React from "react";

const Card = (props) => {
  return (
    <div className="rounded-lg shadow-lg px-4 py-2 bg-grey-alwhite">
      {props.children}
    </div>
  );
};

export default Card;
