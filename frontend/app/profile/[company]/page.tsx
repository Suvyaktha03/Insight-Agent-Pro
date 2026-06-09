import BriefCard from "@/components/BriefCard";

async function getData(company: string) {
  const res = await fetch(
    `http://127.0.0.1:8000/brief/${company}`,
    {
      cache: "no-store"
    }
  );

  return res.json();
}

export default async function Page({
  params,
}: {
  params: Promise<{ company: string }>;
}) {

  const { company } = await params;

  const data = await getData(company);

  return (
    <div className="p-8">
      <BriefCard data={data} />
    </div>
  );
}