"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

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

export const description = "A bar chart with a label"

const chartData =  [
  { province: "Eastern Cape", value: 1098 },
  { province: "Free State", value: 365 },
  { province: "Gauteng", value: 1040 },
  { province: "KwaZulu-Natal", value: 1253 },
  { province: "Limpopo", value: 219 },
  { province: "Mpumalanga", value: 303 },
  { province: "North West", value: 238 },
  { province: "Northern Cape", value: 94 },
  { province: "Western Cape", value: 769 }
];

const chartConfig = {
  value: {
    label: "value",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ProvinceMurderData() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Murder Crimes Per Province </CardTitle>
        <CardDescription>2024-2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
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
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="value" fill="var(--color-value)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this province <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 provinces
        </div>
      </CardFooter>
    </Card>
  )
}
