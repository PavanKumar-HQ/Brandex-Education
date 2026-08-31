import { use } from "react";
import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ classId: string }>;
}

export default function ClassesRedirectPage({ params }: PageProps) {
  const { classId } = use(params);
  redirect(`/class/${classId}`);
}
