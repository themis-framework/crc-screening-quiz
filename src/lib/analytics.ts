// Яндекс.Метрика. Счетчик создается на metrika.yandex.ru, его номер
// задается в .env.local: VITE_YM_COUNTER_ID=12345678
// Без заданного номера аналитика полностью отключена (удобно в разработке).
const counterId = Number(import.meta.env.VITE_YM_COUNTER_ID) || 0;

declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: unknown[]) => void;
  }
}

export function initAnalytics(): void {
  if (!counterId || window.ym) return;

  const queue: unknown[][] = [];
  const ym = (...args: unknown[]) => {
    queue.push(args);
  };
  (ym as unknown as { a: unknown[][] }).a = queue;
  (ym as unknown as { l: number }).l = Date.now();
  window.ym = ym as unknown as Window["ym"];

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://mc.yandex.ru/metrika/tag.js";
  document.head.appendChild(script);

  window.ym?.(counterId, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  });
}

// Цели: quiz_start, quiz_complete (параметр risk), checklist_download,
// prep_download, instagram_click, website_click.
// Одноименные цели типа "JavaScript-событие" нужно создать в настройках счетчика.
export function trackGoal(
  goal: string,
  params?: Record<string, unknown>
): void {
  if (!counterId) return;
  window.ym?.(counterId, "reachGoal", goal, params);
}
