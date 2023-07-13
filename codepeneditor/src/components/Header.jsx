import React from 'react'
import { AppBar, IconButton, Toolbar ,styled} from '@mui/material';

function Header() {
  // changing the css of mui component. We pass the component name in the styled() upon which I want to add css.
  const AppBarContainer = styled(AppBar)`
      background: #060606;
      height: 9vh;
      position: static;
  `
// Now <AppBar> is updated and it is in AppBarContainer variable, So replace AppBar by AppBarConainer.

return (
    <div>
      <AppBarContainer>
        <Toolbar>
          <IconButton>
          <img src= "https://img.icons8.com/?size=512&id=p03EZMcmuZH5&format=png" alt="logo" style={{width:40}} />
          </IconButton>
        </Toolbar>
      </AppBarContainer>

    </div>
  )
}

export default Header



