import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "./language-toggle";
import { ArrowRightIcon, ShieldCheckIcon } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const { t } = useTranslation();

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
          <p className="mb-10 max-w-xs text-center text-base font-light text-muted-foreground">
            {t("quiz.subtitle")}
          </p>
          <Button size="lg" onClick={onStart} className="w-full max-w-xs gap-2">
            {t("quiz.start")}
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </div>
  );
}
