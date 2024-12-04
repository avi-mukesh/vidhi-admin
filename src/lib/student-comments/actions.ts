"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function updateFlag(
  studentCommentId: string,
  flagId: string | null
) {
  await prisma.studentComment.update({
    where: { id: studentCommentId },
    data: { flagId },
  });

  revalidatePath("/student-comments");
}

export async function updateNotes(
  studentCommentId: string,
  notes: string | null
) {
  await prisma.studentComment.update({
    where: { id: studentCommentId },
    data: { notes },
  });

  revalidatePath("/student-comments");
}
