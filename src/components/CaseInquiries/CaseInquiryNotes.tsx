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
    <div className="flex flex-col gap-1">
      <textarea
        className="min-w-[250px] min-h-[80px]"
        value={notes ?? ""}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button
        className="self-end bg-slate-100 p-1"
        onClick={() =>
          updateNotes(caseInquiry.id, notes)
            .then(() => toast.success("Note saved"))
            .catch(() => toast.error("Failed to save note"))
        }
      >
        Save note
      </button>
    </div>
  );
};

export default CaseInquiryNotes;
