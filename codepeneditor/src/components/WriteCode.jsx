import React from 'react'
import Editor from './Editor'
import { Box,styled } from '@mui/material'

const Container = styled(Box)`
  display:flex;
   background-color: #060606;
   height:50vh; 
`

function WriteCode() {
  return (
    
      <Container>
      {/* you will not see this becoz by default <AppBar> have position: fixed , we have to change it to static. */}

          <Editor 
            heading = "HTML" icon = "/" bgcolor = "red"/>
          {/* you will see <Editor/> component rendered two times instead rendering one time bcoz of the <React.StrictMode> */}
          <Editor heading = "CSS" icon = "*" bgcolor= "aqua" />
          <Editor heading = "JS" icon = "()" bgcolor = "yellow" />
      
      </Container>
    
  )
}

export default WriteCode

