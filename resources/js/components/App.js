import React from "react"
import ReactDOM from 'react-dom';

import GlobalNav from "./GlobalNav"

function App(){
    return(
        <div>
            <GlobalNav />
        </div>
        
    )
}

if(document.getElementById("app")){
    ReactDOM.render(<App />, document.getElementById("app"))
}