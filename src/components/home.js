import React,{Component} from 'react';
import Header from './header'
export default class Home extends Component{
    constructor(){
        super();
        this.state={
            list:[],
            error : null
        }
    }
    buildlist=(data)=>{
        this.setState({list: data});
    }
    componentDidMount(){
        let url = 'https://prof3ssorst3v3.github.io/media-sample-files/products.json';
        fetch(url)
        .then(response=>response.json())
        .then(this.buildlist)
        .catch(error=>{
            this.setState({error})
        })
    }
    render(){
        return(
            <div>
                <h1>
                    This is HOME
                </h1>
                <Header/>

                <ul>
                    {this.state.list.length===0&&
                        <li>Sorry no data was recieved</li>
                    }
                    {this.state.list.length > 0 &&
                        this.state.list.map((item)=>(
                            <li key={item.id}>{item.title + " "+item.price}</li>
                        ))
                    } 
                </ul>
                {this.state.error &&
                    <h3>{this.state.error}</h3>
                }
            </div>
        )
    };
}