import React from 'react'
import { BrowserRouter as Router, Switch, Link, useParams, Route } from 'react-router-dom'

export default function Home() {
  return (
    <Router>
    <div>


<ul>
  <li>
    <Link to='./Search'>Search</Link>
    </li>
    <li>
    <Link to='./Google'>Google</Link>
    </li>
    <li>
    <Link to='./Bing'>Bing</Link>
    </li>
  </ul>

  <Switch>
    <Route path='/:id' children={<SubFunction/>} />
  </Switch>

     
    </div>
    </Router>
  )
}


function SubFunction()
{
  let {id} = useParams();

  return(
    <div>
      <h3>ID: {id}</h3>
    </div>
  )
}

