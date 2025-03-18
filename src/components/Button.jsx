/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const primaryButton = css`background-color: #1057e0; 
  color: white; 
  font-size: 16px; 
  font-family: Arial, sans-serif;
  padding: 12px 24px; 
  border: none;
  border-radius: 8px;
  cursor: pointer; 
  display: block;
  text-align: center;`;

const secondaryButton = css`background-color: #19a7e0; 
  color: white; 
  font-size: 16px; 
  font-family: Arial, sans-serif;
  padding: 12px 24px; 
  border: none; 
  border-radius: 8px; 
  cursor: pointer; 
  display: block;
  text-align: center;`;

function Button({type}) {
    return (
       <button css={(type==="primaryButton")?primaryButton:secondaryButton}>Button</button>
    )
}

export default Button;
