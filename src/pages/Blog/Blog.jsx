import React, { useState } from "react";
import BlogCards from "../BlogCards/blogcards";
import { blogData } from "../data/blogs";

export default function Blog() {
  const [blogss] = useState(blogData);

  return (
    <div>
      <section className="hero-1 flex flex-col items-center justify-center text-center gap-7 p-30">
        <p className="text-[#f06310] text-xl p-2 w-fit rounded-3xl border-2 mt-3">
          المدونه
        </p>

        <h1 className="text-white text-7xl font-bold">
          استكشف <span className="text-[#f06310]">مقالاتنا</span>
        </h1>

        <p className="text-gray-400 text-2xl">
          اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
        </p>

      
      </section>

        <div className="flex gap-4 mx-0 justify-center">
          {blogss.categories.map((c) => (
            <button
              key={c.id}
              className="text-white border px-4 py-1 rounded-full hover:bg-[#f06310]"
            >
              {c.name}
            </button>
          ))}
        </div>

      <section className="hero-2 bg-[#161616] p-30 grid grid-cols-3 gap-6">
        
        {blogss.posts.map((blog) => (
          <BlogCards key={blog.id} blog={blog} />
        ))}
      </section>
    </div>
  );
}
