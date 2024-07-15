import React from 'react'

export default function AboutProfile() {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
      className="bg-fixed bg-center bg-contain bg-no-repeat h-72 object-cover bg-fill"
      style={{ backgroundImage: "url('https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/banner-portfolio.jpg')" }}
    >
      {/* Content on top of the background image */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-around items-center bg-[#000000bd]">
        {/* Stat Item */}
        <div className="flex flex-col items-center">
          <span className="text-white text-4xl font-bold">1280</span>
          <span className="text-white text-lg">SẢN PHẨM</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-white text-4xl font-bold">8</span>
          <span className="text-white text-lg">GIẢI THƯỞNG</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-white text-4xl font-bold">3898</span>
          <span className="text-white text-lg">KHÁCH HÀNG HÀI LÒNG</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-white text-4xl font-bold">25</span>
          <span className="text-white text-lg">CHI NHÁNH CỬA HÀNG</span>
        </div>
      </div>
    </div>
    </div>
  )
}
