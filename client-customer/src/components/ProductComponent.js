import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import MyContext from '../contexts/MyContext';
import withRouter from '../utils/withRouter'; // Import the new HOC

class Product extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      keyword: '',
    };
  }

  componentDidMount() {
    const { params } = this.props;
    if (params.cid) {
      this.apiGetProductsByCatID(params.cid);
    } else if (params.keyword) {
      this.setState({ keyword: params.keyword });
      this.apiGetProductsByKeyword(params.keyword);
    }
  }

  componentDidUpdate(prevProps) {
    const { params } = this.props;
    if (params.cid && params.cid !== prevProps.params.cid) {
      this.apiGetProductsByCatID(params.cid);
    } else if (params.keyword && params.keyword !== prevProps.params.keyword) {
      this.setState({ keyword: params.keyword });
      this.apiGetProductsByKeyword(params.keyword);
    }
  }

  apiGetProductsByCatID(cid) {
    axios.get(`/api/customer/products/category/${cid}`).then((res) => {
      const result = res.data;
      this.setState({ products: result });
    });
  }

  apiGetProductsByKeyword(keyword) {
    axios.get(`/api/customer/products/search/${keyword}`).then((res) => {
      const result = res.data;
      this.setState({ products: result });
    });
  }

  handleAddToCart(product) {
    const mycart = this.context.mycart;
    const index = mycart.findIndex((x) => x.product._id === product._id);
    if (index === -1) {
      const newItem = { product: product, quantity: 1 };
      mycart.push(newItem);
    } else {
      mycart[index].quantity += 1;
    }
    this.context.setMycart(mycart);
    alert('Sản phẩm đã được thêm vào giỏ hàng!');
  }

  renderProducts() {
    return this.state.products.map((item) => (
      <div key={item._id} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden relative group">
        <div className="overflow-hidden">
          <Link to={`/product/${item._id}`} className="w-full p-5">
            <img
              className="object-cover w-full h-[250px] hover:scale-110 transition-all duration-300 cursor-pointer px-5 py-2"
              src={`data:image/jpg;base64,${item.image}`}
              alt={item.name}
            />
          </Link>
          <div
            className="z-40 absolute bottom-1/4 left-[15%] transform -translate-x-1/2 -translate-y-1/2 p-2 bg-white rounded-full border border-[#dfba48] text-[#dfba48] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={() => this.handleAddToCart(item)}
          >
            <FaCartPlus size={20} className="text-[#dfba48] transition-colors duration-300" />
          </div>
        </div>
        <div className="p-5 pt-1 text-center">
          <p className="text-[#353535] font-roboto text-[14px] tracking-[0.54px] leading-[12.96px] my-[1.08px] text-center uppercase">{item.category.name}</p>
          <h5 className="hover:text-[#e2ba48] transition-colors duration-300 text-[#201f1f] uppercase font-roboto font-normal text-[15px] leading-[18.72px] my-[1px] mb-[8px] text-center">{item.name}</h5>
          <p className="text-[#111] inline text-[15px] font-bold leading-[14.4px] text-center">{item.price.toLocaleString()} ₫</p>
        </div>
      </div>
    ));
  }

  render() {
    const { keyword } = this.state;
    return (
      <div className="container-80 py-32">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Có tất cả {this.state.products.length} sản phẩm
        </h2>
        <div className="grid grid-cols-5 gap-3">
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

export default withRouter(Product);
