import prisma from "@/lib/db";

export async function getStudentComments(query: string = "") {
  return await prisma.studentComment.findMany({
    where: {
      OR: [{ text: { contains: query } }],
    },
    orderBy: { id: "asc" },
  });
}

export async function getStudentCommentFlags() {
  return await prisma.studentCommentFlag.findMany();
}
