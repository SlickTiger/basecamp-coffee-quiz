"use client";

import { useState, useCallback } from "react";
import {
  questions,
  personalities,
  type PersonalityType,
  type Answer,
} from "./quizData";

const DEFAULT_BG =
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1920&q=80";

function calculateResults(selectedAnswers: PersonalityType[]) {
  const counts: Record<PersonalityType, number> = {
    "Bold Pioneer": 0,
    "Smooth Traditionalist": 0,
    "Curious Explorer": 0,
    "Cozy Campfire": 0,
    "Mindful Purist": 0,
    "Social Trailblazer": 0,
  };

  for (const p of selectedAnswers) {
    counts[p]++;
  }

  const total = selectedAnswers.length;
  const results = Object.entries(counts)
    .map(([name, count]) => ({
      name: name as PersonalityType,
      percentage: Math.round((count / total) * 100),
    }))
    .sort((a, b) => b.percentage - a.percentage);

  return results;
}

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedPersonalities, setSelectedPersonalities] = useState<
    PersonalityType[]
  >([]);
  const [hoveredBg, setHoveredBg] = useState<string | null>(null);
  const [quizComplete, setQuizComplete] = useState(false);

  const activeBg = hoveredBg || DEFAULT_BG;
  const showImage = hoveredBg !== null || quizComplete;

  const handleAnswer = useCallback(
    (answer: Answer) => {
      const updated = [...selectedPersonalities, answer.personality];
      setSelectedPersonalities(updated);
      setHoveredBg(null);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizComplete(true);
      }
    },
    [currentQuestion, selectedPersonalities]
  );

  const handleRetake = useCallback(() => {
    setCurrentQuestion(0);
    setSelectedPersonalities([]);
    setHoveredBg(null);
    setQuizComplete(false);
  }, []);

  const results = quizComplete ? calculateResults(selectedPersonalities) : null;
  const primaryResult = results?.[0];

  return (
    <>
      {/* Background image layer */}
      <div
        className="bg-layer"
        style={{
          backgroundImage: `url(${activeBg})`,
          opacity: showImage ? 1 : 0,
        }}
      />

      {/* Dark overlay for readability when image is showing */}
      <div className="bg-overlay" style={{ opacity: showImage ? 1 : 0 }} />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center px-4 py-12 sm:py-16">
        {/* Header */}
        <header className="text-center mb-10 sm:mb-14">
          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3"
            style={{
              fontFamily: "Lora, serif",
              color: showImage ? "#f5f0e8" : "var(--color-dark-brown)",
              textShadow: showImage ? "0 2px 12px rgba(0,0,0,0.4)" : "none",
              transition: "color 0.6s ease, text-shadow 0.6s ease",
            }}
          >
            Coffee Personality Quiz
          </h1>
          <p
            className="text-lg sm:text-xl font-light"
            style={{
              color: showImage
                ? "rgba(245,240,232,0.85)"
                : "var(--color-text-light)",
              transition: "color 0.6s ease",
            }}
          >
            Discover your coffee identity at Basecamp
          </p>
        </header>

        {/* Quiz body */}
        <main className="w-full max-w-2xl">
          {!quizComplete ? (
            <>
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span
                    className="text-sm font-medium"
                    style={{
                      color: showImage
                        ? "rgba(245,240,232,0.8)"
                        : "var(--color-text-light)",
                      transition: "color 0.6s ease",
                    }}
                  >
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                </div>
                <div className="progress-bar-track h-2">
                  <div
                    className="progress-bar-fill"
                    style={{
                      width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Question */}
              <h2
                className="font-serif text-2xl sm:text-3xl font-semibold mb-8 leading-snug"
                style={{
                  fontFamily: "Lora, serif",
                  color: showImage ? "#f5f0e8" : "var(--color-dark-brown)",
                  textShadow: showImage
                    ? "0 1px 8px rgba(0,0,0,0.35)"
                    : "none",
                  transition: "color 0.6s ease, text-shadow 0.6s ease",
                }}
              >
                {questions[currentQuestion].question}
              </h2>

              {/* Answer options */}
              <div
                className="flex flex-col gap-3"
                onMouseLeave={() => setHoveredBg(null)}
              >
                {questions[currentQuestion].answers.map((answer, i) => (
                  <button
                    key={i}
                    className="answer-option"
                    onMouseEnter={() => setHoveredBg(answer.backgroundImage)}
                    onClick={() => handleAnswer(answer)}
                  >
                    {answer.text}
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* Results */
            results &&
            primaryResult && (
              <div className="result-card p-8 sm:p-10 shadow-xl">
                <h2
                  className="font-serif text-3xl sm:text-4xl font-bold mb-2 text-center"
                  style={{
                    fontFamily: "Lora, serif",
                    color: "var(--color-dark-brown)",
                  }}
                >
                  You are a {primaryResult.name}
                </h2>
                <p
                  className="text-center text-lg mb-1 italic"
                  style={{ color: "var(--color-accent)" }}
                >
                  &ldquo;{personalities[primaryResult.name].tagline}&rdquo;
                </p>
                <p
                  className="text-center mb-8"
                  style={{ color: "var(--color-text-light)" }}
                >
                  {personalities[primaryResult.name].description}
                </p>

                {/* Your recommended drinks */}
                <div
                  className="text-center mb-8 py-5 px-6 rounded-xl"
                  style={{ backgroundColor: "rgba(139,111,71,0.1)" }}
                >
                  <p
                    className="text-sm font-medium uppercase tracking-wider mb-3"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Your Basecamp Drinks
                  </p>
                  <p
                    className="font-serif text-2xl font-semibold mb-3"
                    style={{
                      fontFamily: "Lora, serif",
                      color: "var(--color-dark-brown)",
                    }}
                  >
                    {personalities[primaryResult.name].coffee}
                  </p>
                  <div className="flex flex-col gap-1">
                    <p
                      className="text-sm"
                      style={{ color: "var(--color-text-light)" }}
                    >
                      Also try:{" "}
                      <span className="font-medium">
                        {personalities[primaryResult.name].alsoTry}
                      </span>
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "var(--color-text-light)" }}
                    >
                      Seasonal pick:{" "}
                      <span className="font-medium">
                        {personalities[primaryResult.name].seasonal}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Full breakdown */}
                <div className="mb-8">
                  <h3
                    className="font-serif text-xl font-semibold mb-4"
                    style={{
                      fontFamily: "Lora, serif",
                      color: "var(--color-dark-brown)",
                    }}
                  >
                    Your Full Personality Breakdown
                  </h3>
                  <div className="flex flex-col gap-4">
                    {results.map((result) => (
                      <div key={result.name}>
                        <div className="flex justify-between items-baseline mb-1">
                          <span
                            className="font-medium"
                            style={{
                              color:
                                result.name === primaryResult.name
                                  ? "var(--color-dark-brown)"
                                  : "var(--color-text-light)",
                            }}
                          >
                            {result.name}
                          </span>
                          <span
                            className="text-sm"
                            style={{ color: "var(--color-text-light)" }}
                          >
                            {result.percentage}%
                          </span>
                        </div>
                        <div className="progress-bar-track h-2.5">
                          <div
                            className="personality-bar"
                            style={{
                              width: `${result.percentage}%`,
                              backgroundColor:
                                result.name === primaryResult.name
                                  ? "var(--color-light-accent)"
                                  : "var(--color-accent)",
                              opacity:
                                result.name === primaryResult.name ? 1 : 0.5,
                            }}
                          />
                        </div>
                        <p
                          className="text-sm mt-1"
                          style={{ color: "var(--color-text-light)" }}
                        >
                          {personalities[result.name].coffee} &mdash; &ldquo;
                          {personalities[result.name].tagline}&rdquo;
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Share prompt */}
                <p
                  className="text-center text-sm mb-6 italic"
                  style={{ color: "var(--color-text-light)" }}
                >
                  Know someone who&apos;d love this? Share your coffee
                  personality with a friend.
                </p>

                {/* Retake button */}
                <div className="text-center">
                  <button
                    onClick={handleRetake}
                    className="px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 cursor-pointer"
                    style={{
                      backgroundColor: "var(--color-warm-brown)",
                      color: "var(--color-cream)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--color-dark-brown)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(62,39,35,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--color-warm-brown)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    Retake Quiz
                  </button>
                </div>
              </div>
            )
          )}
        </main>
      </div>
    </>
  );
}
