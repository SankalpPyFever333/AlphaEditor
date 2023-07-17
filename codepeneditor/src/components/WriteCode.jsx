import React, { useContext } from 'react'
import Editor from './Editor'
import { Box,styled } from '@mui/material'
import { DataContext } from '../context/DataProvider'


const Container = styled(Box)`
  display:flex;
   background-color: #060606;
   height:50vh; 
`

function WriteCode() {
  const {html,setHtml, css ,setCss, js, setJS, width, setWidth} = useContext(DataContext);

  // using useContext bcoz I want to make the <Editor/> component as a controlled component(in which values are controlled bt react's state).
  
  return (
    
      <Container>
      {/* you will not see this becoz by default <AppBar> have position: fixed , we have to change it to static. */}

{/* Initially you are not able to write anything in this editor becoz then it was a uncontrolled component. But when you pass value in it , it become a controlled component. */}
          <Editor 
            heading = "HTML" icon = "/" bgcolor = "red" mode="htmlmixed" value={html} onChange={setHtml} />
          {/* you will see <Editor/> component rendered two times instead rendering one time bcoz of the <React.StrictMode> */}
          <Editor heading = "CSS" icon = "*" mode="css" bgcolor= "aqua" value={css} onChange={setCss} />
          <Editor heading = "JS" icon = "()" mode="javascript" bgcolor = "yellow" value={js} onChange={setJS} />
      
      </Container>
    
  )
}

export default WriteCode

