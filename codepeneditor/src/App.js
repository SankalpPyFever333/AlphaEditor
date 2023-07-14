import React from 'react';
import './App.css';
import Home from './components/Home';
import DataProvider from "./context/DataProvider"
function App() {
  return (
    // wrap the Home component with DataProvider context. Now, values of this context can be used by this and  its child component. If you wrap up something inside the <DataProvider>, you need to forward them also. They are called children. So , you can forward them just like props.
    <DataProvider>
      <Home/>
    </DataProvider>

  );
}

export default App;
