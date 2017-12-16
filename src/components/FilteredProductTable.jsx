import React, { Component } from 'react';
import ProductTable from './ProductTable.jsx';

class FilteredProductTable extends Component {
    constructor(props) {
        super(props);
    } 
    render() {
        return (
            <center>
                <div>
                    <ProductTable
                        products={this.props.products}
                    /> 
                </div>
            </center>
        );
    }
}

export default FilteredProductTable;
