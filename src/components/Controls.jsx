import React from "react";

const Controls = ({ onCheck, onClear, isLoading, isDisabled }) => {
  return (
    <div className="flex justify-center gap-4 mb-8">
      <button
        onClick={onCheck}
        disabled={isDisabled || isLoading}
        className={`px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 shadow-md
          ${
            isDisabled || isLoading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg active:scale-95"
          }`}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Analyzing...
          </span>
        ) : (
          "Check Fake News"
        )}
      </button>

      <button
        onClick={onClear}
        disabled={isLoading || isDisabled}
        className="px-8 py-3 rounded-lg font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-all duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Clear Text
      </button>
    </div>
  );
};

export default Controls;
