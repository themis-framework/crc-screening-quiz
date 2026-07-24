import { useTranslation } from "react-i18next";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas-pro";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { LanguageToggle } from "./language-toggle";
import {
  AtSignIcon,
  DownloadIcon,
  FileTextIcon,
  GlobeIcon,
  RotateCcwIcon,
  ShieldAlertIcon,
  ShieldCheckIcon,
} from "lucide-react";
import type { RiskCategory } from "@/lib/quiz-logic";
import { downloadPrepPdf } from "@/lib/prep-pdf";
import { trackGoal } from "@/lib/analytics";

const DOCTOR_INSTAGRAM_URL = "https://www.instagram.com/1onko_spb/";
const CLINIC_WEBSITE_URL = "https://onkoklinik.ru/";

interface ResultsScreenProps {
  risk: RiskCategory;
  onRestart: () => void;
}

const riskConfig: Record<
  RiskCategory,
  {
    icon: typeof ShieldCheckIcon;
    badgeClass: string;
    iconContainerClass: string;
    iconClass: string;
  }
> = {
  low: {
    icon: ShieldCheckIcon,
    badgeClass:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200",
    iconContainerClass: "bg-emerald-100 dark:bg-emerald-900/50",
    iconClass: "text-emerald-600 dark:text-emerald-400",
  },
  high: {
    icon: ShieldAlertIcon,
    badgeClass:
      "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200",
    iconContainerClass: "bg-amber-100 dark:bg-amber-900/50",
    iconClass: "text-amber-600 dark:text-amber-400",
  },
};

const riskColors: Record<RiskCategory, string> = {
  low: "#059669",
  high: "#d97706",
};

function buildPdfHtml(
  risk: RiskCategory,
  t: (key: string, options?: Record<string, unknown>) => string
): string {
  const items = t(`results.checklist.${risk}`, {
    returnObjects: true,
  }) as unknown as string[];
  const riskLabel = t(`results.${risk}`);
  const color = riskColors[risk];

  const rows = items
    .map(
      (item) =>
        `<div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;">
          <div style="width:13px;height:13px;border:1.5px solid #cbd5e1;border-radius:3px;margin-top:2px;flex-shrink:0;"></div>
          <span style="font-size:12px;color:#334155;">${item}</span>
        </div>`
    )
    .join("");

  return `<div style="width:500px;font-family:Inter,system-ui,sans-serif;color:#1e293b;padding:0;background:#fff;">
    <div style="border-bottom:1px solid #e2e8f0;padding-bottom:16px;margin-bottom:20px;">
      <div style="font-size:18px;font-weight:600;letter-spacing:-0.3px;margin-bottom:6px;">${t("quiz.title")}</div>
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="color:#64748b;font-size:11px;">${t("results.riskLevel")}:</span>
        <span style="display:inline-block;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:500;background:${color}1a;color:${color};border:1px solid ${color}40;">${riskLabel}</span>
      </div>
    </div>
    <div style="font-size:11px;color:#475569;margin-bottom:20px;line-height:1.6;">${t(`results.${risk}Desc`)}</div>
    <div style="font-size:13px;font-weight:600;margin-bottom:12px;">${t("results.recommendations")}</div>
    <div>${rows}</div>
    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #e2e8f0;font-size:10px;color:#94a3b8;">${new Date().toLocaleDateString()}</div>
  </div>`;
}

export function ResultsScreen({ risk, onRestart }: ResultsScreenProps) {
  const { t } = useTranslation();
  const config = riskConfig[risk];
  const Icon = config.icon;

  const checklist = t(`results.checklist.${risk}`, {
    returnObjects: true,
  }) as unknown as string[];

  const handleDownload = async () => {
    trackGoal("checklist_download", { risk });
    const container = document.createElement("div");
    container.style.position = "absolute";
    container.style.left = "-9999px";
    container.style.top = "0";
    container.style.background = "#fff";
    container.innerHTML = buildPdfHtml(risk, t);
    document.body.appendChild(container);

    try {
      const canvas = await html2canvas(container.firstElementChild as HTMLElement, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const doc = new jsPDF({ unit: "pt", format: "a4" });
      const pageW = doc.internal.pageSize.getWidth();
      const margin = 48;
      const availW = pageW - margin * 2;
      const imgH = (canvas.height / canvas.width) * availW;

      doc.addImage(imgData, "PNG", margin, margin, availW, imgH);
      doc.save("screening-checklist.pdf");
    } finally {
      document.body.removeChild(container);
    }
  };

  return (
    <div className="flex min-h-svh flex-col bg-background">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col">
        <div className="flex justify-end p-4">
          <LanguageToggle />
        </div>

        <div className="flex flex-1 flex-col px-6 pb-8">
          <div className="mb-6 flex flex-col items-center">
            <div
              className={`mb-4 flex size-16 items-center justify-center rounded-2xl ${config.iconContainerClass}`}
            >
              <Icon className={`size-8 ${config.iconClass}`} />
            </div>
            <h1 className="mb-3 text-2xl font-semibold tracking-tight text-foreground">
              {t("results.title")}
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {t("results.riskLevel")}:
              </span>
              <Badge className={config.badgeClass}>{t(`results.${risk}`)}</Badge>
            </div>
          </div>

          <p className="mb-6 text-center text-sm font-light text-muted-foreground">
            {t(`results.${risk}Desc`)}
          </p>

          <div className="mb-6 rounded-xl border border-border bg-card p-4">
            <h3 className="mb-4 text-base font-semibold text-card-foreground">
              {t("results.recommendations")}
            </h3>
            <div className="flex flex-col gap-3">
              {checklist.map((item, i) => (
                <label
                  key={i}
                  className="flex items-start gap-3 text-sm text-card-foreground"
                >
                  <Checkbox className="mt-0.5 shrink-0" />
                  <span className="font-light">{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
            <h3 className="mb-1 text-base font-semibold text-card-foreground">
              {t("results.doctor.title")}
            </h3>
            <p className="mb-4 text-sm font-light text-muted-foreground">
              {t("results.doctor.description")}
            </p>
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="w-full gap-2" asChild>
                <a
                  href={DOCTOR_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackGoal("instagram_click")}
                >
                  <AtSignIcon data-icon="inline-start" />
                  {t("results.doctor.instagram")}
                </a>
              </Button>
              <Button variant="outline" className="w-full gap-2" asChild>
                <a
                  href={CLINIC_WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackGoal("website_click")}
                >
                  <GlobeIcon data-icon="inline-start" />
                  {t("results.doctor.website")}
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-3">
            <Button size="lg" onClick={handleDownload} className="w-full gap-2">
              <DownloadIcon data-icon="inline-start" />
              {t("results.download")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                trackGoal("prep_download", { risk });
                downloadPrepPdf();
              }}
              className="w-full gap-2"
            >
              <FileTextIcon data-icon="inline-start" />
              {t("results.downloadPrep")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onRestart}
              className="w-full gap-2"
            >
              <RotateCcwIcon data-icon="inline-start" />
              {t("results.restart")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
