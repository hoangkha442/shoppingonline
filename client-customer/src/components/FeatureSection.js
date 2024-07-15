import React from 'react';
import { FaShippingFast, FaGift, FaPiggyBank } from 'react-icons/fa';

const FeatureSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[263.846px] transform translate-y-[-62.27px] backface-hidden"
      style={{
        backgroundImage: 'url(https://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/movement-gears-background.jpg)',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto flex justify-around items-center h-full text-white">
        <div className="group flex flex-col items-center text-center p-4">
          <FaShippingFast className="w-12 h-12 mb-4" />
          <h3 className="text-[#e2ba48] font-roboto-slab text-[18px] font-bold leading-[24px] my-[2px] mb-[16px] text-center uppercase">
            Miễn Phí Giao Hàng
          </h3>
          <p className="text-[#afafaf] text-[14px] font-medium leading-[18px] my-[2px] text-center">
            Miễn phí giao hàng cho tất cả đơn hàng trên 1 triệu đồng.
          </p>
        </div>
        <div className="group flex flex-col items-center text-center p-4">
          <FaGift className="w-12 h-12 mb-4" />
          <h3 className="text-[#e2ba48] font-roboto-slab text-[18px] font-bold leading-[24px] my-[2px] mb-[16px] text-center uppercase">
            Quà Tặng Đặc Biệt
          </h3>
          <p className="text-[#afafaf] text-[14px] font-medium leading-[18px] my-[2px] text-center">
            Nhận quà tặng đặc biệt khi mua sắm tại cửa hàng.
          </p>
        </div>
        <div className="group flex flex-col items-center text-center p-4">
          <FaPiggyBank className="w-12 h-12 mb-4" />
          <h3 className="text-[#e2ba48] font-roboto-slab text-[18px] font-bold leading-[24px] my-[2px] mb-[16px] text-center uppercase">
            Tiết Kiệm Hơn
          </h3>
          <p className="text-[#afafaf] text-[14px] font-medium leading-[18px] my-[2px] text-center">
            Tận hưởng những ưu đãi lớn cho tất cả sản phẩm của chúng tôi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
