import prisma from "@/lib/db";

export async function getImportances() {
  return await prisma.importance.findMany();
}
