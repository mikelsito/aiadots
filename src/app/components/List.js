import React from "react";

// Pass In Props to this component
const List = ({ elements }) => {
  return (
    <ul>
      {elements.map((element) => (
        <li>{element.text}</li>
      ))}
    </ul>
  );
};

export default List;
