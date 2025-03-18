/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';

function Button({ children, type = "primary", css }) {
  const primaryStyle = {
    backgroundColor: "#074EE8",
    color: "white",
    padding: "0 16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    width: "171.19px",
    height: "50px",
    textAlign: "center",
    gap: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...css
  };

  const secondaryStyle = {
    backgroundColor: "#07A4E8",
    color: "white",
    padding: "0 16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    width: "171.19px",
    height: "50px",
    textAlign: "center",
    gap: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...css
  };

  return (
    <button css={type === "primary" ? primaryStyle : secondaryStyle}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['primary', 'secondary']),
  css: PropTypes.object
};

export default Button;
