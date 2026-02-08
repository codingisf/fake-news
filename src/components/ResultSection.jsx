import React from "react";

const ResultSection = ({ result }) => {
  if (!result) return null;

  const isReal = result.prediction === "REAL";
  const confidence = Math.round(result.confidence * 100);

  return (
    <section className="w-full max-w-2xl mx-auto animate-fade-in mb-12">
      <div
        className={`p-6 rounded-xl border-2 ${isReal ? "border-green-100 bg-green-50" : "border-red-100 bg-red-50"} text-center`}
      >
        <h3 className="text-xl font-medium text-gray-600 mb-2">
          Prediction Result
        </h3>

        <div className="flex items-center justify-center gap-3 mb-4">
          <span
            className={`text-4xl font-bold ${isReal ? "text-green-600" : "text-red-600"}`}
          >
            {isReal ? "REAL NEWS ✅" : "FAKE NEWS ❌"}
          </span>
        </div>

        <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm mb-4">
          <p className="text-gray-700 font-medium">
            Prediction Confidence:{" "}
            <span className={isReal ? "text-green-600" : "text-red-600"}>
              {confidence}%
            </span>
          </p>
        </div>

        {/* Explanation Section (Optional) */}
        {result.explanation && (
          <div className="mt-4 pt-4 border-t border-gray-200/50">
            <p className="text-sm text-gray-500 mb-2">
              Key contributors to this prediction:
            </p>
            <p className="text-gray-700">{result.explanation}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResultSection;
