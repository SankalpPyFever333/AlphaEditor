import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "./console.css"
import { IconButton } from '@mui/material';
function console() {
  return (
    <div className='console_container'>
      <div className="console_header">
            <div className="console_heading">
                  <h3>Console</h3>
            </div>
            <div className="clear_cross">
                  <IconButton>
                        <CloseIcon/>
                  </IconButton>
                  <IconButton>
                        <button>Clear</button>
                  </IconButton>
            </div>
      </div>
      {/* make a div for displaying the JS output inside it. */}


    </div>
  )
}

export default console



