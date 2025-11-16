"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { crime: "Assault", value: 123000 },
  { crime: "Sexual Offences", value: 45000 },
  { crime: "Theft – Motor Vehicle", value: 77000 },
  { crime: "Deliberate Damage to Property", value: 123000 },
];
const chartConfig = {
  crime: {
    label: "crime",
    color: "var(--chart-1)",
  },
  value: {
    label: "value",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function HouseHoldTrend() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>HouseHold Crime Trends</CardTitle>
        <CardDescription>
          Fourth Quarter of 2024 January 2025 to March 2025 Compiled by: Crime
          Registrar Head Office 2025 Financial year
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="crime"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 1)}
            />
            <YAxis tickLine={false} tickMargin={10} axisLine={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="crime" fill="var(--color-crime)" radius={4} />
            <Bar dataKey="value" fill="var(--color-value)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this crime <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 crimes
        </div>
      </CardFooter>
    </Card>
  );
}
