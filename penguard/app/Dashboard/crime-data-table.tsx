import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { TrendingDown, TrendingUp, Minus } from 'lucide-react'

const crimeData = [
  { category: "Murder", q1_2024: 6536, q1_2025: 5727, change: -12.4 },
  { category: "Sexual Offences", q1_2024: 13446, q1_2025: 13452, change: 0.0 },
  { category: "Attempted Murder", q1_2024: 7413, q1_2025: 6985, change: -5.8 },
  { category: "Assault GBH", q1_2024: 46233, q1_2025: 43776, change: -5.3 },
  { category: "Common Assault", q1_2024: 50593, q1_2025: 48872, change: -3.4 },
  { category: "Common Robbery", q1_2024: 12060, q1_2025: 11111, change: -7.9 },
  { category: "Aggravated Robbery", q1_2024: 35426, q1_2025: 31749, change: -10.4 },
  { category: "Burglary Residential", q1_2024: 38392, q1_2025: 35462, change: -7.6 },
  { category: "Burglary Non-Residential", q1_2024: 13841, q1_2025: 12147, change: -12.2 },
  { category: "Vehicle Theft", q1_2024: 8502, q1_2025: 7731, change: -9.1 },
  { category: "Theft from Vehicle", q1_2024: 20475, q1_2025: 19032, change: -7.0 },
  { category: "Commercial Crime", q1_2024: 33793, q1_2025: 35374, change: 4.7 },
  { category: "Shoplifting", q1_2024: 12395, q1_2025: 9769, change: -21.2 },
  { category: "Drug-Related", q1_2024: 45647, q1_2025: 52568, change: 15.2 },
]

export function CrimeDataTable() {
  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle>Detailed Crime Statistics</CardTitle>
        <CardDescription>Comprehensive breakdown of crime categories with year-over-year comparison</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Crime Category</TableHead>
                <TableHead className="text-right font-semibold">Q1 2024</TableHead>
                <TableHead className="text-right font-semibold">Q1 2025</TableHead>
                <TableHead className="text-right font-semibold">Change</TableHead>
                <TableHead className="text-right font-semibold">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {crimeData.map((row) => (
                <TableRow key={row.category}>
                  <TableCell className="font-medium">{row.category}</TableCell>
                  <TableCell className="text-right">{row.q1_2024.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{row.q1_2025.toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    <span className={row.change < 0 ? "text-green-600 font-medium" : row.change > 0 ? "text-red-600 font-medium" : "text-amber-600 font-medium"}>
                      {row.change > 0 ? "+" : ""}{row.change}%
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    {row.change < -5 && (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        <TrendingDown className="h-3 w-3 mr-1" />
                        Improving
                      </Badge>
                    )}
                    {row.change >= -5 && row.change < 0 && (
                      <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                        <TrendingDown className="h-3 w-3 mr-1" />
                        Declining
                      </Badge>
                    )}
                    {row.change === 0 && (
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                        <Minus className="h-3 w-3 mr-1" />
                        Stable
                      </Badge>
                    )}
                    {row.change > 0 && row.change < 5 && (
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Rising
                      </Badge>
                    )}
                    {row.change >= 5 && (
                      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Concern
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
