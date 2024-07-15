import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSignInAlt, FaUser } from 'react-icons/fa';
import { Dropdown, Menu, Avatar } from 'antd';
import MyContext from '../contexts/MyContext';

class Inform extends Component {
  static contextType = MyContext;

  lnkLogoutClick = () => {
    this.context.setToken('');
    this.context.setCustomer(null);
    this.context.setMycart([]);
  }

  render() {
    const { customer, token, mycart } = this.context;

    const menu = (
      <Menu>
        <Menu.Item key="profile">
          <Link to='/myprofile' className="flex items-center">
            <FaUser size={20} className="mr-2 text-gray-400" />
            Thông tin cá nhân
          </Link>
        </Menu.Item>
        <Menu.Item key="orders">
          <Link to='/myorders' className="flex items-center">
            <FaUser size={20} className="mr-2 text-gray-400" />
            Đơn hàng của tôi
          </Link>
        </Menu.Item>
        <Menu.Item key="logout">
          <span onClick={this.lnkLogoutClick} className="flex items-center cursor-pointer">
            <FaSignInAlt size={20} className="mr-2 text-gray-400" />
            Đăng xuất
          </span>
        </Menu.Item>
      </Menu>
    );

    const renderAvatar = () => {
      if (customer && customer.name) {
        const initial = customer.name.charAt(0).toUpperCase();
        return (
          <Avatar className="bg-[#e2b94c] text-white cursor-pointer">
            {initial}
          </Avatar>
        );
      }
      return (
        <FaUser size={20} className="mr-2 text-[#fffc]" />
      );
    };

    return (
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          {token === '' ? (
            <Link to='/login' className="flex items-center">
              <FaUser size={20} className="mr-2 text-[#fffc]" />
            </Link>
          ) : (
            <div className="flex items-center mr-3">
              <Dropdown overlay={menu} trigger={['click']}>
                <span className="flex items-center cursor-pointer">
                  {renderAvatar()}
                </span>
              </Dropdown>
            </div>
          )}
        </div>
        <div className="flex items-center">
          <Link to='/mycart' className="relative flex items-center">
            <FaShoppingCart size={20} className="text-[#fffc]" />
            <span className="absolute top-3 left-4 bg-[#e2b94c] text-white rounded-full px-1 text-xs">
              {mycart.length}
            </span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Inform;
