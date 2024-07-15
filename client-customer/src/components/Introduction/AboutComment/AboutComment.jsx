import React from "react";

export default function AboutComment() {
  return (
    <section className="text-gray-600 body-font container-80">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img
                src="https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/customer-2-150x150.png"
                alt=""
              />
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
                Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những
                người đàn ông hiện đại ngày nay
              </p>
              <h2 className="text-gray-900 text-lg title-font mt-3 font-bold italic">
                Thúy Kiều
              </h2>
            </div>
          </div>

          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img
                src="https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/customer-4-150x150.png"
                alt=""
              />
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
                Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những
                người đàn ông hiện đại ngày nay
              </p>
              <h2 className="text-gray-900 text-lg title-font mt-3 font-bold italic">
              Nguyễn Du
              </h2>
            </div>
          </div>

          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img
                src="https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/customer-3-150x150.png"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
                Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những
                người đàn ông hiện đại ngày nay
              </p>
              <h2 className="text-gray-900 text-lg title-font mt-3 font-bold italic">
              Thúy Vân
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
