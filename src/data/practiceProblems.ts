import { PracticeProblem } from "../types";
import { PRACTICE_PROBLEMS_G10 } from "./practiceProblemsG10";
import { PRACTICE_PROBLEMS_G11 } from "./practiceProblemsG11";
import { PRACTICE_PROBLEMS_G12 } from "./practiceProblemsG12";

export { PRACTICE_PROBLEMS_G10, PRACTICE_PROBLEMS_G11, PRACTICE_PROBLEMS_G12 };

export const PRACTICE_PROBLEMS: PracticeProblem[] = [
  ...PRACTICE_PROBLEMS_G10,
  ...PRACTICE_PROBLEMS_G11,
  ...PRACTICE_PROBLEMS_G12,
];
