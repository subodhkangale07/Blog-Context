import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="w-11/12 max-w-[670px] py-8 flex flex-col justify-center items-center gap-y-7 mt-[100px] mb-[70px]">
      {loading ? (
        <Spinner />
      ) : (
        posts.length === 0 ? (
          <div>
            <p className="text-lg font-semibold text-gray-500">NO POSTS FOUND</p>
          </div>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="w-full bg-white rounded-lg shadow-lg p-6 border border-gray-200"
            >
              <p className="font-bold text-xl text-gray-900">{post.title}</p>
              <p className="text-sm mt-2 text-gray-600">
                By <span className="italic">{post.author}</span> on{" "}
                <span className="underline font-semibold">{post.category}</span>
              </p>
              <p className="text-xs mt-1 text-gray-500">Posted on {post.date}</p>
              <p className="text-md mt-4 text-gray-800">{post.content}</p>
              <div className="flex flex-wrap gap-x-3 mt-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs text-blue-700 font-semibold underline"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        )
      )}
    </div>
  );
};

export default Blogs;
