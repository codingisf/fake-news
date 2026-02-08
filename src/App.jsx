import { useState } from "react";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import Controls from "./components/Controls";
import ResultSection from "./components/ResultSection";
import Footer from "./components/Footer";

function App() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckNews = () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    setResult(null); // Clear previous result

    // Simulate API call
    setTimeout(() => {
      // Mock logic:
      // specific keywords trigger specific results for demo purposes
      // default is random if no keywords match
      const lowerText = inputText.toLowerCase();
      let mockResult;

      if (lowerText.includes("பொய்") || lowerText.includes("fake")) {
        mockResult = {
          prediction: "FAKE",
          confidence: 0.92,
          explanation:
            "Contains suspicious keywords commonly found in misinformation.",
        };
      } else if (lowerText.includes("உண்மை") || lowerText.includes("real")) {
        mockResult = {
          prediction: "REAL",
          confidence: 0.88,
          explanation:
            "Source matches verified news outlets and consistent reporting.",
        };
      } else {
        // Random for other text
        const isReal = Math.random() > 0.5;
        mockResult = {
          prediction: isReal ? "REAL" : "FAKE",
          confidence: 0.75 + Math.random() * 0.2, // 75% to 95%
          explanation: isReal
            ? "Cross-referenced with multiple reliable sources."
            : "Lacks citation and uses emotionally charged language.",
        };
      }

      setResult(mockResult);
      setIsLoading(false);
    }, 2000);
  };

  const handleClear = () => {
    setInputText("");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <div className="container mx-auto px-4 max-w-4xl flex-grow flex flex-col justify-center">
        <Header />

        <main className="flex flex-col items-center w-full">
          <InputSection text={inputText} setText={setInputText} />

          <Controls
            onCheck={handleCheckNews}
            onClear={handleClear}
            isLoading={isLoading}
            isDisabled={!inputText.trim()}
          />

          {isLoading && (
            <div className="my-8 text-blue-600 animate-pulse font-medium">
              Processing Tamil text content...
            </div>
          )}

          <ResultSection result={result} />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
