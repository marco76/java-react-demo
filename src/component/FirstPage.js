import React, { Component } from 'react';
import './FirstPage.css';
import Button from 'react-bootstrap/lib/Button';


export class FirstPage extends Component{

     constructor(props) {
         super(props);
         this.name = 'marco';
         this.state={items:[]};
     }

    componentDidMount(){
        fetch(`http://springdemo.io/rest/read-file`)
            .then(result=>result.json())
            .then(items=>this.setState({items}))
    }

     render() {
         return(

             <div>
             <h1>Test ok</h1>
                 <span className="red"> {this.getData()}</span>
                 {this.getButton()};
                 <ul>
                     {this.state.items.length ?
                         this.state.items.map(item=><li key={item.number}>{item.name}</li>)
                         : <li>Loading...</li>
                     }
                 </ul>
             </div>

     )
     }

     getData() {
         return 'marco';
     }

     getButton() {
         return <Button bsStyle="primary">Default</Button>
     }
}