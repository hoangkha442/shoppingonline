// import axios from 'axios';
// import React, { Component } from 'react';
// import MyContext from '../contexts/MyContext';

// class Statistics extends Component {
//   static contextType = MyContext; // using this.context to access global state
//   constructor(props) {
//     super(props);
//     this.state = {
//       noCategories: 0,
//       noProducts: 0,
//       noOrders: 0,
//       noOrdersPending: 0,
//       noOrdersApproved: 0,
//       noOrdersCanceled: 0,
//       noOrdersRevenue: 0,
//       noCustomers: 0
//     };
//   }

//   render() {
//     return (
//       <div className="text-center">
//         <h2 className="text-center">STATISTICS</h2>
//         <table className="align-center">
//           <tbody>
//             <tr>
//               <td align="right">No. Categories</td>
//               <td></td>
//               <td>{this.state.noCategories}</td>
//             </tr>
//             <tr>
//               <td align="right">No. Products</td>
//               <td></td>
//               <td>{this.state.noProducts}</td>
//             </tr>
//             <tr>
//               <td align="right">No. Orders</td>
//               <td></td>
//               <td>{this.state.noOrders}</td>
//             </tr>
//             <tr>
//               <td></td>
//               <td align="right">Pending &nbsp;</td>
//               <td>{this.state.noOrdersPending}</td>
//             </tr>
//             <tr>
//               <td></td>
//               <td align="right">Approved &nbsp;</td>
//               <td>{this.state.noOrdersApproved}</td>
//             </tr>
//             <tr>
//               <td></td>
//               <td align="right">Canceled &nbsp;</td>
//               <td>{this.state.noOrdersCanceled}</td>
//             </tr>
//             <tr>
//               <td></td>
//               <td align="right">Revenue &nbsp;</td>
//               <td>{this.state.noOrdersRevenue}</td>
//             </tr>
//             <tr>
//               <td align="right">No. Customers</td>
//               <td></td>
//               <td>{this.state.noCustomers}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     );
//   }

//   componentDidMount() {
//     this.apiGetStatistics();
//   }

//   // apis
//   apiGetStatistics() {
//     const config = { headers: { 'x-access-token': this.context.token } };
//     axios.get('/api/admin/statistics', config).then((res) => {
//       const result = res.data;
//       this.setState({
//         noCategories: result.noCategories,
//         noProducts: result.noProducts,
//         noOrders: result.noOrders,
//         noOrdersPending: result.noOrdersPending,
//         noOrdersApproved: result.noOrdersApproved,
//         noOrdersCanceled: result.noOrdersCanceled,
//         noOrdersRevenue: result.noOrdersRevenue,
//         noCustomers: result.noCustomers
//       });
//     });
//   }
// }

// export default Statistics;
