"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
  { province: "EC", prev: 39640, current: 38475 },
  { province: "FS", prev: 24187, current: 23010 },
  { province: "GP", prev: 106653, current: 98260 },
  { province: "KZN", prev: 64642, current: 63008 },
  { province: "LP", prev: 26637, current: 23803 },
  { province: "MP", prev: 23159, current: 20851 },
  { province: "NW", prev: 26099, current: 24127 },
  { province: "NC", prev: 11403, current: 11329 },
  { province: "WC", prev: 75766, current: 72144 },
]
const chartConfig = {
  prev: {
    label: "prev",
    color: "var(--chart-1)",
  },
  current: {
    label: "current",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ProvincialComparisonChart() {
  return (
    <Card className="w-full md:w-1/2">
      <CardHeader>
        <CardTitle>Bar Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="province"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="prev" fill="var(--color-prev)" radius={4} />
            <Bar dataKey="current" fill="var(--color-current)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
