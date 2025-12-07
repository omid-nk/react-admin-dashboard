import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";

function SalesAreaChart() {
  const saleData = [
    { name: "Jan", sales: 4200 },
    { name: "Feb", sales: 3020 },
    { name: "Mar", sales: 2000 },
    { name: "Apr", sales: 2780 },
    { name: "May", sales: 1890 },
    { name: "Jun", sales: 4390 },
    { name: "Jul", sales: 6490 },
    { name: "Aug", sales: 7200 },
    { name: "Sep", sales: 9190 },
    { name: "Oct", sales: 8220 },
    { name: "Nov", sales: 10700 },
    { name: "Dec", sales: 6400 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={saleData}
        margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

        <XAxis
          dataKey="name"
          tick={{ fill: "#6b7280", fontSize: 12 }}
          tickLine={false}
        />

        <YAxis
          tick={{ fill: "#6b7280", fontSize: 12 }}
          tickFormatter={(v) => `$${v}`}
          tickLine={false}
          axisLine={false}
        />

        <Tooltip
          formatter={(v) => [`$${v}`, "Sales"]}
          contentStyle={{
            borderRadius: "10px",
            backgroundColor: "white",
            boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
            border: "none",
            fontSize: "13px",
          }}
        />

        <defs>
          <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.45} />
            <stop offset="95%" stopColor="#6366f1" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area
          type="monotone"
          dataKey="sales"
          stroke="#6366f1"
          strokeWidth={3}
          fill="url(#colorSales)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default SalesAreaChart;
