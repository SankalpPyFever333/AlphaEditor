import React from 'react'
import { useState } from 'react';
import { Box , styled } from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditor} from "react-codemirror2";
import 'codemirror/lib/codemirror.css';
import "../App.css";
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/xml/xml'; //need this bcoz I am using XML tag also like <AppBar> , <Toolbar> etc.
import 'codemirror/mode/javascript/javascript'; //for supporting JS Files.
import 'codemirror/mode/htmlmixed/htmlmixed';

const Container = styled(Box)`
  flex-grow: 1;
  // we do not need to do display:flex bcoz its parent component have a flex property.
  display: flex;
  flex-basic: 0;
  flex-direction:column;
  padding: 0 8 8;
`
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


function Editor({heading,icon , bgcolor,value, onChange,mode}) {
  const handleChange = (editor, data, value)=>{
    onChange(value);
  }

  


  return (
      // we use <Box> from MUI instead of <div>, it works same as <div>.
    <Container 
      
    >
      <Header>
            <Heading>
                  {/* making that Box to work as a span. */}
                  <Box component="span"
                  style={{
                        background: bgcolor,
                        height: 20,
                        width:20,
                        display:"flex",
                        placeContent:"center",
                        borderRadius:5,
                        marginBottom:5,
                        paddingBottom:3,
                        color: "#000",
                        fontWeight:"bold",
                        marginRight:7
                  }}
                  >{icon}</Box>
                  {heading}
            </Heading>
              <CloseFullscreenIcon 
              fontSize='small'
              style={{
                alignSelf:"center"
              }}
              
              />
      </Header>
      < ControlledEditor 
        className='controlled-editor'
        value={value}
        onBeforeChange={handleChange}
        options={{
          mode: mode,
          theme: "dracula",
          lineNumbers: true,
          indentUnit: 5,
          lineWrapping:true,
          lineWiseCopyCut:true,
        }}
      />
    </Container>
  )
}


export default Editor



