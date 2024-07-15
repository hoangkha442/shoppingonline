import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import CartUtil from '../utils/CartUtil';
import axios from 'axios';
import withRouter from '../utils/withRouter';
import { MdLocalOffer } from 'react-icons/md';
import Swal from 'sweetalert2';

class Mycart extends Component {
  static contextType = MyContext; // using this.context to access global state

  render() {
    const mycart = this.context.mycart.map((item, index) => {
      return (
        <tr className="border-b py-2" key={item.product._id}>
          <td className="text-start">
            <button 
              onClick={() => this.lnkRemoveClick(item.product._id)}
              className="text-[#d0d0d0] w-7 h-7 rounded-full border-2 mr-2 border-[#d0d0d0] hover:text-[#a9a8a8] hover:border-[#a9a8a8] transition-all duration-300">
              X
            </button>
            <img 
              src={"data:image/jpg;base64," + item.product.image}
              alt="image"
              className="w-20 h-20 object-cover inline-block" 
            />
            <h2 className="ml-4 inline-block font-normal text-sm">{item.product.name}</h2>
          </td>
          <td className="text-start">{item.product.price.toLocaleString()} ₫</td>
          <td className="text-center">{item.quantity}</td>
          <td className="text-right font-bold">{(item.product.price * item.quantity).toLocaleString()} ₫</td>
        </tr>
      );
    });

    return (
      <div className="container-80 py-32">
        <div className="flex">
          <div className="md:col-span-3 pr-6 w-[66.6%]">
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
                {mycart}
              </tbody>
            </table>
            <div className="flex justify-start gap-6 mt-6">
              <a href='/' className="px-4 py-2 border-[1.6px] border-[#c89979] text-[#c89979] font-medium text-sm">
                <span className='mr-3'>←</span> TIẾP TỤC XEM SẢN PHẨM
              </a>
            </div>
          </div>

          {/* CART SUMMARY */}
          <div className="border-l pl-6 w-1/3">
            <h2 className="text-sm font-bold pb-[9px] uppercase text-[#353535] border-b-[3px]">Tổng Số Lượng</h2>
            <div className="my-4">
              <div className="flex justify-between mb-2 border-b pb-2">
                <span className='text-[.9em] normal-case tracking-normal text-[#353535]'>Tổng phụ</span>
                <span className="font-bold text-[.9em] text-[#111]">{CartUtil.getTotal(this.context.mycart)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className='text-[.9em] normal-case tracking-normal text-[#353535]'>Giao hàng</span>
                <div className="text-right">
                  <span className='text-[13px] normal-case tracking-wide text-[#666666]'>Giao hàng miễn phí</span>
                  <p className='text-[13px] normal-case tracking-wide text-[#666666] py-2'>Ước tính cho <strong className='font-bold text-[#666666]'>Việt Nam</strong>.</p>
                  <a href="#" className="text-[13px] normal-case tracking-wide text-[#666666]">Đổi địa chỉ</a>
                </div>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className='text-[.9em] normal-case tracking-normal text-[#353535]'>Tổng</span>
                <span className="font-bold text-[.9em] text-[#111]">{CartUtil.getTotal(this.context.mycart)} ₫</span>  
              </div>
            </div>
            <button onClick={() => this.lnkCheckoutClick()} className="w-full uppercase py-2 bg-[#e2b94c] text-white font-bold rounded-sm text-[15.52px] mb-4">Đặt hàng</button>
            <div>
              <h3 className="text-lg font-bold mb-2 flex gap-3 items-center border-b-[3px] border-[#ececec] text-[.95em] pb-2"> <MdLocalOffer className="text-[#b5b5b5] text-[18px] inline ml-2 rotate-90" title="Coupon" />Phiếu ưu đãi</h3>
              <div className="pt-2">
                <input type="text" className="box-border border border-[#ddd] px-3 h-[2.507em] text-[.97em] rounded-none max-w-full w-full align-middle bg-white text-[#333] shadow-inner transition-all transition-border transition-background duration-300" placeholder="Mã ưu đãi" />
                <button className="mt-4 box-border border border-[#ddd] px-3 h-[2.507em] text-[.97em] rounded-none max-w-full w-full align-middle bg-[#f9f9f9] hover:bg-[#dedede] text-[#6a6a6a] shadow-inner transition-all transition-border transition-background duration-300">Áp dụng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  lnkRemoveClick(id) {
    const mycart = this.context.mycart;
    const index = mycart.findIndex(x => x.product._id === id);
    if (index !== -1) { // found, remove item
      mycart.splice(index, 1);
      this.context.setMycart(mycart);
    }
  }

  lnkCheckoutClick() {
    if (this.context.mycart.length > 0) {
      const total = CartUtil.getTotal(this.context.mycart);
      const items = this.context.mycart;
      const customer = this.context.customer;
      if (customer) {
        Swal.fire({
          title: 'Bạn có chắc?',
          text: "Mua các sản phẩm này không?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Có!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.apiCheckout(total, items, customer);
          }
        });
      } else {
        this.props.navigate('/login');
      }
    } else {
      Swal.fire('Error', 'Bạn chưa có sản phẩm nào trong giỏ hàng.', 'error');
    }
  }

  apiCheckout(total, items, customer) {
    const body = { total: total, items: items, customer: customer };
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.post('/api/customer/checkout', body, config).then((res) => {
      const result = res.data;
      if (result) {
        this.context.setMycart([]);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Đơn hàng đã được đặt thành công.",
          showConfirmButton: false,
          timer: 1500
        });
        this.props.navigate('/home');
      } else {
        Swal.fire('Error', 'Có lỗi xảy ra khi đặt hàng', 'error');
      }
    });
  }
}

export default withRouter(Mycart);
