import { PracticeProblem } from "../types";
import { PRACTICE_PROBLEMS_G10_PART1 } from "./practiceProblemsG10_Part1";
import { PRACTICE_PROBLEMS_G10_PART2 } from "./practiceProblemsG10_Part2";
import { PRACTICE_PROBLEMS_G10_PART3 } from "./practiceProblemsG10_Part3";

export const PRACTICE_PROBLEMS_G10: PracticeProblem[] = [
  ...PRACTICE_PROBLEMS_G10_PART1,
  ...PRACTICE_PROBLEMS_G10_PART2,
  ...PRACTICE_PROBLEMS_G10_PART3,
];
