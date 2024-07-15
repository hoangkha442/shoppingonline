import axios from 'axios';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import MyContext from '../contexts/MyContext';

class Myorders extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      order: null
    };
  }

  componentDidMount() {
    if (this.context.customer) {
      const cid = this.context.customer._id;
      this.apiGetOrdersByCustID(cid);
    }
  }

  trItemClick = (item) => {
    this.setState({ order: item });
  }

  apiGetOrdersByCustID = (cid) => {
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.get('/api/customer/orders/customer/' + cid, config).then((res) => {
      const result = res.data;
      this.setState({ orders: result });
    });
  }

  render() {
    if (this.context.token === '') return (<Navigate replace to='/login' />);

    const orders = this.state.orders.map((item) => (
      <tr key={item._id} className="border-b cursor-pointer" onClick={() => this.trItemClick(item)}>
        <td className="p-2">{item._id}</td>
        <td className="p-2">{new Date(item.cdate).toLocaleString()}</td>
        <td className="p-2">{item.customer.name}</td>
        <td className="p-2">{item.customer.phone}</td>
        <td className="p-2">{item.total}</td>
        <td className="p-2">{item.status}</td>
      </tr>
    ));

    const orderDetails = this.state.order ? this.state.order.items.map((item, index) => (
        <tr key={index} className="border-b py-2">

      <td className="text-start">
        <img 
          src={"data:image/jpg;base64," + item.product.image}
          alt="image"
          className="w-20 h-20 object-cover inline-block" 
        />
        <h2 className="ml-4 inline-block font-normal text-sm">{item.product.name}</h2>
      </td>
      <td className="text-start">{item.product.price.toLocaleString()} ₫</td>
      <td className="text-center">
        {item.quantity}
      </td>
      <td className="text-right font-bold">{(item.product.price * item.quantity).toLocaleString()} ₫</td>
    </tr>

    )) : null;

    return (
      <div className="container-80 py-32">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-center mb-4">DANH SÁCH ĐƠN HÀNG</h2>
          <table className="w-full text-sm text-left text-gray-500 border">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="p-2">ID</th>
                <th className="p-2">Creation date</th>
                <th className="p-2">Cust. name</th>
                <th className="p-2">Cust. phone</th>
                <th className="p-2">Total</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders}
            </tbody>
          </table>
        </div>
        {this.state.order && (
          <div className="mt-10 w-[80%] mx-auto pt-10 relative">
            <div
              className="absolute left-0 right-0 mx-auto"
              style={{
                borderBottom: '4px double #e4e4e4',
                top: '3px',
                content: '""',
                width: '500px',
                zIndex: 1,
              }}
            />
            <h2 className="text-base font-bold text-center mb-4 text-[#353535]">CHI TIẾT ĐƠN HÀNG</h2>
            <table className="w-full text-[#353535] text-sm uppercase font-bold">
            <thead>
              <tr className="border-b-[3px]">
                <th className="pb-2 text-start"><p>SẢN PHẨM</p></th>
                <th className="pb-2 text-start">GIÁ</th>
                <th className="pb-2">SỐ LƯỢNG</th>
                <th className="pb-2 text-end"><p>TỔNG</p></th>
              </tr>
            </thead>
            <tbody>
                {orderDetails}  
            </tbody>
          </table>
          </div>
        )}
      </div>
    );
  }
}

export default Myorders;
