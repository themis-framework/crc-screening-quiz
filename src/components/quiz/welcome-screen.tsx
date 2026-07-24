import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "./language-toggle";
import { ArrowRightIcon, CircleCheckIcon, ShieldCheckIcon } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

// Фрагменты вида **текст** в строках фактов выделяются акцентным начертанием
function Highlighted({ text }: { text: string }) {
  return (
    <span>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-primary">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </span>
  );
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const { t } = useTranslation();
  const facts = t("quiz.facts", { returnObjects: true }) as unknown as string[];

  return (
    <div className="flex min-h-svh flex-col bg-background">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col">
        <div className="flex justify-end p-4">
          <LanguageToggle />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center px-6 pb-12">
          <div className="mb-8 flex size-20 items-center justify-center rounded-2xl bg-primary/10">
            <ShieldCheckIcon className="size-10 text-primary" />
          </div>
          <h1 className="mb-3 text-center text-3xl font-semibold tracking-tight text-foreground">
            {t("quiz.title")}
          </h1>
          <p className="mb-8 max-w-xs text-center text-base font-light text-muted-foreground">
            {t("quiz.subtitle")}
          </p>
          <div className="mb-8 w-full rounded-xl border border-border bg-card p-4">
            <h2 className="mb-3 text-sm font-semibold text-card-foreground">
              {t("quiz.factsTitle")}
            </h2>
            <ul className="flex flex-col gap-2.5">
              {facts.map((fact, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm font-light text-muted-foreground"
                >
                  <CircleCheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                  <Highlighted text={fact} />
                </li>
              ))}
            </ul>
          </div>
          <Button size="lg" onClick={onStart} className="w-full max-w-xs gap-2">
            {t("quiz.start")}
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </div>
  );
}
