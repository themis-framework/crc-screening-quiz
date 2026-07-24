export type AgeRange = "under40" | "40to50" | "50to60" | "over60";
export type YesNo = "yes" | "no";
export type FamilyCount = "twoOrLess" | "moreThanTwo";
export type RiskCategory = "medium" | "intermediate" | "high";

export interface QuizAnswers {
  age?: AgeRange;
  constipation?: YesNo;
  blood?: YesNo;
  familyHistory?: YesNo;
  familyCount?: FamilyCount;
  colonoscopy?: YesNo;
  polyps?: YesNo;
  otherCancer?: YesNo;
}

export function calculateRisk(answers: QuizAnswers): RiskCategory {
  let score = 0;

  if (answers.age === "50to60") score += 1;
  if (answers.age === "over60") score += 2;

  if (answers.constipation === "yes") score += 1;
  if (answers.blood === "yes") score += 2;

  if (answers.familyHistory === "yes") {
    score += 2;
    if (answers.familyCount === "moreThanTwo") score += 2;
  }

  if (answers.polyps === "yes") score += 2;
  if (answers.otherCancer === "yes") score += 3;

  if (score >= 6) return "high";
  if (score >= 3) return "intermediate";
  return "medium";
}

export function getVisibleQuestions(answers: QuizAnswers): string[] {
  const questions = [
    "age",
    "constipation",
    "blood",
    "familyHistory",
  ];

  if (answers.familyHistory === "yes") {
    questions.push("familyCount");
  }

  questions.push("colonoscopy");

  if (answers.colonoscopy === "yes") {
    questions.push("polyps");
  }

  questions.push("otherCancer");

  return questions;
}
