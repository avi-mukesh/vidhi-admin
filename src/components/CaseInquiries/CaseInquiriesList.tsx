import React from "react";
import { CaseInquiry } from "@prisma/client";
import CaseInquiryNotes from "./CaseInquiryNotes";
import CaseInquiryImportanceSelect from "./CaseInquiryImportanceSelect";
import { getImportances } from "@/lib/data";
import { getCaseInquiryFlags } from "@/lib/case-inquiries/data";
import CaseInquiryFlagSelect from "./CaseInquiryFlagSelect";
import {
  CaseInquiryFlagColours,
  CaseInquiryFlagType,
} from "@/utils/flagColours";

type PropsType = {
  caseInquiries: CaseInquiry[];
};

const CaseInquiriesList = async ({ caseInquiries }: PropsType) => {
  const importances = await getImportances();
  const caseInquiryFlags = await getCaseInquiryFlags();

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone/email</th>
          <th>Inquiry</th>
          <th>Importance</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {caseInquiries.map((caseInquiry) => {
          let rowClass = "";
          const flagId = caseInquiry.flagId as CaseInquiryFlagType;
          if (caseInquiry.flagId) {
            const colour = CaseInquiryFlagColours[flagId];
            rowClass = `bg-${colour}-300`;
          }
          rowClass = `${rowClass} p-4`;

          return (
            <tr key={caseInquiry.id} className={rowClass}>
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
