"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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

export const description = "A line chart"

const chartData = [
  { month: "Q2 2025", desktop: 13892 },
  { month: "Q3 2025", desktop: 14121 },
  { month: "Q4 2025", desktop: 14350 },
  { month: "Q1 2026", desktop: 14578 },
  { month: "Q2 2026", desktop: 14806 },
  { month: "Q3 2026", desktop: 15035 }
];

export const sexualOffencesForecast = [
  { month: "Q2 2025", desktop: 13892 },
  { month: "Q3 2025", desktop: 14121 },
  { month: "Q4 2025", desktop: 14350 },
  { month: "Q1 2026", desktop: 14578 },
  { month: "Q2 2026", desktop: 14806 },
  { month: "Q3 2026", desktop: 15035 }
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function SexualOffencesForecast() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sexual Offencies Forecast</CardTitle>
        <CardDescription>Q2-Q3 25/26</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up  <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing an increase in sexual offences for next  Quatars
        </div>
      </CardFooter>
    </Card>
  )
}
