import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Link, Route} from 'react-router-dom'


export default function demoRouting() {

        return (
            <Router>
            <div>
                
             <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/AboutUs">About</Link>
            </li>
            <li>
                <Link to="/ContactUs">Contact</Link>
            </li>
            </ul>


                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route path='/AboutUs'>
                        <AboutUs/>
                    </Route>
                    <Route path='/ContactUs'>
                        <ContactUs/>
                    </Route>
                </Switch>
               
            </div>
          </Router>
        )
}

function Home()
{
    return(
        <div>Hey you are at home...</div>
    )
}
function AboutUs()
{
    return(
        <div>Hey about...</div>
    )
}

function ContactUs()
{
    return(
        <div>You  are at contact us page...</div>
    )
}

