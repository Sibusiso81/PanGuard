"use client";
import { AppSidebar } from "@/components/app-sidebar";

import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";


import { AssultPerProvince } from "./assult-by-province";
import { AttemptedMurderByProvince } from "./attempted-murder-by-province";
import { SexualOffencesForecast } from "../Crime-Trends/sexual-offencies-forecast";
import { MurderCrimeForecast } from "../Crime-Trends/murder-crime-forecast";
import { SexualOffenciesPerProvince } from "./sexual-offencies-per-province";
import { ProvinceMurderData } from "./murder-by-province";

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
        <div className="flex flex-1 flex-col justify-center">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="px-4 lg:px-6">
                <div className="mb-6 flex flex-col md:flex-row justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground">
                      South African Crime Trends Analytics
                    </h1>
                    <p className="text-muted-foreground mt-1">
                      Q4 2024-2025 (January 2025 - March 2025)
                    </p>
                  </div>
                  <div className="flex space-x-4">
                 
                  </div>
                </div>
                <div className="space-y-4 ">
                  <h2 className="text-2xl font-bold ">Summary </h2>
                  <p className="text-md">
                    While overall crime has dropped slightly, sexual offences
                    are rising, indicating that vulnerable populations may face
                    increasing risk even in periods of overall decline.” “These
                    trends highlight how PanGuard’s real-time alerting and
                    community-based model can serve as a proactive response
                    mechanism—especially when crime dynamics shift.{" "}
                  </p>
                </div>
              </div>

              <div className="grid gap-4 px-4 lg:px-6 md:grid-cols-2 lg:grid-cols-3  ">
               <AssultPerProvince/>
               <AttemptedMurderByProvince/>
               <SexualOffenciesPerProvince/>
               <ProvinceMurderData/>
              </div>

              
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
