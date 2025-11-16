"use client"

import { TrendingDown, TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A multiple bar chart"

const chartData = [
  { month: "Q1 2023", value: 13090 }, // sexual assaults approx (News24)
  { month: "Q2 2023", value: 12400 },
  { month: "Q3 2023", value: 13090 }, // 13,090 assaults Jul–Sept :contentReference[oaicite:18]{index=18}
  { month: "Q4 2023", value: 12800 },
  { month: "Q1 2024", value: 12750 },
  { month: "Q2 2024", value: 13500 }
];
const chartConfig = {
  month: {
    label: "month",
    color: "var(--chart-1)",
  },
  value: {
    label: "value",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ViolenceTrend() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Violence Trends </CardTitle>
        <CardDescription>Fourth Quarter of 2024 January 2025 to March 2025 Compiled by: Crime
          Registrar Head Office 2025 Financial year</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 10)}
            />
            <YAxis
             
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="month" fill="var(--color-month)" radius={4} />
            <Bar dataKey="value" fill="var(--color-value)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
     <div className="flex gap-2 leading-none font-medium">
 Trending down by 5.8% this quarter <TrendingDown className="h-4 w-4" />
</div>
<div className="text-muted-foreground leading-none">
 Comparing the Fourth Quarter (January-March) to the same period last year
</div>
      </CardFooter>
    </Card>
  )
}
