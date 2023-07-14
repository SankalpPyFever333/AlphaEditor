import React from 'react'
import { Box , styled } from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditor} from "react-codemirror2";
import 'codemirror/lib/codemirror.css';
import "../App.css";
import 'codemirror/mode/xml/xml'; //need this bcoz I am using XML tag also like <AppBar> , <Toolbar> etc.
import 'codemirror/mode/javascript/javascript' ; //for supporting JS Files.

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

// react-codemirror is a react library that will detect the html, css and JS and import the css files


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
      < ControlledEditor 
        className='controlled-editor'
        options={{
          theme: "material",
          lineNumbers: true
        }}
      />
    </Box>
  )
}

export default Editor



