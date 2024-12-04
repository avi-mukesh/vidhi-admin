"use client";
import React from "react";
import { toast } from "react-hot-toast";
import { updateImportance } from "@/lib/case-inquiries/actions";
import { CaseInquiry, Importance } from "@prisma/client";

type PropsType = {
  caseInquiry: CaseInquiry;
  importances: Importance[];
};

const CaseInquiryImportanceSelect = ({
  caseInquiry,
  importances,
}: PropsType) => {
  return (
    <select
      defaultValue={caseInquiry.importanceId!}
      onChange={(e) =>
        updateImportance(caseInquiry.id, e.target.value)
          .then(() => toast.success("Updated inquiry importance"))
          .catch(() => toast.error("Failed to update inquiry importance"))
      }
    >
      {importances.map((importance) => (
        <option key={importance.id}>{importance.id}</option>
      ))}
    </select>
  );
};

export default CaseInquiryImportanceSelect;
