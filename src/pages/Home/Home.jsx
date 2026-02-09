import React from "react";

export default function Home() {
  return (
    <div>
      <section className="hero-1 flex flex-col items-center justify-center text-center gap-7 p-3 min-h-screen">
        <div>
          <p className="text-[#f06310] text-xl p-2  w-fit rounded-3xl border-2 mt-3">
            مرحباً بك في عدسة
          </p>
        </div>
        <div>
          <h1 className="text-white text-7xl font-bold font-sans p-2">
            اكتشف <span className="text-[#f06310]">فن</span> <br /> التصوير
            الفوتوغرافي
          </h1>
          <p className="text-gray-400 text-2xl p-2">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>
        </div>
        <div className="flex gap-4 p-4">
          <button className="text-white text-xl w-fit p-4 rounded-4xl border-2  ">
            استكشف مقالات
          </button>
          <button className="text-white text-xl w-fit p-4 rounded-4xl border-2 ">
            اعرف المزيد
          </button>
        </div>
        <div className="grid-cols-4 flex gap-5 p-2  ">
          <div className="col-span-1 text-[#f06310] w-fit font-sans p-8 font-bold text-2xl  rounded-xl border-[#161616] border-4 bg-[#161616]">
            +50 <small className="block text-gray-500">مقالة</small>
          </div>
          <div className="col-span-1 text-[#f06310] w-fit font-sans p-8 font-bold text-2xl  rounded-xl border-[#161616] border-4 bg-[#161616]">
            +10ألف <small className="block text-gray-500">قارئ</small>
          </div>
          <div className="col-span-1 text-[#f06310] w-fit font-sans p-8 font-bold text-2xl  rounded-xl border-[#161616] border-4 bg-[#161616]">
            4<small className="block text-gray-500">تصنيفات</small>
          </div>
          <div className="col-span-1 text-[#f06310] w-fit font-sans p-8 font-bold text-2xl  rounded-xl border-[#161616] border-4 bg-[#161616]">
            6 <small className="block text-gray-500">كاتب</small>
          </div>
        </div>
      </section>

      <section className="hero-2 bg-[#161616]  ">
        <div className="flex flex-col items-start gap-5 p-20">
          <p className="text-[#f06310] border-2 rounded-3xl w-fit p-3 font-bold text-xl">
            مميز
          </p>

          <h2 className="text-white font-extrabold text-7xl font-mono">
            مقالات مختارة
          </h2>

          <div className="flex items-center gap-200">
            <p className="text-gray-500 text-2xl">
              محتوى منتقى لبدء رحلة تعلمك
            </p>

            <button className="text-white border-2 border-[#f06310] p-3 rounded-xl bg-[#f06310] font-bold hover:bg-amber-500">
              عرض الكل
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-8 p-20">
          {/* Card1 */}
          <div className="bg-[#111] rounded-3xl overflow-hidden flex group">
            <img
              src="/card1.jpg"
              alt="card"
              className="w-1/2 h-80 object-cover transition duration-100 group-hover:scale-105"
            />

            <div className="p-8 flex flex-col justify-center">
              <p className="text-[#f06312] bg-amber-950 w-fit p-3 rounded-2xl">
                اضاءة
              </p>
              <h3 className="text-white text-4xl font-bold mb-4 p-4 transition group-hover:text-[#f06310]">
                إتقان تصوير الساعة الذهبية: دليل شامل
              </h3>

              <p className="text-gray-400 text-lg">
                تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح
                احترافية حول الإضاءة والتكوين .
              </p>

              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/person-card-1.jpg"
                    alt="author"
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-white font-semibold">سالم حمد</h3>
                    <small className="block text-gray-400">١٥ يناير ٢٠٢٦</small>
                  </div>
                </div>
                <button className="text-[#f06310] font-semibold group-hover:underline">
                  اقرأ المقال ←
                </button>
              </div>
            </div>
          </div>
          {/* card2 */}
          <div className="bg-[#111] rounded-3xl overflow-hidden flex group">
            <img
              src="/card-2.jpg"
              alt="card"
              className="w-1/2 h-80 object-cover transition duration-100 group-hover:scale-105"
            />

            <div className="p-8 flex flex-col justify-center">
              <p className="text-[#f06312] bg-amber-950 w-fit p-3 rounded-2xl">
                بورتريه
              </p>
              <h3 className="text-white text-4xl font-bold mb-4 p-4 transition group-hover:text-[#f06310]">
                أسرار تصوير البورتريه: كيف تلتقط روح الشخصية
              </h3>

              <p className="text-gray-400 text-lg">
                اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية
                الموضوع الحقيقية.
              </p>

              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/person-card-2.jpg"
                    alt="author"
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-white font-semibold"> محمد علي</h3>
                    <small className="block text-gray-400">١٥ يناير ٢٠٢٦</small>
                  </div>
                </div>
                <button className="text-[#f06310] font-semibold group-hover:underline">
                  اقرأ المقال ←
                </button>
              </div>
            </div>
          </div>
          {/* card3 */}
          <div className="bg-[#111] rounded-3xl overflow-hidden flex group">
            <img
              src="/card-3.jpg"
              alt="card"
              className="w-1/2 h-80 object-cover transition duration-100 group-hover:scale-105"
            />

            <div className="p-8 flex flex-col justify-center">
              <p className="text-[#f06312] bg-amber-950 w-fit p-3 rounded-2xl">
                مناظر طبيعية
              </p>
              <h3 className="text-white text-4xl font-bold mb-4 p-4 transition group-hover:text-[#f06310]">
                دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف
              </h3>

              <p className="text-gray-400 text-lg">
                استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال
                الطبيعة بعدستك.
              </p>

              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/person-card-3.jpg"
                    alt="author"
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-white font-semibold"> ابراهيم حسن</h3>
                    <small className="block text-gray-400">١٥ يناير ٢٠٢٦</small>
                  </div>
                </div>
                <button className="text-[#f06310] font-semibold group-hover:underline">
                  اقرأ المقال ←
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-3 p-20">
        <div className="flex flex-col justify-center text-center items-center gap-3">
          <p className="text-[#f06310] border-2 rounded-4xl w-fit border-[#f06310] p-3">
            التصنيفات
          </p>
          <h4 className="text-amber-50 text-6xl font-extrabold font-mono">
            استكشف حسب الموضوع
          </h4>
          <small className="text-gray-400 block text-xl p-3">
            اعثر على محتوى مصمم حسب اهتماماتك
          </small>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
          {/* card1 */}
          <div className="group bg-[#111] rounded-3xl p-5 text-start border border-gray-800 transition duration-300 hover:bg-gradient-to-br hover:from-[#f06310] hover:to-[#ff8c42] hover:scale-105 cursor-pointer">
            <div className="w-14 h-14  flex items-center justify-center rounded-xl bg-[#1a1a1a] border border-gray-700 mb-4 group-hover:bg-white/20 transition">
              <span className="text-[#f06310] text-2xl group-hover:text-white">
                <i className="fa-solid fa-gear"></i>
              </span>
            </div>
            <h3 className="text-white text-xl font-bold mb-2 group-hover:text-white">
              إضاءة
            </h3>
            <small className="text-gray-400 group-hover:text-white/80">
              3 مقاله
            </small>
          </div>

          {/* card2 */}
          <div className="group bg-[#111] rounded-3xl p-5 text-start border border-gray-800 transition duration-300 hover:bg-gradient-to-br hover:from-[#f06310] hover:to-[#ff8c42] hover:scale-105 cursor-pointer">
            <div className="w-14 h-14  flex items-center justify-center rounded-xl bg-[#1a1a1a] border border-gray-700 mb-4 group-hover:bg-white/20 transition">
              <span className="text-[#f06310] text-2xl group-hover:text-white">
                <i className="fa-solid fa-user"></i>
              </span>
            </div>

            <h3 className="text-white text-xl font-bold mb-2 group-hover:text-white">
              بورترية
            </h3>

            <small className="text-gray-400 group-hover:text-white/80">
              3 مقالة
            </small>
          </div>

          {/* card3 */}
          <div className="group bg-[#111] rounded-3xl p-5 text-start border border-gray-800 transition duration-300 hover:bg-gradient-to-br hover:from-[#f06310] hover:to-[#ff8c42] hover:scale-105 cursor-pointer">
            <div className="w-14 h-14  flex items-center justify-center rounded-xl bg-[#1a1a1a] border border-gray-700 mb-4 group-hover:bg-white/20 transition">
              <span className="text-[#f06310] text-2xl group-hover:text-white">
                <i className="fa-solid fa-mountain-sun"></i>
              </span>
            </div>

            <h3 className="text-white text-xl font-bold mb-2 group-hover:text-white">
              مناظر طبيعيه
            </h3>

            <small className="text-gray-400 group-hover:text-white/80">
              2 مقالة
            </small>
          </div>

          {/* card4 */}
          <div className="group bg-[#111] rounded-3xl p-5 text-start border border-gray-800 transition duration-300 hover:bg-gradient-to-br hover:from-[#f06310] hover:to-[#ff8c42] hover:scale-105 cursor-pointer">
            <div className="w-14 h-14  flex items-center justify-center rounded-xl bg-[#1a1a1a] border border-gray-700 mb-4 group-hover:bg-white/20 transition">
              <span className="text-[#f06310] text-2xl group-hover:text-white">
                <i className="fa-solid fa-sliders"></i>
              </span>
            </div>

            <h3 className="text-white text-xl font-bold mb-2 group-hover:text-white">
              تقنيات
            </h3>

            <small className="text-gray-400 group-hover:text-white/80">
              5 مقالة
            </small>
          </div>

          {/* card5 */}
          <div className="group bg-[#111] rounded-3xl p-5 text-start border border-gray-800 transition duration-300 hover:bg-gradient-to-br hover:from-[#f06310] hover:to-[#ff8c42] hover:scale-105 cursor-pointer">
            {/* Icon */}
            <div className="w-14 h-14  flex items-center justify-center rounded-xl bg-[#1a1a1a] border border-gray-700 mb-4 group-hover:bg-white/20 transition">
              <span className="text-[#f06310] text-2xl group-hover:text-white">
                <i className="fa-solid fa-gear"></i>
              </span>
            </div>

            {/* Title */}
            <h3 className="text-white text-xl font-bold mb-2 group-hover:text-white">
              معدات
            </h3>

            {/* Articles count */}
            <small className="text-gray-400 group-hover:text-white/80">
              3 مقالة
            </small>
          </div>
        </div>
      </section>

      <section className="hero-4 p-20 bg-[#161616]">
        <div className="flex flex-col items-start gap-5 p-20">
          <p className="text-[#f06310] border-2 rounded-3xl w-fit p-3 font-bold text-xl">
            الاحدث
          </p>

          <h2 className="text-white font-extrabold text-7xl font-mono">
            احدث المقالات
          </h2>

          <div className="flex items-center gap-200">
            <p className="text-gray-500 text-2xl">محتوى جديد طازج من المطبعة</p>

            <button className="text-white border-2 border-[#f06310] p-3 rounded-xl bg-[#f06310] font-bold hover:bg-amber-500">
              عرض جميع المقالات
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 p-10 ">
          {/* Cards */}

          {/* card1 */}
          <div className="bg-[#111] rounded-3xl overflow-hidden group">
            <img
              src="/card-4.jpg"
              alt="card"
              className="w-full h-64 object-cover transition duration-100 group-hover:scale-105"
            />

            <div className="p-6">
             <div>
                 <h3 className="text-white text-2xl font-bold mb-3 transition group-hover:text-[#f06310]">
               أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي
              </h3>

              <p className="text-gray-400">افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.</p>
              
                    <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/person-4.jpg"
                    alt="author"
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-white font-semibold"> داود خالد</h3>
                    <small className="block text-gray-400">  مدرب تصوير</small>
                  </div>
                </div>
                <button className="text-[#f06310] font-semibold transition group-hover:underline group-hover:text-[#f06310]">
                  ←
                </button>
              </div>
             </div>
            </div>
          </div>

          {/* card2 */}
          <div className="bg-[#111] rounded-3xl overflow-hidden group">
            <img
              src="/card-5.jpg"
              alt="card"
              className="w-full h-64 object-cover transition duration-70 group-hover:scale-110"
            />

            <div className="p-6">
             <div>
                 <h3 className="text-white text-2xl font-bold mb-3 transition group-hover:text-[#f06310]">
              قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية
              </h3>

              <p className="text-gray-400">تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصري.</p>
              
                    <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/person-5.jpg"
                    alt="author"
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-white font-semibold">  ليث مجمود</h3>
                    <small className="block text-gray-400">   فنان بصري</small>
                  </div>
                </div>
                <button className="text-[#f06310] font-semibold group-hover:underline">
                  ←
                </button>
              </div>
             </div>
            </div>
          </div>

          {/* card3 */}
          <div className="bg-[#111] rounded-3xl overflow-hidden group">
            <img
              src="/card-6.jpg"
              alt="card"
              className="w-full h-64 object-cover transition duration-100 group-hover:scale-110"
            />

            <div className="p-6">
             <div>
                 <h3 className="text-white text-2xl font-bold mb-3 transition group-hover:text-[#f06310]">
               تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك
              </h3>

              <p className="text-gray-400">اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.</p>
              
                    <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/person-6.jpg"
                    alt="author"
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-white font-semibold">  جمال عبدالله</h3>
                    <small className="block text-gray-400">   مصور و مراجع تقني</small>
                  </div>
                </div>
                <button className="text-[#f06310] font-semibold group-hover:underline">
                  ←
                </button>
              </div>
             </div>
            </div>
          </div>

         
        </div>
      </section>
    </div>
  );
}
