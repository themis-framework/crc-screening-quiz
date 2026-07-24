import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LanguageToggle } from "./language-toggle";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import stethoscopeImg from "@/static/stetoscope.png";
import type { QuizAnswers, AgeRange, YesNo } from "@/lib/quiz-logic";

interface QuestionScreenProps {
  questionKey: string;
  currentIndex: number;
  totalQuestions: number;
  answers: QuizAnswers;
  onAnswer: (key: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
  isLast: boolean;
}

function YesNoQuestion({
  value,
  onChange,
}: {
  value?: YesNo;
  onChange: (v: YesNo) => void;
}) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={() => onChange("yes")}
        className={`flex h-14 items-center justify-center rounded-md border text-base font-medium transition-all ${
          value === "yes"
            ? "border-primary bg-primary/10 text-primary"
            : "border-border bg-card text-foreground hover:border-primary/50"
        }`}
      >
        {t("quiz.yes")}
      </button>
      <button
        type="button"
        onClick={() => onChange("no")}
        className={`flex h-14 items-center justify-center rounded-md border text-base font-medium transition-all ${
          value === "no"
            ? "border-primary bg-primary/10 text-primary"
            : "border-border bg-card text-foreground hover:border-primary/50"
        }`}
      >
        {t("quiz.no")}
      </button>
    </div>
  );
}

function AgeQuestion({
  value,
  onChange,
}: {
  value?: AgeRange;
  onChange: (v: AgeRange) => void;
}) {
  const { t } = useTranslation();
  const options: { key: AgeRange; label: string }[] = [
    { key: "under50", label: t("questions.age.under50") },
    { key: "50to64", label: t("questions.age.50to64") },
    { key: "65to75", label: t("questions.age.65to75") },
    { key: "over75", label: t("questions.age.over75") },
  ];

  return (
    <div className="flex flex-col gap-3">
      {options.map((opt) => (
        <button
          key={opt.key}
          type="button"
          onClick={() => onChange(opt.key)}
          className={`flex h-14 items-center justify-center rounded-md border text-base font-medium transition-all ${
            value === opt.key
              ? "border-primary bg-primary/10 text-primary"
              : "border-border bg-card text-foreground hover:border-primary/50"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export function QuestionScreen({
  questionKey,
  currentIndex,
  totalQuestions,
  answers,
  onAnswer,
  onNext,
  onBack,
  isLast,
}: QuestionScreenProps) {
  const { t } = useTranslation();
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  const currentValue = answers[questionKey as keyof QuizAnswers];
  const hasAnswer = currentValue !== undefined;

  return (
    <div className="flex min-h-svh flex-col bg-background">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col">
        <div className="flex items-center justify-between p-4">
          <Button variant="ghost" size="icon-sm" onClick={onBack}>
            <ArrowLeftIcon />
          </Button>
          <span className="text-sm text-muted-foreground">
            {t("quiz.questionOf", {
              current: currentIndex + 1,
              total: totalQuestions,
            })}
          </span>
          <LanguageToggle />
        </div>

        <div className="px-6">
          <Progress value={progress} className="h-1.5" />
        </div>

        <div className="flex flex-1 flex-col justify-start px-6 pt-10 pb-6">
          <div className="mb-8 text-center">
            <img
              src={stethoscopeImg}
              alt=""
              className="mx-auto mb-4 w-24 mix-blend-multiply"
            />
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">
              {t(`questions.${questionKey}.title`)}
            </h2>
            <p className="text-sm font-light text-muted-foreground">
              {t(`questions.${questionKey}.subtitle`)}
            </p>
          </div>

          <div className="mb-8">
            {questionKey === "age" ? (
              <AgeQuestion
                value={answers.age}
                onChange={(v) => onAnswer("age", v)}
              />
            ) : (
              <YesNoQuestion
                value={currentValue as YesNo | undefined}
                onChange={(v) => onAnswer(questionKey, v)}
              />
            )}
          </div>

          <Button
            size="lg"
            onClick={onNext}
            disabled={!hasAnswer}
            className="w-full gap-2"
          >
            {isLast ? t("quiz.seeResults") : t("quiz.next")}
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </div>
  );
}
