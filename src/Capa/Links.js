import React from 'react'
import Incial from './Incial'


import  {BrowserRouter as  Router,Link,Switch,Route} from "react-router-dom"


function Links() {
    return (
        <Router>
        <div>
            <div className="deve"> 
<header>
    <Link className ="boy" to = "page1">BOY DO PERNAMBUCO</Link>
    <Link className ="boy" to ="page2">CHARLIE BROWN JR</Link>
    <Link className = "boy" to ="page3">MC HARIEL</Link>
</header>
</div>
<main>
<Switch>
    <Route path ="page1" exact component ={Incial}></Route>
    <Route path ="page2" component={Incial}> </Route>
    <Route path ="page3" component ={Incial}></Route>
</Switch>

</main>
        
        </div>
        </Router>
        
    )
}

export default Links

