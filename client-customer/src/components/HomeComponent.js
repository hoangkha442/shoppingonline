import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../contexts/MyContext';
import { FaCartPlus } from 'react-icons/fa';
import FeatureSection from './FeatureSection';
import PromoSection from './PromoSection';
import Swal from 'sweetalert2';

class Home extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);
    this.state = {
      mensWatches: [],
      womensWatches: [],
      coupleWatches: []
    };
  }

  componentDidMount() {
    this.apiGetProductsByCatID('6288b164708fabf8ab29ca0a', 'mensWatches');
    this.apiGetProductsByCatID('6288b174708fabf8ab29ca0d', 'womensWatches');
    this.apiGetProductsByCatID('6288b180708fabf8ab29ca10', 'coupleWatches');
  }

  apiGetProductsByCatID(cid, stateKey) {
    axios.get('/api/customer/products/category/' + cid).then((res) => {
      const result = res.data;
      this.setState({ [stateKey]: result });
    });
  }

  handleAddToCart(product) {
    const mycart = this.context.mycart;
    const index = mycart.findIndex(x => x.product._id === product._id);
    if (index === -1) {
      const newItem = { product: product, quantity: 1 };
      mycart.push(newItem);
    } else {
      mycart[index].quantity += 1;
    }
    Swal.fire({
      position: "cneter",
      icon: "success",
      title: "Đã thêm sản phẩm vào giỏ hàng.",
      showConfirmButton: false,
      timer: 1500
    });
    this.context.setMycart(mycart);
  }

  renderProducts(products) {
    return products.map((item) => (
      <div key={item._id} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden relative group">
      <div className="overflow-hidden">
        <Link to={'/product/' + item._id} className="w-full p-5">
          <img
            className="object-cover w-full h-[250px] hover:scale-110 transition-all duration-300 cursor-pointer px-5 py-2"
            src={'data:image/jpg;base64,' + item.image}
            alt={item.name}
          />
        </Link>
        <div
          className="z-40 absolute bottom-1/4 left-[15%] transform -translate-x-1/2 -translate-y-1/2 p-2 bg-white rounded-full border border-[#dfba48] text-[#dfba48] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={() => this.handleAddToCart(item)}
        >
          <FaCartPlus size={20} className=" text-[#dfba48] transition-colors duration-300" />
        </div>
      </div>
      
      <div className="p-5 pt-1 text-center">
        <p className="text-[#353535] font-roboto text-[14px] tracking-[0.54px] leading-[12.96px] my-[1.08px] text-center uppercase">{item.category.name}</p>
        <h5 className="hover:text-[#e2ba48] transition-colors duration-300 text-[#201f1f] uppercase font-roboto font-normal text-[15px] leading-[18.72px] my-[1px] mb-[8px] text-center">{item.name}</h5>
        <p className="text-[#111] inline text-[15px] font-bold leading-[14.4px] text-center">
          {item.price.toLocaleString()} ₫
        </p>
      </div>
    </div>
    ));
}



  render() {
    return (
      <div className="pt-16">
        <div className="align-center mb-4 container-80">
          <h2 className="relative text-[#3c3451] font-roboto-slab text-[32px] font-bold leading-[32px] mb-[16px] pb-[25px] text-center uppercase">ĐỒNG HỒ NAM
            <div
              className="absolute left-0 right-0 mx-auto"
              style={{
                borderBottom: '4px double #e4e4e4',
                bottom: '3px',
                content: '""',
                width: '50px',
                zIndex: 1,
              }}
            />
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {this.renderProducts(this.state.mensWatches)}
          </div>
        </div>
        <div className="pt-16 mt-16">
          <FeatureSection />
        </div>
        <div className="align-center mb-4 container-80">
          <h2 className="relative text-[#3c3451] font-roboto-slab text-[32px] font-bold leading-[32px] mb-[16px] pb-[25px] text-center uppercase">ĐỒNG HỒ NỮ
            <div
              className="absolute left-0 right-0 mx-auto"
              style={{
                borderBottom: '4px double #e4e4e4',
                bottom: '3px',
                content: '""',
                width: '50px',
                zIndex: 1,
              }}
            />
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {this.renderProducts(this.state.womensWatches)}
          </div>
        </div>
        <div className=" pt-16">
          <PromoSection />
        </div>
        
        <div className="align-center mb-4 container-80 pt-16">
          <h2 className="relative text-[#3c3451] font-roboto-slab text-[32px] font-bold leading-[32px] mb-[16px] pb-[25px] text-center uppercase">ĐỒNG HỒ ĐÔI
            <div
              className="absolute left-0 right-0 mx-auto"
              style={{
                borderBottom: '4px double #e4e4e4',
                bottom: '3px',
                content: '""',
                width: '50px',
                zIndex: 1,
              }}
            />  
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {this.renderProducts(this.state.coupleWatches)}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
