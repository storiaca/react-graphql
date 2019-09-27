import React from "react";
import PropTypes from "prop-types";
import classes from "./Pokemon.module.css";

function Pokemon({ name, image, types, height, weight, attacks }) {
  const sepTypes = [...types];
  let pokTypes = sepTypes.join(", ");
  const damage = attacks.special.map(attack => attack.damage);
  console.log(attacks);
  return (
    <div className={classes.Pokemon}>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <h3>{name}</h3>
        <h4>{pokTypes}</h4>
        <p>Pokemon weight</p>
        <ul>
          <li>min: {weight.minimum}</li>
          <li>max: {weight.maximum}</li>
        </ul>
        <p>Pokemon height</p>
        <ul>
          <li>min: {height.minimum}</li>
          <li>max: {height.maximum}</li>
        </ul>
      </div>
      <div>
        <h3>Special attacks</h3>
        <p>Attack: {damage}</p>
      </div>
    </div>
  );
}

Pokemon.propTypes = {};

export default Pokemon;
