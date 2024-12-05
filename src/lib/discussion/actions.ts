"use server";
// import { revalidatePath } from "next/cache";
import { z } from "zod";
import prisma from "@/lib/db";

const DiscussionSchema = z.object({
  id: z.string(),
  topic: z.string(),
  authorId: z.string(),
  //   text: z.string(),
});

const CreateDiscussion = DiscussionSchema.omit({ id: true });

export async function createDiscussion(formData: FormData) {
  const validatedFields = CreateDiscussion.safeParse({
    topic: formData.get("topic"),
    authorId: formData.get("authorId"),
  });

  console.log(validatedFields);

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return;
  }

  const { topic, authorId } = validatedFields.data;

  try {
    await prisma.discussion.create({
      data: { topic, text: topic, authorId },
    });
  } catch (e) {
    console.error(e);
  }

  // revalidatePath("/discussion");
}
