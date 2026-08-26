import { PracticeProblem } from "../types";
import { PRACTICE_PROBLEMS_G12_PART1 } from "./practiceProblemsG12_Part1";
import { PRACTICE_PROBLEMS_G12_PART2 } from "./practiceProblemsG12_Part2";

/**
 * GRADE 12 FULL DATASET - SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * 6 Chapters × (10 Level 2 + 5 Level 3) = 90 Practice Problems
 */
export const PRACTICE_PROBLEMS_G12: PracticeProblem[] = [
  ...PRACTICE_PROBLEMS_G12_PART1,
  ...PRACTICE_PROBLEMS_G12_PART2
];
