import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { ChartAreaStacked } from "./crime-trends-chart"
import { CrimeDataTable } from "./crime-data-table"
import { CrimeOverviewCards } from "./overview-cards"
import { PolicyInsights } from "./policy-insights"
import { ProvincialComparisonChart } from "./provincial-comparison-chart"

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="px-4 lg:px-6">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-foreground">South African Crime Analytics Dashboard</h1>
                  <p className="text-muted-foreground mt-1">Q4 2024-2025 (January 2025 - March 2025)</p>
                </div>
                <CrimeOverviewCards />
              </div>
              
              <div className="px-4 lg:px-6">
                <PolicyInsights />
              </div>

              <div className="grid gap-4 px-4 lg:px-6 md:grid-cols-2">
                <ChartAreaStacked/>
                <ProvincialComparisonChart />
              </div>

              <div className="px-4 lg:px-6">
                <CrimeDataTable />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
