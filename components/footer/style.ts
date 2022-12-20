import { css } from '@emotion/react'

const footer = css`
  margin-top: 10ch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ul{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 5ch;
    li{
        list-style-type: none;
    }
  }
`

export { footer }
