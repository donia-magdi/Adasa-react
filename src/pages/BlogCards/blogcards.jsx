import React from "react";
import { blogData } from "../data/blogs";

const Blogcards = ({ blog }) => {

  return (
    <div className="bg-[#111] rounded-3xl overflow-hidden group">

      <img
        src={blog.image}
        alt="card"
        className="w-full h-64 object-cover transition duration-100 group-hover:scale-105"
      />

      <div className="p-6">

        <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-[#f06310]">
          {blog.title}
        </h3>

        <p className="text-gray-400">{blog.excerpt}</p>

        <div className="flex items-center justify-between p-4">

          <div className="flex items-center gap-3">

            <img
              src={blog.author.avatar}
              alt="author"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <h3 className="text-white font-semibold">
                {blog.author.name}
              </h3>

              <small className="block text-gray-400">
                {blog.author.role}
              </small>
            </div>

          </div>

          <button className="text-[#f06310] font-semibold group-hover:underline">
            ←
          </button>

        </div>
      </div>
    </div>
  );
};
export default Blogcards;
