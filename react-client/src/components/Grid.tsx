import React from "react";

const Grid: React.FC = () => {

    const fields = Array(9).fill(null);

    return (
        <div className="grid-container">
          {fields.map((_, index) => (
            <div className="grid-item" key={index}>
              Square {index + 1}
            </div>
          ))}
        </div>
      );

}

export default Grid;
