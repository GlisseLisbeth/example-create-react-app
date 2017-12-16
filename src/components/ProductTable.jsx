import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductsTable extends Component {
    render() {
        var rows =[], lastCategory = null;

        this.props.products.forEach(product => {
            rows.push(
                <ProductRow product={product} key={product.name}/>
            );
        });

        return (
            <table border={'1px'}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Prince</th>
                    </tr>
                
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default ProductsTable;
