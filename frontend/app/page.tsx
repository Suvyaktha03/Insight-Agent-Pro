import SearchBox from "@/components/SearchBox";

export default function Home() {
  return (
    <main
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-cyan-950
      text-white
      "
    >

      <div
        className="
        mx-auto
        flex
        min-h-screen
        max-w-6xl
        flex-col
        items-center
        justify-center
        px-6
        text-center
        "
      >

        <h1
          className="
          text-6xl
          font-extrabold
          "
        >
          SalesBrief AI
        </h1>

        <p
          className="
          mt-4
          mb-10
          max-w-2xl
          text-xl
          text-slate-300
          "
        >
          AI-powered company intelligence
          and competitor prediction
          platform for modern sales teams.
        </p>

        <SearchBox />

      </div>

    </main>
  );
}