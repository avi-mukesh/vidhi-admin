"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { CaseInquiry } from "@prisma/client";
import { updateNotes } from "@/lib/case-inquiries/actions";

type PropsType = {
  caseInquiry: CaseInquiry;
};

const CaseInquiryNotes = ({ caseInquiry }: PropsType) => {
  const [notes, setNotes] = useState(caseInquiry.notes);

  return (
    <>
      <textarea
        value={notes ?? ""}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button
        onClick={() =>
          updateNotes(caseInquiry.id, notes)
            .then(() => toast.success("Note saved"))
            .catch(() => toast.error("Failed to save note"))
        }
      >
        Save
      </button>
    </>
  );
};

export default CaseInquiryNotes;
