"use client"

import { TrendingUp } from "lucide-react"
import { LabelList, Pie, PieChart } from "recharts"

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

export const description = "A pie chart with a label list"

const chartData = [
  { browser: "KZN", visitors: 3113, fill: "var(--chart-1)" },
  { browser: "EC", visitors: 2519, fill: "var(--chart-2)" },
  { browser: "GP", visitors: 3290, fill: "var(--chart-3)" },
  { browser: "WC", visitors: 1765, fill: "var(--chart-4)" },
  { browser: "MP", visitors: 1121, fill: "var(--chart-5)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  KZN: {
    label: "KZN",
    color: "var(--chart-1)",
  },
  EC: {
    label: "EC",
    color: "var(--chart-2)",
  },
  GP: {
    label: "GP",
    color: "var(--chart-3)",
  },
  WC: {
    label: "WC",
    color: "var(--chart-4)",
  },
  MP: {
    label: "MP",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function GBVTopFive() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Top 5 Murder Crime Rate Provinces</CardTitle>
        <CardDescription>June 2024 -2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors">
              <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Policy Insight:
Gauteng + KZN contribute nearly 47% of all sexual offences recorded nationwide.
These should be priority GBV intervention zones.
        </div>
        
      </CardFooter>
    </Card>
  )
}
