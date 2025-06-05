export function ProgrammingTable() {
  return (
    <div className="mb-12 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Programming Language Demand and Salaries</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-muted">
            <th className="border p-3 text-left">Language</th>
            <th className="border p-3 text-left">Demand</th>
            <th className="border p-3 text-left">Popularity</th>
            <th className="border p-3 text-left">Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-muted/50">
            <td className="border p-3">Java</td>
            <td className="border p-3">High</td>
            <td className="border p-3">Very High</td>
            <td className="border p-3">$80,000 - $110,000</td>
          </tr>
          <tr className="hover:bg-muted/50">
            <td className="border p-3">Python</td>
            <td className="border p-3">Very High</td>
            <td className="border p-3">Very High</td>
            <td className="border p-3">$80,000 - $110,000</td>
          </tr>
          <tr className="hover:bg-muted/50">
            <td className="border p-3">JavaScript</td>
            <td className="border p-3">High</td>
            <td className="border p-3">Very High</td>
            <td className="border p-3">$75,000 - $105,000</td>
          </tr>
          <tr className="hover:bg-muted/50">
            <td className="border p-3">C#</td>
            <td className="border p-3">Moderate</td>
            <td className="border p-3">High</td>
            <td className="border p-3">$70,000 - $100,000</td>
          </tr>
          <tr className="hover:bg-muted/50">
            <td className="border p-3">C++</td>
            <td className="border p-3">Low</td>
            <td className="border p-3">Moderate</td>
            <td className="border p-3">$65,000 - $95,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
