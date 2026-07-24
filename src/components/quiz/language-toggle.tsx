import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { GlobeIcon } from "lucide-react";

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      className="gap-1.5 text-muted-foreground"
    >
      <GlobeIcon className="size-4" />
      {i18n.language === "ru" ? "EN" : "RU"}
    </Button>
  );
}
