import React from "react";

const Card = (props) => {
  return (
    <div className="rounded-lg shadow-lg px-5 py-3 bg-grey-alwhite">
      {props.children}
    </div>
  );
};

export default Card;
