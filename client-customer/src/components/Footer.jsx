import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaRegBuilding,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-16">
      <div className="container-80 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact Information */}
        <div>
          <h5 className="text-xl font-bold mb-4">THÔNG TIN LIÊN HỆ</h5>
          <ul className="text-sm">
            <li className="mb-2 flex items-center">
              <FaMapMarkerAlt className="mr-4 text-sm" />
              24 Hồ Tùng Mậu, An Bình, Thủ Đức
            </li>
            <li className="mb-2 flex items-center">
              <FaPhone className="mr-4 text-sm" />
              0981054876
            </li>
            <li className="mb-2 flex items-center">
              <FaEnvelope className="mr-4 text-sm" />
              lephamduy@gmail.com
            </li>
            <li className="mb-2 flex items-center">
              <FaRegBuilding className="mr-4 text-sm" />
              duyle@phamduy.media
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h5 className="text-xl font-bold mb-4">LIÊN KẾT</h5>
          <ul className="text-sm">
            <li className="mb-2">Giới thiệu</li>
            <li className="mb-2">Đồng hồ nam</li>
            <li className="mb-2">Đồng hồ nữ</li>
            <li className="mb-2">Blogs</li>
            <li>Lien hệ</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h5 className="text-xl font-bold mb-4">HỖ TRỢ</h5>
          <ul className="text-sm">
            <li className="mb-2">Hướng dẫn mua hàng</li>
            <li className="mb-2">Hướng dẫn thanh toán</li>
            <li className="mb-2">Chính sách bảo hành</li>
            <li className="mb-2">Chính sách đổi trả</li>
            <li>Tư vấn khách hàng</li>
          </ul>
        </div>

        {/* App Links */}
        <div>
          <h5 className="text-xl font-bold mb-4">TẢI ỨNG DỤNG TRÊN</h5>
          <p className="text-sm mb-4">
            Ứng dụng DB Watch hiện có sẵn trên Google Play & App Store. Tải nó
            ngay.
          </p>
          <div className="flex">
            <div className="bg-gray-700 p-2 mr-4 rounded">
              {/* Icons or images for app stores would be placed here */}
              <span className="text-sm">Google Play</span>
            </div>
            <div className="bg-gray-700 p-2 rounded">
              {/* Icons or images for app stores would be placed here */}
              <span className="text-sm">App Store</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
