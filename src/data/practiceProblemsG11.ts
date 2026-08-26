import { PracticeProblem } from "../types";
import { PRACTICE_PROBLEMS_G11_PART1 } from "./practiceProblemsG11_Part1";
import { PRACTICE_PROBLEMS_G11_PART2 } from "./practiceProblemsG11_Part2";
import { PRACTICE_PROBLEMS_G11_PART3 } from "./practiceProblemsG11_Part3";

/**
 * GRADE 11 FULL DATASET - SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * 9 Chapters × (10 Level 2 + 5 Level 3) = 135 Practice Problems
 */
export const PRACTICE_PROBLEMS_G11: PracticeProblem[] = [
  ...PRACTICE_PROBLEMS_G11_PART1,
  ...PRACTICE_PROBLEMS_G11_PART2,
  ...PRACTICE_PROBLEMS_G11_PART3
];
