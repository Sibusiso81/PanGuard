import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle2, TrendingDown, Target } from 'lucide-react'

const insights = [
  {
    category: "Positive Trend",
    icon: CheckCircle2,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950",
    items: [
      "Murder decreased by 12.4% (-809 cases) - effective intervention",
      "Robbery with aggravating circumstances down 10.4% (-3,677 cases)",
      "Property-related crimes reduced by 8.5% (-7,395 cases)",
      "Carjacking decreased significantly by 15.1% (-805 cases)",
    ],
  },
  {
    category: "Areas of Concern",
    icon: AlertCircle,
    color: "text-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-950",
    items: [
      "Sexual offences remain stagnant at 13,452 cases (0.0% change)",
      "Drug-related crimes increased 15.2% (+6,921 cases)",
      "Commercial crime rose 4.7% (+1,581 cases)",
      "Sexual offences detected by police up 20.4% (+604 cases)",
    ],
  },
  {
    category: "Policy Recommendations",
    icon: Target,
    color: "text-primary",
    bgColor: "bg-primary/5",
    items: [
      "Intensify gender-based violence prevention programs",
      "Enhance drug enforcement and rehabilitation initiatives",
      "Maintain pressure on violent crime hotspots",
      "Strengthen commercial crime investigation units",
    ],
  },
]

export function PolicyInsights() {
  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingDown className="h-5 w-5" />
          Policy Insights & Recommendations
        </CardTitle>
        <CardDescription>
          Data-driven insights for strategic crime prevention and resource allocation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-3">
          {insights.map((insight) => (
            <div key={insight.category} className={`rounded-lg p-4 ${insight.bgColor}`}>
              <div className="flex items-center gap-2 mb-3">
                <insight.icon className={`h-5 w-5 ${insight.color}`} />
                <h3 className={`font-semibold ${insight.color}`}>{insight.category}</h3>
              </div>
              <ul className="space-y-2">
                {insight.items.map((item, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <span className="text-muted-foreground mt-1">•</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
