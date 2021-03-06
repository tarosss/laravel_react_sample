import React from "react"
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';


import GlobalNav from "./GlobalNav"
import AllTasks from "./AllTasks"

import Test from "./Test"
export default function App(){
    return(
        <div>
            <GlobalNav />
            <BrowserRouter>
                <Route path="/alltask" exact component={AllTasks}/>
                <Route path="/read" exact component={Test}/>
            </BrowserRouter>
        </div>
        
    )
}

if(document.getElementById("app")){
    ReactDOM.render(<App />, document.getElementById("app"))
}