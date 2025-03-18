/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';

function Alert({ children, type = "error", css }) {
  const baseStyle = {
    padding: "16px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "16px",
    ...css
  };

  const errorStyle = {
    ...baseStyle,
    backgroundColor: "#FFE8E8",
    color: "#DC3545"
  };

  const warningStyle = {
    ...baseStyle,
    backgroundColor: "#FFF4E5",
    color: "#E97F03"
  };

  const infoStyle = {
    ...baseStyle,
    backgroundColor: "#FFF8E1",
    color: "#856404"
  };

  const successStyle = {
    ...baseStyle,
    backgroundColor: "#E8F5E9",
    color: "#28A745"
  };

  const iconStyle = {
    display: "flex",
    alignItems: "center"
  };

  return (
    <div css={
      type === "error" ? errorStyle :
      type === "warning" ? warningStyle :
      type === "info" ? infoStyle :
      successStyle
    }>
      <span css={iconStyle}>
        {type === "error" ? "😕" :
         type === "warning" ? "⚠️" :
         type === "info" ? "ℹ️" :
         "✓"}
      </span>
      {children}
    </div>
  );
}

Alert.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
  css: PropTypes.object
};

export default Alert;
