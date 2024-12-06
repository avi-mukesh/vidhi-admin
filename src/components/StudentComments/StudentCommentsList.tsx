import React from "react";
import { StudentComment } from "@prisma/client";
import StudentCommentNotes from "./StudentCommentNotes";
import { getStudentCommentFlags } from "@/lib/student-comments/data";
import StudentCommentFlagSelect from "./StudentCommentFlagSelect";
import {
  // StudentCommentFlagColours,
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
    <table className="mx-auto">
      <thead>
        <tr className="border-2">
          <th>Text</th>
          <th>Flag</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {studentComments.map((studentComment) => {
          const flagId = studentComment.flagId as StudentCommentFlagType;

          let bgClass = "";
          switch (flagId) {
            case "MORE_INFORMATION":
              bgClass = "bg-blue-300";
              break;
            case "DEAD":
              bgClass = "bg-red-300";
              break;
            case "RECRUITED":
              bgClass = "bg-pink-300";
              break;
            case "NEEDS_MONITORING":
              bgClass = "bg-orange-300";
              break;
            case "REVIEWED":
              bgClass = "bg-purple-300";
              break;
            default:
              bgClass = "bg-gray-300";
          }

          return (
            <tr key={studentComment.id} className={bgClass}>
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
