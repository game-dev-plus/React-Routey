import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Header extends Component{
    render(){
        return(
           <nav>
               <NavLink to="">Home</NavLink>
               <NavLink to="/other">Other</NavLink>
               <NavLink to="/things/1">Thing 1</NavLink>
               <NavLink to="/things/2">Thing 2</NavLink>
               <NavLink to="/things/3">Thing 3</NavLink>
           </nav>
        )
    };
}