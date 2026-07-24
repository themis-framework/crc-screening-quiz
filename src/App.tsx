import { useState, useCallback } from "react";
import { WelcomeScreen } from "@/components/quiz/welcome-screen";
import { QuestionScreen } from "@/components/quiz/question-screen";
import { ResultsScreen } from "@/components/quiz/results-screen";
import { Toaster } from "@/components/ui/sonner";
import {
  type QuizAnswers,
  type RiskCategory,
  calculateRisk,
  getVisibleQuestions,
} from "@/lib/quiz-logic";

type Screen = "welcome" | "quiz" | "results";

export default function App() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [risk, setRisk] = useState<RiskCategory>("medium");

  const visibleQuestions = getVisibleQuestions(answers);
  const safeIndex = Math.min(questionIndex, visibleQuestions.length - 1);
  const currentQuestion = visibleQuestions[safeIndex];

  const handleStart = useCallback(() => {
    setScreen("quiz");
    setQuestionIndex(0);
  }, []);

  const handleAnswer = useCallback(
    (key: string, value: string) => {
      setAnswers((prev) => {
        const next = { ...prev, [key]: value };
        if (key === "familyHistory" && value === "no") {
          delete next.familyCount;
        }
        if (key === "colonoscopy" && value === "no") {
          delete next.polyps;
        }
        return next;
      });
    },
    []
  );

  const handleNext = useCallback(() => {
    if (safeIndex >= visibleQuestions.length - 1) {
      setRisk(calculateRisk(answers));
      setScreen("results");
    } else {
      setQuestionIndex(safeIndex + 1);
    }
  }, [safeIndex, visibleQuestions.length, answers]);

  const handleBack = useCallback(() => {
    if (safeIndex === 0) {
      setScreen("welcome");
    } else {
      setQuestionIndex(safeIndex - 1);
    }
  }, [safeIndex]);

  const handleRestart = useCallback(() => {
    setAnswers({});
    setQuestionIndex(0);
    setScreen("welcome");
  }, []);

  if (screen === "welcome") {
    return (
      <>
        <WelcomeScreen onStart={handleStart} />
        <Toaster />
      </>
    );
  }

  if (screen === "results") {
    return (
      <>
        <ResultsScreen risk={risk} onRestart={handleRestart} />
        <Toaster />
      </>
    );
  }

  return (
    <>
      <QuestionScreen
        questionKey={currentQuestion}
        currentIndex={safeIndex}
        totalQuestions={visibleQuestions.length}
        answers={answers}
        onAnswer={handleAnswer}
        onNext={handleNext}
        onBack={handleBack}
        isLast={safeIndex >= visibleQuestions.length - 1}
      />
      <Toaster />
    </>
  );
}
