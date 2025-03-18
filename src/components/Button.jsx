/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react"

function Button({type}) {
    const primaryStyle = css`
    background: rgba(7, 78, 232, 1);
    width: 171.18959045410156;
    height: 50;
    top: 291px;
    left: 278.92px;
    border-radius: 4px;
    padding-right: 16px;
    padding-left: 16px;
    gap: 8px;
    `
    const secondaryStyle = css`
    width: 171.18959045410156;
    height: 50;
    top: 381px;
    left: 277.78px;
    border-radius: 4px;
    padding-right: 16px;
    padding-left: 16px;
    gap: 8px;
    background:rgba(7, 164, 232, 1)
    `
;
    
    return(
        <h1 css={type === "primary" ? primaryStyle : secondaryStyle }>Button</h1>
    )
}
export default Button