import React, { Component } from 'react';

class ProductsCategoryRow extends Component {
    render() {
        return (
        <tr>
            <th colspan='2'>
                {this.props.category}
            </th>
        </tr>
        );
    }
}

export default ProductsCategoryRow;
