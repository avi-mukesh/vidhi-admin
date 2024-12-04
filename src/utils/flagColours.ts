export type CaseInquiryFlagType =
  | "REVIEWED"
  | "FORWARDED_INSIDE"
  | "FORWARDED_OUTSIDE"
  | "NEEDS_MONITORING"
  | "COMPLETED"
  | "DEAD";

export const CaseInquiryFlagColours = {
  REVIEWED: "purple",
  FORWARDED_INSIDE: "pink",
  FORWARDED_OUTSIDE: "blue",
  NEEDS_MONITORING: "orange",
  COMPLETED: "green",
  DEAD: "red",
};

export type StudentCommentFlagType =
  | "REVIEWED"
  | "RECRUITED"
  | "MORE_INFORMATION"
  | "NEEDS_MONITORING"
  | "DEAD";

export const StudentCommentFlagColours = {
  REVIEWED: "purple",
  RECRUITED: "pink",
  MORE_INFORMATION: "blue",
  NEEDS_MONITORING: "orange",
  DEAD: "red",
};
