import React,{Component} from 'react';
import Header from './header'

export default class things extends Component{
    render(){
        console.log(this.props.match.params.thingID);
        return(
           <div>
               <h1>
                   Welcome to things
               </h1>
                <Header/>
               <main>
                   <p>Talking about things {this.props.match.params.thingID}</p>
               </main>
           </div>
        );
    }
}