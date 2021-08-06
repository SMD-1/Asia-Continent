import React from "react";

const Country = ({
  name,
  capital,
  flag,
  region,
  subregion,
  population,
  borders,
  languages,
}) => {
  return (
    <div className="country">
      <div className="flag">
        <img src={flag} alt={`${name} flag`} />
      </div>
      <div className="content">
        <h2 style={{ textAlign: "center" }}>{name}</h2>
        <h5 style={{ marginTop: "10px" }}>Capital: {capital}</h5>
        <h5>Region: {region}</h5>
        <h5>Sub-region: {subregion}</h5>
        <h5> Population: {population}</h5>
        <h5>
          Languages:
          {languages.map((language, index) => {
            return <li key={index}>{language.name}</li>;
          })}
        </h5>
        <h5>
          Borders:
          {borders.map((border, index) => {
            return <li key={index}>{border}</li>;
          })}
        </h5>
      </div>
    </div>
  );
};

export default Country;
