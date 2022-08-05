import React from "react";

export const Countries = ({ countries, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className="list-group mb-4">
      {countries.map((country) => (
        <li className="list-group-item">{country.name.common}</li>
      ))}
    </ul>
  );
};
