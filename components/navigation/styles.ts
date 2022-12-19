import { css } from '@emotion/react'

const navigationStyles = css`
display: flex;
justify-content: space-between;
background-color: var(--page-background);
position: relative;
top: -3ch;
width: 90%;
max-width: var(--page-width);
margin: 0 auto;
padding: 1.5ch 5ch;
font-size: 1.35rem;
font-weight: 500;
border-radius: 3px;

a:hover,
a:focus {
    color: var(--color-accent)
}
`
export { navigationStyles }