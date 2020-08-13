import React from "react";

import BootstrapTable from 'react-bootstrap-table-next';
const BillDT = () =>{
  const products = [
    { id: 1, name: 'George', price: 'Monkey' },
    { id: 2, name: 'Jeffrey', price: 'Giraffe' },
    { id: 3, name: 'Alice', price: 'Giraffe' },
    { id: 4, name: <input type="file"></input>, price: 'Tiger' }
  ]
  
const columns = [{
  dataField: 'id',
  text: 'Type'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}
, {
  dataField: 'price',
  text: 'Product Price 2'
}
, {
  dataField: 'price',
  text: 'Product Price 3'
}];

const x =0
const expandRow = {
  
  renderer: row => (
    <div>
      <p>{columns[3].text}</p>
      <p><input></input></p>
    </div>
  ),

  showExpandColumn: true,
  onExpand: (row, isExpand, rowIndex, e) => {
    columns.push({
      dataField: 'price2',
      text: 'ProductPrice2'
    })
    products.forEach((arr) => {
      console.log(arr)
      console.log(rowIndex)
      if (arr.id==rowIndex+1){
        arr.ProductPrice2 = <input type="file"></input>
      }
    })
  },
  onExpandAll: (isExpandAll, rows, e) => {
    console.log(isExpandAll);
    console.log(rows);
    console.log(e);
  }
};
return(<div>
  <BootstrapTable

  keyField='id'
  data={ products }
  columns={ columns }
  expandRow={ expandRow }
/>
</div>
)

}
export default BillDT;