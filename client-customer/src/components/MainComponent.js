import React, { Component } from 'react';
import Menu from './MenuComponent';
import Inform from './InformComponent';
import Home from './HomeComponent';
import { Routes, Route, Navigate } from 'react-router-dom';
import Product from './ProductComponent';
import ProductDetail from './ProductDetailComponent';
import Signup from './SignupComponent';
import Active from './ActiveComponent';
import Login from './LoginComponent';
import Myprofile from './MyprofileComponent';
import Mycart from './MycartComponent';
import Myorders from './MyordersComponent';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import MyContext from '../contexts/MyContext';
import axios from 'axios';
import Introduction from './Introduction/Introduction';
import Contact from './Contact/Contact';

class Main extends Component {
  static contextType = MyContext;

  componentDidMount() {
    const token = localStorage.getItem('customer_token');
    if (token) {
      this.apiGetAccount(token);
    }
  }

  apiGetAccount(token) {
    const config = {
      headers: { 'x-access-token': token }
    };
    axios.get('/api/customer/account', config)
      .then((res) => {
        const result = res.data;
        this.context.setToken(token);
        this.context.setCustomer(result);
      })
      .catch((error) => {
        console.error('Error fetching customer account details', error);
      });
  }

  render() {
    return (
      <div className="">
        <Menu />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Navigate replace to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/introduction' element={<Introduction />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/category/:cid' element={<Product />} />
          <Route path='/product/search/:keyword' element={<Product />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/active' element={<Active />} />
          <Route path='/login' element={<Login />} />
          <Route path='/myprofile' element={<Myprofile />} />
          <Route path='/mycart' element={<Mycart />} />
          <Route path='/myorders' element={<Myorders />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;
