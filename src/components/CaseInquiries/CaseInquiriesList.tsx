import React from "react";
import { CaseInquiry } from "@prisma/client";
import CaseInquiryNotes from "./CaseInquiryNotes";
import CaseInquiryImportanceSelect from "./CaseInquiryImportanceSelect";
import { getImportances } from "@/lib/data";
import { getCaseInquiryFlags } from "@/lib/case-inquiries/data";
import CaseInquiryFlagSelect from "./CaseInquiryFlagSelect";
import {
  // CaseInquiryFlagClassColours,
  CaseInquiryFlagType,
} from "@/utils/flagColours";
import clsx from "clsx";

type PropsType = {
  caseInquiries: CaseInquiry[];
};

// const tdClass = "p-1 border";

const CaseInquiriesList = async ({ caseInquiries }: PropsType) => {
  const importances = await getImportances();
  const caseInquiryFlags = await getCaseInquiryFlags();

  return (
    <table className="mx-auto">
      <thead>
        <tr className="border-2">
          <th>Name</th>
          <th>Phone/email</th>
          <th>Inquiry</th>
          <th>Importance</th>
          <th>Flag</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {caseInquiries.map((caseInquiry) => {
          const flagId = caseInquiry.flagId as CaseInquiryFlagType;

          let bgClass = "";
          switch (flagId) {
            case "COMPLETED":
              bgClass = "bg-green-300";
              break;
            case "DEAD":
              bgClass = "bg-red-300";
              break;
            case "FORWARDED_INSIDE":
              bgClass = "bg-pink-300";
              break;
            case "FORWARDED_OUTSIDE":
              bgClass = "bg-blue-300";
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
            <tr
              key={caseInquiry.id}
              className={clsx(`border-1 border-slate-200 ${bgClass}`)}
            >
              <td>{caseInquiry.name}</td>
              <td>{caseInquiry.phoneOrEmail}</td>
              <td>{caseInquiry.inquiry}</td>
              <td>
                <CaseInquiryImportanceSelect
                  caseInquiry={caseInquiry}
                  importances={importances}
                />
              </td>
              <td>
                <CaseInquiryFlagSelect
                  caseInquiry={caseInquiry}
                  caseInquiryFlags={caseInquiryFlags}
                />
              </td>
              <td>
                <CaseInquiryNotes caseInquiry={caseInquiry} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CaseInquiriesList;
