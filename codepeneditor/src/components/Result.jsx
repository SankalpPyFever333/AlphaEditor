import { Box ,styled} from '@mui/material'
import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

const ResCon = styled(Box)`
  position:absolute;
  margin-top:103px;
  width:100%;
  padding-top: 20px;
  height:41vh;
  
`


function Result() {
      const {html, css,js} = useContext(DataContext);

      // a html have body , style and scipt.
      const srcCode = `
            <html>
                  <body>${html}</body>
                  <style>${css} </style>
                  <script> ${js}</script>
            </html>
      `


  return (
    <ResCon>
      <iframe srcDoc= {srcCode} title='Output' sandbox='allow-scripts' width="100%" height="100%" />
    </ResCon>
  )
}

export default Result



