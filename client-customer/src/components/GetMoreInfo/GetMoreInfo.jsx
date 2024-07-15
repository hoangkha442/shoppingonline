import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';

export default function GetMoreInfo() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log('Email submitted:', email);
  };
  return (
    <div className="container-80 pb-10 row-email">
      <div className="bg-white flex items-center mx-auto mt-10">
      <h2 className="text-2xl font-bold uppercase tracking-wide flex-1 w-[60%]">
        Đăng ký nhận thông tin
      </h2>
      <form onSubmit={handleSubmit} className="flex items-center w-[40%]">
              <input type="text"
          placeholder="Email ..."
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          className="search-field h-10 rounded-l-md shadow-inner pl-5 focus:bg-gray-100 bg-gray-200 border-0 focus:border-none w-[70%]"/>
              <button type="submit" className="px-4 py-1 bg-[#c89979] rounded-r-[5px] text-white text-base h-10">
                ĐĂNG KÝ
              </button>
      </form>
    </div>
    </div>
  )
}
