"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { StudentComment } from "@prisma/client";
import { updateNotes } from "@/lib/student-comments/actions";

type PropsType = {
  studentComment: StudentComment;
};

const StudentCommentNotes = ({ studentComment }: PropsType) => {
  const [notes, setNotes] = useState(studentComment.notes);

  return (
    <>
      <textarea
        value={notes ?? ""}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button
        onClick={() =>
          updateNotes(studentComment.id, notes)
            .then(() => toast.success("Note saved"))
            .catch(() => toast.error("Failed to save note"))
        }
      >
        Save
      </button>
    </>
  );
};

export default StudentCommentNotes;
