import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ru: {
    translation: {
      quiz: {
        title: "Скрининг колоректального рака",
        subtitle: "Пройдите короткий опрос для оценки риска",
        start: "Начать",
        next: "Далее",
        back: "Назад",
        seeResults: "Узнать результат",
        yes: "Да",
        no: "Нет",
        questionOf: "Вопрос {{current}} из {{total}}",
      },
      questions: {
        age: {
          title: "Сколько вам лет?",
          subtitle: "Укажите ваш возраст",
          under40: "Младше 40",
          "40to50": "40-50",
          "50to60": "50-60",
          over60: "Старше 60",
        },
        constipation: {
          title: "Страдаете ли вы запорами?",
          subtitle: "Регулярные проблемы со стулом",
        },
        blood: {
          title: "Есть ли кровь в стуле?",
          subtitle: "Наличие крови при дефекации",
        },
        familyHistory: {
          title: "Есть ли ближайшие родственники с колоректальным раком до 50 лет?",
          subtitle: "Родители, братья, сестры, дети",
        },
        familyCount: {
          title: "Сколько родственников с колоректальным раком?",
          subtitle: "Укажите количество",
          twoOrLess: "2 или менее",
          moreThanTwo: "Более 2",
        },
        colonoscopy: {
          title: "Проходили ли вы колоноскопию?",
          subtitle: "Диагностическое обследование кишечника",
        },
        polyps: {
          title: "Были ли обнаружены полипы?",
          subtitle: "Полипы при предыдущих обследованиях",
        },
        otherCancer: {
          title: "Есть ли у вас другие злокачественные опухоли?",
          subtitle: "Диагностированные онкологические заболевания",
        },
      },
      results: {
        title: "Результаты скрининга",
        riskLevel: "Уровень риска",
        recommendations: "Рекомендации",
        download: "Скачать чек-лист",
        restart: "Пройти заново",
        medium: "Средний",
        intermediate: "Промежуточный",
        high: "Высокий",
        mediumDesc:
          "Ваш риск находится в пределах нормы. Рекомендуется стандартный скрининг.",
        intermediateDesc:
          "У вас выявлены факторы риска. Рекомендуется расширенное обследование.",
        highDesc:
          "Выявлены значительные факторы риска. Необходима консультация специалиста.",
        checklist: {
          medium: [
            "Ежегодный анализ кала на скрытую кровь",
            "Колоноскопия каждые 10 лет после 50 лет",
            "Поддержание здорового питания с высоким содержанием клетчатки",
            "Регулярная физическая активность",
            "Контроль массы тела",
          ],
          intermediate: [
            "Консультация гастроэнтеролога в ближайшие 3 месяца",
            "Колоноскопия каждые 3-5 лет",
            "Ежегодный анализ кала на скрытую кровь",
            "Генетическое тестирование при семейной истории",
            "Регулярное наблюдение у онколога",
            "Диета с ограничением красного мяса и переработанных продуктов",
          ],
          high: [
            "Срочная консультация онколога-проктолога",
            "Колоноскопия в ближайший месяц",
            "КТ-колонография при необходимости",
            "Генетическое консультирование",
            "Ежегодный мониторинг опухолевых маркеров",
            "Расширенное обследование желудочно-кишечного тракта",
            "Составление индивидуального плана наблюдения",
          ],
        },
        followUp: {
          title: "Напомнить об этих рекомендациях?",
          description:
            "Мы напишем вам через несколько недель в Telegram и спросим, удалось ли выполнить рекомендации выше. Это помогает нам понять, насколько скрининг реально влияет на здоровье людей.",
          cta: "Подключить напоминание в Telegram",
          toast:
            "Пока это макет: по клику откроется Telegram-бот, который через 2-4 недели спросит, выполнили ли вы рекомендации.",
        },
      },
      language: "Язык",
    },
  },
  en: {
    translation: {
      quiz: {
        title: "Colorectal Cancer Screening",
        subtitle: "Take a short survey to assess your risk",
        start: "Start",
        next: "Next",
        back: "Back",
        seeResults: "See Results",
        yes: "Yes",
        no: "No",
        questionOf: "Question {{current}} of {{total}}",
      },
      questions: {
        age: {
          title: "How old are you?",
          subtitle: "Select your age range",
          under40: "Under 40",
          "40to50": "40-50",
          "50to60": "50-60",
          over60: "Over 60",
        },
        constipation: {
          title: "Do you suffer from constipation?",
          subtitle: "Regular bowel problems",
        },
        blood: {
          title: "Is there blood in your stool?",
          subtitle: "Presence of blood during bowel movements",
        },
        familyHistory: {
          title:
            "Do you have close relatives with colorectal cancer before age 50?",
          subtitle: "Parents, siblings, children",
        },
        familyCount: {
          title: "How many relatives with colorectal cancer?",
          subtitle: "Select the number",
          twoOrLess: "2 or fewer",
          moreThanTwo: "More than 2",
        },
        colonoscopy: {
          title: "Have you had a colonoscopy?",
          subtitle: "Diagnostic bowel examination",
        },
        polyps: {
          title: "Were polyps found?",
          subtitle: "Polyps during previous examinations",
        },
        otherCancer: {
          title: "Do you have other malignant tumors?",
          subtitle: "Diagnosed oncological diseases",
        },
      },
      results: {
        title: "Screening Results",
        riskLevel: "Risk Level",
        recommendations: "Recommendations",
        download: "Download Checklist",
        restart: "Start Over",
        medium: "Medium",
        intermediate: "Intermediate",
        high: "High",
        mediumDesc:
          "Your risk is within normal range. Standard screening is recommended.",
        intermediateDesc:
          "Risk factors have been identified. Extended examination is recommended.",
        highDesc:
          "Significant risk factors identified. Specialist consultation is required.",
        checklist: {
          medium: [
            "Annual fecal occult blood test",
            "Colonoscopy every 10 years after age 50",
            "Maintain a high-fiber diet",
            "Regular physical activity",
            "Body weight management",
          ],
          intermediate: [
            "Gastroenterologist consultation within 3 months",
            "Colonoscopy every 3-5 years",
            "Annual fecal occult blood test",
            "Genetic testing if family history present",
            "Regular oncologist follow-up",
            "Diet limiting red and processed meat",
          ],
          high: [
            "Urgent oncologist-proctologist consultation",
            "Colonoscopy within the next month",
            "CT colonography if needed",
            "Genetic counseling",
            "Annual tumor marker monitoring",
            "Extended gastrointestinal examination",
            "Individual follow-up plan development",
          ],
        },
        followUp: {
          title: "Get a reminder about these recommendations?",
          description:
            "We'll message you in Telegram in a few weeks to check whether you followed the recommendations above. This helps us understand how much the screening actually changes people's behavior.",
          cta: "Connect a Telegram reminder",
          toast:
            "This is just a mockup: clicking would open a Telegram bot that checks in with you in 2-4 weeks about whether you followed through.",
        },
      },
      language: "Language",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
