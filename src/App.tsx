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
import { trackGoal } from "@/lib/analytics";

type Screen = "welcome" | "quiz" | "results";

export default function App() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [risk, setRisk] = useState<RiskCategory>("low");

  const visibleQuestions = getVisibleQuestions(answers);
  const safeIndex = Math.min(questionIndex, visibleQuestions.length - 1);
  const currentQuestion = visibleQuestions[safeIndex];

  const handleStart = useCallback(() => {
    trackGoal("quiz_start");
    setScreen("quiz");
    setQuestionIndex(0);
  }, []);

  const handleAnswer = useCallback((key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleNext = useCallback(() => {
    if (safeIndex >= visibleQuestions.length - 1) {
      const result = calculateRisk(answers);
      trackGoal("quiz_complete", { risk: result });
      setRisk(result);
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
        <ResultsScreen risk={risk} />
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
