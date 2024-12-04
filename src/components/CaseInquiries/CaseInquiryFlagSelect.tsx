"use client";

import React from "react";
import { toast } from "react-hot-toast";
import { updateFlag } from "@/lib/case-inquiries/actions";
import { CaseInquiry, CaseInquiryFlag } from "@prisma/client";

type PropsType = {
  caseInquiry: CaseInquiry;
  caseInquiryFlags: CaseInquiryFlag[];
};

const CaseInquiryFlagSelect = ({
  caseInquiry,
  caseInquiryFlags,
}: PropsType) => {
  return (
    <select
      defaultValue={caseInquiry.flagId ?? ""}
      onChange={(e) => {
        const newFlagId = e.target.value;
        updateFlag(caseInquiry.id, newFlagId.length > 0 ? newFlagId : null)
          .then(() => toast.success("Updated inquiry flag"))
          .catch(() => toast.error("Failed to update inquiry flag"));
      }}
    >
      <option>No flag</option>
      {caseInquiryFlags.map((flag) => (
        <option key={flag.id} value={flag.id}>
          {flag.id}
        </option>
      ))}
    </select>
  );
};

export default CaseInquiryFlagSelect;
