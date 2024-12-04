import CaseInquiriesList from "@/components/CaseInquiries/CaseInquiriesList";
import Search from "@/components/Search";
import { getCaseInquiries } from "@/lib/case-inquiries/data";
import { Suspense } from "react";

export default async function CaseInquiriesPage(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query;
  const caseInquiries = await getCaseInquiries(query);

  console.log(searchParams);

  return (
    <section>
      <Search />
      <Suspense fallback="Loading...">
        <CaseInquiriesList caseInquiries={caseInquiries} />
      </Suspense>
    </section>
  );
}
