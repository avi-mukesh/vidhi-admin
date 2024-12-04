import React from "react";
import { StudentComment } from "@prisma/client";
import StudentCommentNotes from "./StudentCommentNotes";
import { getStudentCommentFlags } from "@/lib/student-comments/data";
import StudentCommentFlagSelect from "./StudentCommentFlagSelect";
import {
  StudentCommentFlagColours,
  StudentCommentFlagType,
} from "@/utils/flagColours";

type PropsType = {
  studentComments: StudentComment[];
};

const StudentCommentsList = async ({ studentComments }: PropsType) => {
  const studentCommentFlags = await getStudentCommentFlags();

  if (!studentComments || studentComments.length === 0) {
    return <p>No student comments!</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Text</th>
          <th>Notes</th>
          <th>Flag</th>
        </tr>
      </thead>
      <tbody>
        {studentComments.map((studentComment) => {
          let rowClass = "";
          const flagId = studentComment.flagId as StudentCommentFlagType;
          if (studentComment.flagId) {
            const colour = StudentCommentFlagColours[flagId];
            rowClass = `bg-${colour}-300`;
          }
          rowClass = `${rowClass} p-4`;

          return (
            <tr key={studentComment.id} className={rowClass}>
              <td>{studentComment.text}</td>
              <td>
                <StudentCommentFlagSelect
                  studentComment={studentComment}
                  studentCommentFlags={studentCommentFlags}
                />
              </td>
              <td>
                <StudentCommentNotes studentComment={studentComment} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StudentCommentsList;
