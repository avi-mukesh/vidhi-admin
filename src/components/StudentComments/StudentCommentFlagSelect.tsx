"use client";

import React from "react";
import { toast } from "react-hot-toast";
import { updateFlag } from "@/lib/student-comments/actions";
import { StudentComment, StudentCommentFlag } from "@prisma/client";

type PropsType = {
  studentComment: StudentComment;
  studentCommentFlags: StudentCommentFlag[];
};

const StudentCommentFlagSelect = ({
  studentComment,
  studentCommentFlags,
}: PropsType) => {
  return (
    <select
      defaultValue={studentComment.flagId ?? ""}
      onChange={(e) => {
        const newFlagId = e.target.value;
        updateFlag(studentComment.id, newFlagId.length > 0 ? newFlagId : null)
          .then(() => toast.success("Updated student comment flag"))
          .catch(() => toast.error("Failed to update student comment flag"));
      }}
    >
      <option>No flag</option>
      {studentCommentFlags.map((flag) => (
        <option key={flag.id} value={flag.id}>
          {flag.id}
        </option>
      ))}
    </select>
  );
};

export default StudentCommentFlagSelect;
