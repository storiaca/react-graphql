import React from "react";
import PropTypes from "prop-types";
import classes from "./Pokemon.module.css";

function Pokemon(props) {
  return (
    <div style={classes.Pokemon}>
      <h3>Pokemon</h3>
    </div>
  );
}

Pokemon.propTypes = {};

export default Pokemon;
