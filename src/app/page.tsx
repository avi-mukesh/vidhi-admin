import Link from "next/link";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Link href="/case-inquiries">Case Inquiries</Link>
      <Link href="/student-comments">Student Comments</Link>
    </div>
  );
}
