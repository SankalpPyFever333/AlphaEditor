import React from 'react'
import { Box , styled } from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`

const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: #AAAEBC;
  justify-content: space-between;
  font-weight: 700px;


`

// react-codemirror is a react library that will detect the html, css and JS.


function Editor() {
  return (
      // we use <Box> from MUI instead of <div>, it works same as <div>.
    <Box>
      <Header>
            <Heading>
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
            </Heading>
            <CloseFullscreenIcon/>
      </Header>
      <Box>

      </Box>
    </Box>
  )
}

export default Editor



