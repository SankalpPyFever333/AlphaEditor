import React from 'react'
import { Box , styled } from '@mui/material'



function Editor() {
  return (
      // we use <Box> from MUI instead of <div>, it works same as <div>.
    <Box>
      <Box>
            <Box>
                  {/* making that Box to work as a span. */}
                  <Box component="span"
                  style={{
                        background:"red",
                        height: 20,
                        width:20,
                        display:"flex",
                        placeContent:"center",
                        borderRadius:5,
                        marginBottom:5,
                        paddingBottom:3 
                  }}
                  >/</Box>
                  HTML
            </Box>
      </Box>
      <Box>

      </Box>
    </Box>
  )
}

export default Editor



