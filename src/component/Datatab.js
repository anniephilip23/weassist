import React, { Component } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import "./LoginForm.css"

class Datatab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // columnDefs: [{
      //   headerName: "Make", field: "make",   cellStyle: { textAlign: "left"}
      // }, {
      //   headerName: "Model", field: "model"
      // }, {
      //   headerName: "Price", field: "price" 
      // }],
      // rowData: [{
      //   make: "Toyota", model: "Celica", price: 35000,
      // }, {
      //   make: "Ford", model: "Mondeo", price: 32000, 
      // }, {
      //   make: "Porsche", model: "Boxter", price: 72000
      // }]


      columnDefs: [{
        headerName: "Sl No", field: "slno", sortable: true,   cellStyle: {  textAlign: "left", color: "rgb(5, 74, 163)"},resizable: true, width:"80"
      }, {
        headerName: "Claim Ref. Number", field: "claim", sortable: true,    cellStyle: { textAlign: "left",color: "rgb(5, 74, 163)"},resizable: true,width:"150"
      }, {
        headerName: "Hospital", field: "hospital", sortable: true,   cellStyle: { textAlign: "left", color: "rgb(5, 74, 163)"},resizable: true
      }, {
        headerName: "Type", field: "type", sortable: true,   cellStyle: { textAlign: "left",color: "rgb(5, 74, 163)"},resizable: true,
      },{
        headerName: "Status", field: "status", sortable: true,   cellStyle: { textAlign: "left" ,color: "rgb(5, 74, 163)"},resizable: true
      },{
        headerName: "Invoice", field: "invoice", sortable: true,   cellStyle: { textAlign: "left" ,color: "rgb(5, 74, 163)"},resizable: true
      }
    ],
      rowData: [{
        slno: 1 ,claim:324234234, hospital: "ABC Hospital", type:"Pre  & Post",status:"WIP", invoice:""
      }, {
        
        slno: 2 ,claim:456734234, hospital: "ABC Hospital", type:"Pre  & Post",status:"Submitted", invoice:""
      }]
    }
  }
  // componentDidMount() {
  //     fetch('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json')
  //   .then(result => result.json())
  //    .then(rowData => this.setState({rowData}))
  //    }
    
  onButtonClick = e => {
    const selectedNodes = this.gridApi.getSelectedNodes()
    const selectedData = selectedNodes.map( node => node.data )
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ')
    alert(`Selected nodes: ${selectedDataStringPresentation}`)
}
onRowSelect(event) {
  const selectedRows = this.gridApi.getSelectedRows();
  console.log(selectedRows);
}

  render() {
    return (
  <div style={{marginLeft:"10%"}}>
      <div
        className="ag-theme-alpine "
        style={{
        height: "150px",
        width: '90%',
        textAlign:"center",
      marginTop:"5%"  }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
      </div>
      
    );
  }
}

export default Datatab;