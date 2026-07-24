export type AgeRange = "under50" | "50to64" | "65to75" | "over75";
export type YesNo = "yes" | "no";
export type RiskCategory = "low" | "high";

export interface QuizAnswers {
  age?: AgeRange;
  blood?: YesNo;
  familyEarly?: YesNo;
  familyMultiple?: YesNo;
  diabetes?: YesNo;
  ibdPolyposis?: YesNo;
}

// Критерии высокого риска по клиническим рекомендациям РФ (2025):
// кровь в стуле; возраст 65-75 лет; родственники с КРР до 50 лет;
// 2+ родственников с КРР / раком тонкой кишки, мочевого пузыря,
// эндометрия, почки; сахарный диабет; ВЗК и полипоз толстой кишки.
// Все остальные - группа низкого риска.
export function calculateRisk(answers: QuizAnswers): RiskCategory {
  const isHigh =
    answers.blood === "yes" ||
    answers.age === "65to75" ||
    answers.familyEarly === "yes" ||
    answers.familyMultiple === "yes" ||
    answers.diabetes === "yes" ||
    answers.ibdPolyposis === "yes";

  return isHigh ? "high" : "low";
}

export function getVisibleQuestions(_answers: QuizAnswers): string[] {
  return [
    "age",
    "blood",
    "familyEarly",
    "familyMultiple",
    "diabetes",
    "ibdPolyposis",
  ];
}
