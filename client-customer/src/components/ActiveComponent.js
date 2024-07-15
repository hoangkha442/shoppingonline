import axios from 'axios';
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import withRouter from '../utils/withRouter';

class Active extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtID: '',
      txtToken: '',
      formError: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { txtID, txtToken } = this.state;

    if (!txtID || !txtToken) {
      this.setState({ formError: 'Vui lòng nhập đúng các thông tin bên dưới.' });
      return;
    }

    this.apiActive(txtID, txtToken);
  };

  // API call
  apiActive(id, token) {
    const body = { id, token };
    axios.post('/api/customer/active', body).then((res) => {
      const result = res.data;
      if (result) {
        Swal.fire({
          title: 'Kích hoạt thành công!',
          text: 'Tài khoản của bạn đã được kích hoạt.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.props.navigate('/login');
        });
      } else {
        Swal.fire({
          title: 'Kích hoạt thất bại',
          text: 'Mã kích hoạt không đúng hoặc đã hết hạn.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }).catch((error) => {
      Swal.fire({
        title: 'Kích hoạt thất bại',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  }

  render() {
    const { txtID, txtToken, formError } = this.state;

    return (
      <div className="flex items-center justify-center bg-[#fff] py-20 container-80">
        <div className="w-full container space-y-2 bg-[#fff]">
          <h2 className="text-xl font-bold text-left text-[#1c1c1c]">KÍCH HOẠT TÀI KHOẢN</h2>
          <form className="space-y-6" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="id" className="block text-sm font-bold text-[#222] mb-2">
                ID *
              </label>
              <input
                type="text"
                id="id"
                name="txtID"
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                value={txtID}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="token" className="block text-sm font-bold text-[#222] mb-2">
                Token *
              </label>
              <input
                type="text"
                id="token"
                name="txtToken"
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                value={txtToken}
                onChange={this.handleInputChange}
                required
              />
            </div>
            {formError && <div className="text-red-500">{formError}</div>}
            <div className="flex items-center space-x-5">
              <button
                type="submit"
                className="px-4 py-2 font-bold text-white bg-[#c89979] hover:bg-[#ab8165] transition-all duration-300 focus:outline-none focus:shadow-outline"
              >
                KÍCH HOẠT
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Active);
