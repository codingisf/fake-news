import React from "react";

const InputSection = ({ text, setText }) => {
  return (
    <section className="w-full max-w-3xl mx-auto mb-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <label
          htmlFor="newsInput"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Paste Tamil News Content
        </label>
        <textarea
          id="newsInput"
          className="w-full h-48 p-4 text-lg border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none font-tamil"
          placeholder="Enter Tamil news text here... (e.g. தமிழக செய்திகள்)"
          value={text}
          onChange={(e) => setText(e.target.value)}
          spellCheck="false"
        />
      </div>
    </section>
  );
};

export default InputSection;
