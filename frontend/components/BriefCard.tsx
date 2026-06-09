export default function BriefCard({
  data
}: any) {
  return (
    <div className="bg-white rounded-xl p-6 shadow">

      <h1 className="text-3xl font-bold mb-4">
        {data.company}
      </h1>

      <p className="mb-4">
        {data.summary}
      </p>

      <h2 className="font-bold mt-4">
        Products
      </h2>

      <ul>
        {data.products?.map(
          (item: string) => (
            <li key={item}>
              • {item}
            </li>
          )
        )}
      </ul>

      <h2 className="font-bold mt-4">
        Customers
      </h2>

      <ul>
        {data.customers?.map(
          (item: string) => (
            <li key={item}>
              • {item}
            </li>
          )
        )}
      </ul>

      <h2 className="font-bold mt-4">
        Opportunities
      </h2>

      <ul>
        {data.opportunities?.map(
          (item: string) => (
            <li key={item}>
              • {item}
            </li>
          )
        )}
      </ul>

      <div className="mt-4">
        <b>Pitch:</b>
        <p>{data.pitch}</p>
      </div>

      <div className="mt-4">
        <b>Confidence:</b>
        {data.confidence}%
      </div>

    </div>
  );
}