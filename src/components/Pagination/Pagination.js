import React from "react";
import PropTypes from "prop-types";
import classes from "./Pagination.module.css";
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(typeof postsPerPage, typeof totalPosts, paginate);

  return (
    <div className={classes.Pagination}>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  postsPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.string.isRequired,
  paginate: PropTypes.func.isRequired
};

export default Pagination;
