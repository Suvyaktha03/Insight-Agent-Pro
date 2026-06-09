"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BriefCard from "@/components/BriefCard";

export default function Page() {
  const params = useParams();
  const company = params.company as string;
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("https://automatic-space-happiness-76w5wpxrw552xqpp-8000.app.github.dev/brief/" + company)
      .then(res => res.json())
      .then(setData);
  }, [company]);

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white flex items-center justify-center">
        <p className="text-slate-400">Loading...</p>
      </div>
    );
  }

  return <BriefCard data={data} />;
}