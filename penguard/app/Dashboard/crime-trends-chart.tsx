"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "A stacked area chart"

const chartData = [
{ period: "Q1 2024", sexual: 13446, assault: 46233, },
  { period: "Q1 2025",  sexual: 13452, assault: 43776,  },
]

const chartConfig = {
  sexual: {
    label: "sexual",
    color: "var(--chart-1)",
  },
  assault: {
    label: "assault",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartAreaStacked() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Assult and Sexual Crime Trends</CardTitle>
        <CardDescription>
          Showing trends from Q4 2024 - 2025
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="period"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="sexual"
              type="natural"
              fill="var(--color-assault)"
              fillOpacity={0.4}
              stroke="var(--color-assault)"
              stackId="a"
            />
            <Area
              dataKey="assault"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
