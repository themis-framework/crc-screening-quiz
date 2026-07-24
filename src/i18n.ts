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
        factsTitle: "Почему это важно",
        facts: [
          "В РФ колоректальный рак занимает **2-е место** в структуре смертности от злокачественных новообразований, уступая лишь раку легкого",
          "**Менее 20%** случаев колоректального рака выявляется активно",
          "**Около 50%** случаев выявляется на запущенных стадиях (III–IV)",
          "Скрининг позволяет выявить заболевание **на ранней стадии** и снизить смертность",
        ],
      },
      questions: {
        age: {
          title: "Сколько вам лет?",
          subtitle: "Укажите ваш возраст",
          under50: "Младше 50",
          "50to64": "50-64",
          "65to75": "65-75",
          over75: "Старше 75",
        },
        blood: {
          title: "Замечали ли вы кровь в стуле?",
          subtitle: "Наличие крови при дефекации",
        },
        familyEarly: {
          title:
            "Есть ли у вас родственники с колоректальным раком, выявленным до 50 лет?",
          subtitle: "Родители, братья, сестры, дети",
        },
        familyMultiple: {
          title:
            "Есть ли у вас два и более родственников со злокачественными опухолями?",
          subtitle:
            "Колоректальный рак, рак тонкой кишки, мочевого пузыря, эндометрия, почки",
        },
        diabetes: {
          title: "Есть ли у вас сахарный диабет?",
          subtitle: "Диагностированный сахарный диабет",
        },
        ibdPolyposis: {
          title:
            "Есть ли у вас воспалительные заболевания или полипоз толстой кишки?",
          subtitle: "Язвенный колит, болезнь Крона, полипы толстой кишки",
        },
      },
      results: {
        title: "Результаты скрининга",
        riskLevel: "Группа риска",
        recommendations: "Рекомендации",
        download: "Скачать чек-лист",
        downloadPrep: "Памятка подготовки к колоноскопии (PDF)",
        share: "Поделиться",
        shareText: "Короткий опрос для оценки риска колоректального рака",
        linkCopied: "Ссылка скопирована",
        low: "Низкий",
        high: "Высокий",
        lowDesc:
          "Вы относитесь к группе низкого риска колоректального рака. Придерживайтесь стандартной программы скрининга.",
        highDesc:
          "Вы относитесь к группе высокого риска колоректального рака. Это не означает, что заболевание есть или обязательно появится – просто вам важнее проходить обследования регулярно. Обсудите программу скрининга с врачом.",
        checklist: {
          low: [
            "Фекальный иммунохимический тест (ФИТ) – 1 раз в 2 года",
            "При положительном результате теста – выполнение колоноскопии (ФКС)",
          ],
          high: [
            "Фекальный иммунохимический тест (ФИТ) – 1 раз в год",
            "При положительном результате теста – выполнение колоноскопии (ФКС)",
            "Колоноскопия (ФКС) – 1 раз в 5 лет",
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
        doctor: {
          title: "Хотите узнать больше?",
          description:
            "Профилактика, скрининг и ответы на частые вопросы – на страницах онкологического отделения Первого меда.",
          instagram: "Instagram: 1onko_spb",
          website: "Сайт отделения",
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
        factsTitle: "Why it matters",
        facts: [
          "In Russia, colorectal cancer is the **2nd leading cause** of cancer mortality, second only to lung cancer",
          "**Less than 20%** of colorectal cancer cases are detected through active screening",
          "**About 50%** of cases are diagnosed at advanced stages (III–IV)",
          "Screening enables **early detection** and reduces mortality",
        ],
      },
      questions: {
        age: {
          title: "How old are you?",
          subtitle: "Select your age range",
          under50: "Under 50",
          "50to64": "50-64",
          "65to75": "65-75",
          over75: "Over 75",
        },
        blood: {
          title: "Have you noticed blood in your stool?",
          subtitle: "Presence of blood during bowel movements",
        },
        familyEarly: {
          title:
            "Do you have relatives diagnosed with colorectal cancer before age 50?",
          subtitle: "Parents, siblings, children",
        },
        familyMultiple: {
          title: "Do you have two or more relatives with malignant tumors?",
          subtitle:
            "Colorectal, small intestine, bladder, endometrial, or kidney cancer",
        },
        diabetes: {
          title: "Do you have diabetes?",
          subtitle: "Diagnosed diabetes mellitus",
        },
        ibdPolyposis: {
          title:
            "Do you have inflammatory bowel disease or colon polyposis?",
          subtitle: "Ulcerative colitis, Crohn's disease, colon polyps",
        },
      },
      results: {
        title: "Screening Results",
        riskLevel: "Risk Group",
        recommendations: "Recommendations",
        download: "Download Checklist",
        downloadPrep: "Colonoscopy preparation guide (PDF, in Russian)",
        share: "Share",
        shareText: "A short survey to assess colorectal cancer risk",
        linkCopied: "Link copied",
        low: "Low",
        high: "High",
        lowDesc:
          "You are in the low-risk group for colorectal cancer. Follow the standard screening program.",
        highDesc:
          "You are in the high-risk group for colorectal cancer. This does not mean you have or will necessarily develop the disease – it simply means regular screening matters more for you. Discuss a screening plan with your doctor.",
        checklist: {
          low: [
            "Fecal immunochemical test (FIT) – once every 2 years",
            "If the test is positive – colonoscopy",
          ],
          high: [
            "Fecal immunochemical test (FIT) – once a year",
            "If the test is positive – colonoscopy",
            "Colonoscopy – once every 5 years",
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
        doctor: {
          title: "Want to learn more?",
          description:
            "Prevention, screening, and answers to common questions – from the oncology department of Pavlov First Saint Petersburg State Medical University.",
          instagram: "Instagram: 1onko_spb",
          website: "Department website",
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
