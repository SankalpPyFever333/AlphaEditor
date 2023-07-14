import { createContext, useState } from "react";

export const DataContext = createContext();


const DataProvider = ({children})=>{
      const [html , setHtml] = useState('');
      const [css , setCss] = useState('');
      const [js , setJS] = useState('');
      return(
            <DataContext.Provider 
                  value={{
                        html,
                        setHtml,
                        css,
                        setCss,
                        js,
                        setJS
                  }}
            
            >
                  {/* here, we forwarding that <Home/> component as a children */}
            {children}
            {/* If you do not forward it here, you will not see anything. */}
            </DataContext.Provider>
      )
}

export default DataProvider

