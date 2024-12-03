import React from "react";

// Define the props type for the field component
interface FieldProps {
  occupied: 'x' | 'o' | 'none';
}

const Field: React.FC<FieldProps> = ({ occupied }) => {

  return (
    <div style={{ padding: '10px', border: `1px solid ` }}>
      <strong>{occupied}</strong>
    </div>
  );
};

export default Field;