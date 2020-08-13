import React, { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
// const DT1 = () =>{
    class DT1 extends Component {
        constructor(props) {
          super(props)
       
        }
        componentDidMount() {
            $(document).ready(function() {
                $('#example').DataTable();
            });
         }

        
     
        render() {

// useEffect(()=>{
//      $('#example').DataTable({ dom: '<"data-table-wrapper"t>'});
//   })

//   componentDidMount() {
//    $(this.refs.main).DataTable({
//       dom: '<"data-table-wrapper"t>',
//       data: this.props.names,
//       columns,
//       ordering: false
//    });

   return(
      <div><div>
       {/* <link rel="stylesheet" href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>  
          <script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script> */}
          {/* <link rel="stylesheet" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css" />
          <link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.2.5/css/responsive.dataTables.min.css" />
          <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
         
          <script src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/responsive/2.2.5/js/dataTables.responsive.min.js"></script> */}
          </div>
          <table id="example" class="display responsive nowrap" style="width:100%">
        <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
                <th>Extn.</th>
                <th>E-mail</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tiger</td>
                <td>Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
                <td>5421</td>
                <td>t.nixon@datatables.net</td>
            </tr>
            </tbody></table>
          </div>

   )
}}
export default DT1;