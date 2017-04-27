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
         <section>
             <h1>Next Java conferences</h1>
             <div class="tbl-header">
                 <table cellpadding="0" cellspacing="0" border="0">
                     <thead>
                     <tr>
                         <th>Code</th>
                         <th>Company</th>
                         <th>Price</th>
                         <th>Change</th>
                         <th>Change %</th>
                     </tr>
                     </thead>
                 </table>
             </div>
             <div class="tbl-content">
                 <table cellpadding="0" cellspacing="0" border="0">
                     <tbody>
                     {this.state.items.length ?
                         this.state.items.map(item=>
                         <tr>
                             <td>{item.number}</td>
                             <td>{item.name}</td>
                             <td></td>
                             <td></td>
                             <td></td>
                         </tr>)
                         : <li>Loading...</li>
                     }
                     </tbody>
                 </table>
             </div>
         </section>
         <div className="made-with-love">
             Style copied and adapted with respect
             from <a target="_blank" href="http://codepen.io/nikhil8krishnan">NK on codepen</a>
         </div>
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