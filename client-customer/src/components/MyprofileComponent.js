import axios from 'axios';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import MyContext from '../contexts/MyContext';

class Myprofile extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: '',
      txtName: '',
      txtPhone: '',
      txtEmail: ''
    };
  }

  componentDidMount() {
    if (this.context.customer) {
      this.setState({
        txtUsername: this.context.customer.username,
        txtPassword: this.context.customer.password,
        txtName: this.context.customer.name,
        txtPhone: this.context.customer.phone,
        txtEmail: this.context.customer.email
      });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  btnUpdateClick = (e) => {
    e.preventDefault();
    const { txtUsername, txtPassword, txtName, txtPhone, txtEmail } = this.state;
    if (txtUsername && txtPassword && txtName && txtPhone && txtEmail) {
      const customer = { username: txtUsername, password: txtPassword, name: txtName, phone: txtPhone, email: txtEmail };
      this.apiPutCustomer(this.context.customer._id, customer);
    } else {
      Swal.fire('Error', 'Please input username, password, name, phone, and email', 'error');
    }
  }

  apiPutCustomer(id, customer) {
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.put('/api/customer/customers/' + id, customer, config)
      .then((res) => {
        const result = res.data;
        if (result) {
          Swal.fire('Cập nhật thành công', 'Thông tin cá nhân đã được cập nhật.', 'success');
          this.context.setCustomer(result);
        } else {
          Swal.fire('Error', 'Update failed!', 'error');
        }
      })
      .catch((error) => {
        console.error('Error updating profile', error);
        Swal.fire('Error', 'Error updating profile', 'error');
      });
  }

  render() {
    if (this.context.token === '') return (<Navigate replace to='/login' />);

    const { txtUsername, txtPassword, txtName, txtPhone, txtEmail } = this.state;

    return (
      <div className="flex items-center justify-center bg-[#fff] py-32 container-80">
        <div className="w-full container space-y-2 bg-[#fff]">
          <h2 className="text-xl font-bold text-left text-[#1c1c1c]">CẬP NHẬT THÔNG TIN</h2>
          <form className="space-y-6" onSubmit={this.btnUpdateClick}>
            <div>
              <label htmlFor="username" className="block text-sm font-bold text-[#222] mb-2">
                Tên tài khoản *
              </label>
              <input
                type="text"
                id="username"
                name="txtUsername"
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                value={txtUsername}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-bold text-[#222] mb-2">
                Mật khẩu *
              </label>
              <input
                type="password"
                id="password"
                name="txtPassword"
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                value={txtPassword}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-[#222] mb-2">
                Tên *
              </label>
              <input
                type="text"
                id="name"
                name="txtName"
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                value={txtName}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-[#222] mb-2">
                Số điện thoại *
              </label>
              <input
                type="tel"
                id="phone"
                name="txtPhone"
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                value={txtPhone}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-[#222] mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="txtEmail"
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                value={txtEmail}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="flex items-center space-x-5">
              <button
                type="submit"
                className="px-4 py-2 font-bold text-white bg-[#c89979] hover:bg-[#ab8165] transition-all duration-300 focus:outline-none focus:shadow-outline"
              >
                CẬP NHẬT
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Myprofile;
