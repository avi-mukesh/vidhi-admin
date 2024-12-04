import prisma from "@/lib/db";

export async function getCaseInquiries(query: string = "") {
  return await prisma.caseInquiry.findMany({
    where: {
      OR: [
        { name: { contains: query } },
        { phoneOrEmail: { contains: query } },
        { inquiry: { contains: query } },
      ],
    },
    orderBy: { id: "asc" },
  });
}

export async function getCaseInquiryFlags() {
  return await prisma.caseInquiryFlag.findMany();
}
