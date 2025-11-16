"use client";
import { AppSidebar } from "@/components/app-sidebar";

import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";


import { useState } from "react";
import { GBVTopFive } from "./gbv-per-province";
import { MurderTopFive } from "./crime-index";
import { CrimeIndex } from "./murder-top-5";

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
                    The Q4 statistics mandate a targeted policy response to sustain gains in violent crime reduction while urgently tackling stagnant and rising categories; this requires intensifying gender-based violence (GBV) prevention programs to finally reduce the unmoving 13,452 Sexual Offences cases, enhancing drug enforcement and rehabilitation initiatives to curb the substantial 15.2% increase in drug-related crime, and strengthening commercial crime investigation units to combat the 4.7% rise in financial and corporate fraud, ensuring that policy action is both effective against current threats and preventative against future ones.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 px-4 lg:px-6 md:grid-cols-2 lg:grid-cols-3  ">
               <MurderTopFive/>
               <GBVTopFive/>
               <CrimeIndex/>
              </div>

             
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
