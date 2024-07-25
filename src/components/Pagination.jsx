import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, totalPages, handlerPageChange } = useContext(AppContext);

  return (
    <div className="w-full flex justify-center items-center fixed bottom-0 bg-gray-50 border-t border-gray-300">
      <div className="flex justify-between w-11/12 max-w-[670px] py-4">
        <div className="flex gap-x-3">
          {page > 1 && (
            <button
              onClick={() => handlerPageChange(page - 1)}
              className="rounded-md border border-gray-300 px-4 py-2 bg-white text-gray-700 hover:bg-gray-200 transition"
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              onClick={() => handlerPageChange(page + 1)}
              className="rounded-md border border-gray-300 px-4 py-2 bg-white text-gray-700 hover:bg-gray-200 transition"
            >
              Next
            </button>
          )}
        </div>
        <p className="font-semibold text-sm text-gray-700">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
