import axios from 'axios';
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import withRouter from '../utils/withRouter';
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: '',
      txtName: '',
      txtPhone: '',
      txtEmail: '',
      formError: '',
      emailError: '',
      passwordError: ''
    };
  }

  validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  validatePassword = (password) => password.length > 0;

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });

    if (name === 'txtEmail') {
      this.setState({ emailError: this.validateEmail(value) ? '' : 'Email không đúng định dạng.' });
    }

    if (name === 'txtPassword') {
      this.setState({ passwordError: this.validatePassword(value) ? '' : 'Mật khẩu không được để trống.' });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { txtUsername, txtPassword, txtName, txtPhone, txtEmail, emailError, passwordError } = this.state;

    if (emailError || passwordError || !txtUsername || !txtPassword || !txtName || !txtPhone || !txtEmail) {
      this.setState({ formError: 'Vui lòng nhập đúng các thông tin bên dưới.' });
      return;
    }

    const account = { username: txtUsername, password: txtPassword, name: txtName, phone: txtPhone, email: txtEmail };
    this.apiSignup(account);
  };

  // API call
  apiSignup(account) {
    axios.post('/api/customer/signup', account).then((res) => {
      const result = res.data;
      if (result.success) {
        Swal.fire({
          title: 'Đăng ký thành công!',
          text: 'Vui lòng kiểm tra email của bạn để kích hoạt tài khoản. Bạn có muốn mở email ngay bây giờ không?',
          icon: 'success',
          showCancelButton: true,
          confirmButtonText: 'Đồng ý',
          cancelButtonText: 'Hủy bỏ',
        }).then((result) => {
          if (result.isConfirmed) {
            window.open('https://mail.google.com', '_blank');
          }
          this.props.navigate('/active');
        });
      } else {
        Swal.fire({
          title: 'Đăng ký thất bại',
          text: result.message,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }).catch((error) => {
      Swal.fire({
        title: 'Đăng ký thất bại',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  }

  render() {
    const { txtUsername, txtPassword, txtName, txtPhone, txtEmail, formError, emailError, passwordError } = this.state;

    return (
      <div className="flex items-center justify-center bg-[#fff] py-32 container-80">
        <div className="w-full container space-y-2 bg-[#fff]">
          <h2 className="text-xl font-bold text-left text-[#1c1c1c]">ĐĂNG KÝ</h2>
          <form className="space-y-6" onSubmit={this.handleSubmit}>
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
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
                required
              />
              {passwordError && <div className="text-red-500">{passwordError}</div>}
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-[#222] mb-2">
                Họ và tên *
              </label>
              <input
                type="text"
                id="name"
                name="txtName"
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                value={txtName}
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-[#222] mb-2">
                Địa chỉ email *
              </label>
              <input
                type="email"
                id="email"
                name="txtEmail"
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                value={txtEmail}
                onChange={this.handleInputChange}
                required
              />
              {emailError && <div className="text-red-500">{emailError}</div>}
            </div>
            {formError && <div className="text-red-500">{formError}</div>}
            <div className="flex items-center space-x-5">
              <button
                type="submit"
                className="px-4 py-2 font-bold text-white bg-[#c89979] hover:bg-[#ab8165] transition-all duration-300 focus:outline-none focus:shadow-outline"
              >
                ĐĂNG KÝ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
