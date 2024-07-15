import React from 'react';

const PromoSection = () => {
  return (
    <div className="flex">
      <div className="relative w-1/2 flex items-center">
        <img
          src="https://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/img1_2e549330-1e72-42fe-b909-7caec5ab9eaa.jpg"
          alt="Sự lãng mạn trong không khí"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-y-0 right-0 w-[40%] bg-opacity-50 flex flex-col justify-center p-8 text-right">
          <h2 className="text-[#dfba48] text-4xl font-bold mb-4">Romancein the air</h2>
          <p className="text-white text-lg mb-4">Thể hiện phong cách của bạn với sự tự tin và thái độ</p>
          <div className="text-end">
          <p
            to="/details"
            className="inline-block w-[50%] font-medium border border-[#dfba48] text-[#dfba48] py-2 px-4 hover:bg-[#dfba48] hover:text-black transition-colors duration-300 cursor-pointer"
          >
            CHI TIẾT
          </p>
          </div>
        </div>
      </div>

      <div className="relative w-1/2 flex items-center">
        <img
          src="https://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/img2_0b6fbb1b-4374-4875-a7ff-93f41dce689e.jpg"
          alt="Analog & Kỹ thuật số"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-y-0 right-0 w-[40%] bg-black bg-opacity-50 flex flex-col justify-center p-8 text-right">
          <h2 className="text-[#dfba48] text-4xl font-bold mb-4">Analog & Kỹ thuật số</h2>
          <p className="text-white text-lg mb-4">Đồng hồ thông minh - Tuyên bố thời trang mới nhất</p>
          <div className="text-end">
          <p
            to="/details"
            className="inline-block w-[50%] font-medium border border-[#dfba48] text-[#dfba48] py-2 px-4 hover:bg-[#dfba48] hover:text-black transition-colors duration-300 cursor-pointer"
          >
            CHI TIẾT
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
