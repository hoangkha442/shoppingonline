import axios from "axios";
import React, { Component } from "react";
import withRouter from "../utils/withRouter";
import MyContext from "../contexts/MyContext";
import Modal from "react-modal";
import { FaSearchPlus } from "react-icons/fa";
import Swal from "sweetalert2";

Modal.setAppElement("#root"); // Đảm bảo rằng Modal biết phần tử gốc của ứng dụng

class ProductDetail extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      txtQuantity: 1,
      isModalOpen: false,
      modalImage: "",
    };
  }

  componentDidMount() {
    const params = this.props.params;
    this.apiGetProduct(params.id);
  }

  // APIs
  apiGetProduct(id) {
    axios.get("/api/customer/products/" + id).then((res) => {
      const result = res.data;
      this.setState({ product: result });
    });
  }

  // Event handlers
  btnAdd2CartClick(e) {
    e.preventDefault();
    const product = this.state.product;
    const quantity = parseInt(this.state.txtQuantity);
    if (quantity) {
      const mycart = this.context.mycart;
      const index = mycart.findIndex((x) => x.product._id === product._id); // check if the _id exists in mycart
      if (index === -1) {
        // not found, push newItem
        const newItem = { product: product, quantity: quantity };
        mycart.push(newItem);
      } else {
        // increasing the quantity
        mycart[index].quantity += quantity;
      }
      this.context.setMycart(mycart);
      Swal.fire({
        title: "Thành công",
        text: "Sản phẩm đã được thêm vào giỏ hàng!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Lỗi",
        text: "Vui lòng nhập số lượng hợp lệ!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }

  increment = () => {
    this.setState({ txtQuantity: this.state.txtQuantity + 1 });
  };

  decrement = () => {
    this.setState({ txtQuantity: Math.max(1, this.state.txtQuantity - 1) });
  };

  openModal = (image) => {
    this.setState({ isModalOpen: true, modalImage: image });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false, modalImage: "" });
  };

  render() {
    const { product, txtQuantity, isModalOpen, modalImage } = this.state;
    console.log('product: ', product);
    if (product) {
      return (
        <div className="flex flex-col items-center py-32 bg-white">
          <div className="container-80 flex flex-col md:flex-row justify-between items-center bg-white rounded-md p-6">
            <div className="w-full md:w-1/2 flex justify-center relative">
              <img
                src={"data:image/jpg;base64," + product.image}
                className="object-cover w-full max-w-md h-auto rounded-md cursor-pointer"
                alt={product.name}
                onClick={() => this.openModal("data:image/jpg;base64," + product.image)}
              />
              <div className="absolute bottom-2 left-2 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full p-2">
                <FaSearchPlus className="text-white text-xl" />
              </div>
            </div>
            <div className="md:pl-10 mt-6 md:mt-0 space-y-6 w-1/2">
              <div>
                <div className="flex items-center text-sm uppercase text-gray-700">
                  <p className="opacity-70">Trang chủ</p>
                  <p className="mx-3">/</p>
                  <p className="opacity-70 uppercase">{product.category.name}</p>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 pt-2 md:mt-0 uppercase">
                  {product.name}
                </h2>
                <div className="h-[3px] bg-gray-200 my-4 w-full max-w-[30px]"></div>
              </div>
              <div className="flex text-gray-600 text-2xl gap-2 mt-0">
                <p className="font-bold text-[#111]">
                  {`${product.price.toLocaleString()} đ`}
                </p>
              </div>
              <div className="flex items-center mt-5">
                <button
                  className="bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-100 px-3 py-2"
                  onClick={this.decrement}
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  max="99"
                  value={txtQuantity}
                  onChange={(e) => this.setState({ txtQuantity: e.target.value })}
                  className="text-center w-10 border border-gray-300 py-2"
                />
                <button
                  className="bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-100 px-3 py-2"
                  onClick={this.increment}
                >
                  +
                </button>
                <button
                  className="bg-[#e2b94c] text-white px-6 py-2 font-bold text-base rounded-sm hover:bg-[#cca844] ml-4"
                  onClick={(e) => this.btnAdd2CartClick(e)}
                >
                  THÊM VÀO GIỎ
                </button>
              </div>
              <div className="mt-4">
                <div className="text-gray-600 border-t border-dashed border-[#ddd] text-sm py-1">Mã sản phẩm: {product._id}</div>
                <div className="text-gray-600 border-t border-dashed border-[#ddd] text-sm py-1">Danh mục: {product.category.name}</div>
              </div>
            </div>
          </div>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={this.closeModal}
            contentLabel="Image Modal"
            className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-75 flex items-center justify-center"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            style={{
              overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
              content: { border: "none", background: "none", overflow: "visible" },
            }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                className="absolute top-2 right-2 text-white text-2xl z-10"
                onClick={this.closeModal}
              >
                &times;
              </button>
              <img
                src={modalImage}
                alt="Modal"
                className="object-contain max-w-full max-h-[90vh] mx-auto"
              />
            </div>
          </Modal>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default withRouter(ProductDetail);
