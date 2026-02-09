import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-gray-400 pt-20 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6">

        {/* Top Footer */}
        <div className="grid md:grid-cols-4 gap-12">

            {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#f06310] text-white w-10 h-10 flex items-center justify-center rounded-xl font-bold">
                ع
              </div>
              <h2 className="text-white text-xl font-bold">عدسة</h2>
            </div>

            <p className="text-sm mb-6">
              مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم.
            </p>

            {/* Social */}
            <div className="flex gap-3 text-xl">
              <i className="fa-brands fa-youtube cursor-pointer hover:text-white"></i>
              <i className="fa-brands fa-linkedin cursor-pointer hover:text-white"></i>
              <i className="fa-brands fa-github cursor-pointer hover:text-white"></i>
              <i className="fa-brands fa-x-twitter cursor-pointer hover:text-white"></i>
            </div>
          </div>
          {/* Explore */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
              استكشف
              <span className="absolute -bottom-2 right-0 w-10 h-[2px] bg-[#f06310]"></span>
            </h3>

            <ul className="space-y-3">
              <li className="hover:text-white cursor-pointer">الرئيسية</li>
              <li className="hover:text-white cursor-pointer">المدونة</li>
              <li className="hover:text-white cursor-pointer">من نحن</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
              التصنيفات
              <span className="absolute -bottom-2 right-0 w-10 h-[2px] bg-[#f06310]"></span>
            </h3>

            <ul className="space-y-3">
              <li className="hover:text-white cursor-pointer">إضاءة</li>
              <li className="hover:text-white cursor-pointer">بورتريه</li>
              <li className="hover:text-white cursor-pointer">مناظر طبيعية</li>
              <li className="hover:text-white cursor-pointer">تقنيات</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
              ابقى على اطلاع
              <span className="absolute -bottom-2 right-0 w-10 h-[2px] bg-[#f06310]"></span>
            </h3>

            <p className="mb-6 text-sm">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>

            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="w-full bg-transparent border border-gray-700 rounded-full px-4 py-3 mb-4 outline-none focus:border-[#f06310]"
            />

            <button className="w-full bg-[#f06310] text-white py-3 rounded-full font-bold hover:bg-orange-500 transition">
              اشترك
            </button>
          </div>

          

          

          


        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex gap-6 mb-4 md:mb-0">
            <span className="hover:text-white cursor-pointer">سياسة الخصوصية</span>
            <span className="hover:text-white cursor-pointer">شروط الخدمة</span>
          </div>

          <p>
            © 2026 عدسة. صنع بكل  جميع الحقوق محفوظة.
          </p>
        </div>

      </div>
    </footer>
  );
}
