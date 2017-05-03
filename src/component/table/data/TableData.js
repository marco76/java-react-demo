import React, { Component } from 'react';
import './TableData.css';
import { Table } from 'react-bootstrap';

export class TableData extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], title: "", table: null};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({table : nextProps.table});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.table !== this.state.table){

        console.log('fetch new data');
        fetch(`http://localhost:8080/tables/data/`+this.state.table.name)
            .then(result => result.json())
            .then(items => this.setState({items}));
        }
    }



    getFieldName(items) {
        let list = [];
        list.push(this.getTitle(items[0]));
        for (let itemList in items) {

            let result = this.getList(items[itemList]);
            list.push(result);
        }

        return list;
    }

    getFieldData(items) {
        let list = [];
        for (let itemList in items) {

            let result = this.getList(items[itemList]);
            list.push(result);
        }

        return list;
    }

    getList(item) {
        return (
            <tr key={item['id']}>
                <td>{this.getData(item)}</td>
            </tr>
        )

    }

    getTitle(item) {
        let fields = Object.keys(item);
        console.log(fields);

        return <tr><th>{fields[0]}</th><th>{fields[1]}</th></tr>
    }

    getData(item) {
        let fields = Object.keys(item);
        return <tr>
            <td>{item[fields[0]]}</td>
            <td>{item[fields[1]]}</td>
        </tr>
    }

    render() {
        let self = this;
        if (!this.state.items.length) {
            return(<div></div>)
        }
        return (
            <div>
                <section>

                    <h3>Tables</h3>
                    <div className="tbl-header">
                        <Table>
                            <thead>
                            <tr>
                                <th>
                                {
                                    this.state.items.length ?
                                        this.getTitle(this.state.items[0]) : ' '
                                }
                            </th></tr>

                            </thead>
                            <tbody>
                            {this.state.items.map(function (item) {
                                console.log(item);
                                return self.getData(item)

                            })}

                            </tbody>
                        </Table>
                    </div>
                </section>
            </div>
        )
    }
}

