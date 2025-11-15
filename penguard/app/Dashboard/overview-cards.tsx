import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingDown, TrendingUp, AlertTriangle, Users } from 'lucide-react'

const overviewData = [
  {
    title: "Total Serious Crimes",
    value: "375,007",
    change: "-5.8%",
    trend: "down",
    description: "17 community-reported crimes",
    previous: "398,186",
  },
  {
    title: "Contact Crimes",
    value: "161,672",
    change: "-5.8%",
    trend: "down",
    description: "Crimes against persons",
    previous: "171,707",
  },
  {
    title: "Murder Rate",
    value: "5,727",
    change: "-12.4%",
    trend: "down",
    description: "9.1 per 100,000 population",
    previous: "6,536",
  },
  {
    title: "Sexual Offences",
    value: "13,452",
    change: "0.0%",
    trend: "stable",
    description: "Requires urgent intervention",
    previous: "13,446",
  },
]

export function CrimeOverviewCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {overviewData.map((item) => (
        <Card key={item.title} className="border-2">
          <CardHeader className="pb-2">
            <CardDescription className="text-xs">{item.description}</CardDescription>
            <CardTitle className="text-2xl font-bold">{item.value}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              {item.trend === "down" && (
                <>
                  <TrendingDown className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">{item.change}</span>
                </>
              )}
              {item.trend === "up" && (
                <>
                  <TrendingUp className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium text-red-600">{item.change}</span>
                </>
              )}
              {item.trend === "stable" && (
                <>
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                  <span className="text-sm font-medium text-amber-600">{item.change}</span>
                </>
              )}
              <span className="text-xs text-muted-foreground">vs Q4 2023/24</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Previous: {item.previous}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
