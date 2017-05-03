import React, { Component } from 'react';
import './FirstPage.css';
import { TableData } from './table/data/TableData';
import { Button, ListGroup, ListGroupItem, Col, Grid, Row } from 'react-bootstrap';

export class FirstPage extends Component{

     constructor(props) {
         super(props);
         this.name = 'marco';
         this.state={items:[], selectedItem : null};
     }

    componentDidMount(){
        fetch(`http://localhost:8080/tables`)
            .then(result=>result.json())
            .then(items=>this.setState({items}))
    }

     render() {
         return(
             <div>
                 <Grid><Row className="show-grid">
                 <Col md={3}>


                <section>
                    <ListGroup>
                        {
                            this.state.items.length ?
                                this.state.items.map(item=>
                                    <ListGroupItem onClick={() => this.handleClick(item)} key={item.name}>
                                        <span style={{background: this.color(item)}}>{item.name}</span>

                                    </ListGroupItem>)
                                :<tr><td>Loading...</td></tr>
                        }

                    </ListGroup>
         </section>

                 <Button bsStyle="success" bsSize="small">
                     Something
                 </Button></Col>
                     <Col md={8}><TableData table={this.state.selectedItem} /></Col></Row>
                 </Grid>

             </div>
     )
     }

     handleClick(item){
        this.setState({selectedItem : item});

     }

    color(item) {
    if (this.state.selectedItem === item) {
        return "";
    }
    return "";
}
}