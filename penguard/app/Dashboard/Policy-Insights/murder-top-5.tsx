"use client"

import { TrendingUp } from "lucide-react"
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

export const description = "A bar chart"

const chartData = [
  { province: "KwaZulu-Natal", value: 1253 + 1060 + 3113 + 5451 },
  { province: "Gauteng", value: 1040 + 998 + 3290 + 4165 },
  { province: "Eastern Cape", value: 1098 + 609 + 2519 + 3299 },
  { province: "Western Cape", value: 769 + 352 + 1765 + 3186 },
  { province: "Mpumalanga", value: 303 + 256 + 1121 + 1755 },
  { province: "Limpopo", value: 219 + 178 + 913 + 1243 },
  { province: "North West", value: 238 + 183 + 881 + 1394 },
  { province: "Free State", value: 365 + 246 + 981 + 1444 },
  { province: "Northern Cape", value: 94 + 63 + 509 + 674 }
];
const chartConfig = {
  value: {
    label: "value",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function CrimeIndex() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Violent-Crime Pressure Index</CardTitle>
        <CardDescription></CardDescription>
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
            <YAxis
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="value" fill="var(--color-value)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm place-self-end">
        <div className="flex gap-2 leading-none font-medium">
            Insight to which provinces are under the most pressure from violent crimes
        </div>
        
      </CardFooter>
    </Card>
  )
}
