import StudentCommentsList from "@/components/StudentComments/StudentCommentsList";
import Search from "@/components/Search";
import { getStudentComments } from "@/lib/student-comments/data";
import { Suspense } from "react";

export default async function StudentCommentsPage(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query;
  const studentComments = await getStudentComments(query);

  return (
    <section>
      <Search />
      <Suspense fallback="Loading...">
        <StudentCommentsList studentComments={studentComments} />
      </Suspense>
    </section>
  );
}
