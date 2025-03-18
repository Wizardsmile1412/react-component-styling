/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const alertBase = css`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  width: 400px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
  border: 1px solid transparent;
`;

const errorAlert = css`
  background-color: #f8d7da;
  border-color: #f5c6cb;
  color: #721c24;
`;

const warningAlert = css`
  background-color:rgb(229, 157, 90);
  border-color: #ffeeba;
  color: #856404;
`;

const infoAlert = css`
  background-color: #ffeeba;
  border-color: #ffeeba;
  color: #856404;
`;

const successAlert = css`
  background-color: #d4edda;
  border-color: #c3e6cb;
  color: #155724;
`;

const errorMsg = "This is an error alert box";
const errorIcon = "☹️";

const warningMsg = "This is a warning alert box";
const warningIcon = "⚠️";

const infoMsg = "This is an info alert box";
const infoIcon = "ℹ️";

const successMsg = "This is a success alert box";
const successIcon = "✔️";

// Reusable Alert Component
function Alert({type}) {
  let alertStyle;
  let message;
  let icon;
  switch (type) {
    case 'error':
      alertStyle = errorAlert;
      message = errorMsg;
      icon = errorIcon;
      break;
    case 'warning':
      alertStyle = warningAlert;
      message = warningMsg;
      icon = warningIcon;
      break;
    case 'info':
      alertStyle = infoAlert;
      message = infoMsg;
      icon = infoIcon;
      break;
    case 'success':
      alertStyle = successAlert;
      message = successMsg;
      icon = successIcon;
      break;
    default:
      alertStyle = css``;
  }


  return (
    <div css={[alertBase, alertStyle]}>
      <span className="icon" style={{ marginRight: '10px', fontSize: '20px' }}>{icon}</span>
      <strong>{message}</strong>
    </div>
  );
}

export default Alert;