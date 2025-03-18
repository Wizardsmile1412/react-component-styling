/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react"

function Alert({type}) {

const errorBox =css`

background-color: #721c24;
  
  `
const warningBox = css`

background-color: #856404;
  
`
const infoBox = css`

background-color: #0c5460;
  
`
const successBox = css`

background-color: #155724;
  
`
return(
    <h1 css={
        type === "error" ? errorBox : 
        type === "warning" ? warningBox : 
        type === "info" ? infoBox : 
        type === "success" ? successBox : 
        null}> 
        this is {type} alert  </h1>
)
}
export default Alert