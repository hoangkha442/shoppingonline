import React from 'react';
import { Carousel } from 'antd';

const BannerComponent = () => {

  return (
    <div className="">
        <Carousel autoplay>
            <div>
                <img src="https://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/slide1.jpg" alt="Slide 1" className='w-full h-full object-cover' />
            </div>
            <div>
                <img src="https://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/slide2.jpg" alt="Slide 2" className='w-full h-full object-cover' />
            </div>
            <div>
                <img src="https://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/slide3.jpg" alt="Slide 3" className='w-full h-full object-cover' />
            </div>
        </Carousel>
    </div>
  );
}

export default BannerComponent;
