"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function updateImportance(
  caseInquiryId: string,
  importanceId: string
) {
  await prisma.caseInquiry.update({
    where: { id: caseInquiryId },
    data: { importanceId },
  });

  revalidatePath("/case-inquiries");
}

export async function updateFlag(caseInquiryId: string, flagId: string | null) {
  await prisma.caseInquiry.update({
    where: { id: caseInquiryId },
    data: { flagId },
  });

  revalidatePath("/case-inquiries");
}

export async function updateNotes(caseInquiryId: string, notes: string | null) {
  await prisma.caseInquiry.update({
    where: { id: caseInquiryId },
    data: { notes },
  });

  revalidatePath("/case-inquiries");
}
