import { css } from '@emotion/react'

export const globalStyles = css`
  :root {
    --page-background: #222;
    --page-text: #ddd
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, Roboto, Ubuntu;
    background: var(--page-background);
    color: var(--page-text);
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }
`
