import React from 'react'

export default function AboutUs() {
  return (
        <div className="flex items-center space-x-10 container-80">
            <div className="w-1/2">
                <img className='w-full h-full object-cover rounded' src="https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/about-us_bg.jpg" alt="introduction_image" />
            </div>
            <div className="w-1/2">
                <h1 className='text-4xl texxt-[#1c1c1c] font-bold mb-7'>Giới thiệu về DB Watch</h1>
                <p className='text-gray-500 text-base leading-6'>“Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ… Một chiếc đồng hồ nam cao cấp chính hãng khắc họa một giá trị đích thực khi nói đến phụ kiện xa xỉ dành cho phái mạnh. Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay. Trên cổ tay của những người đàn ông thành đạt luôn dành vị trí cho một chiếc đồng hồ nam cao cấp.”</p>
            </div>
        </div>
  )
}
