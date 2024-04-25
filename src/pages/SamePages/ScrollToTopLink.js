import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ScrollToTopLink = ({ to, children, ...props }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    // Navigate to the target route
    navigate(to);

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  return (
    <Link to={to} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollToTopLink;
