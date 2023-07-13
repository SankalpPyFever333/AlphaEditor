import React from 'react'
import Editor from './Editor'

function WriteCode() {
  return (
    
      <>
      {/* you will not see this becoz by default <AppBar> have position: fixed , we have to change it to static. */}

      {/* Now inside this, we have 3 different components. */}

      <Editor/>
      <Editor/>
      <Editor/>
      
      </>
    
  )
}

export default WriteCode

