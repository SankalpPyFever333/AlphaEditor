import { Box} from '@mui/material'
import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

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
    <Box>
      <iframe src= {srcCode} title='Output' sandbox='allow-scripts' width="100%" height="100%" frameborder="0"></iframe>
    </Box>
  )
}

export default Result



