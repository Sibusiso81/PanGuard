"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { ChartAreaStacked } from "./crime-trends-chart";
import { CrimeDataTable } from "./crime-data-table";
import { CrimeOverviewCards } from "./overview-cards";
import { PolicyInsights } from "./policy-insights";
import { ProvincialComparisonChart } from "./provincial-comparison-chart";


import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { AudioPlayer } from "../custom/AudioPlayer";

export default function Page() {
  const languageAudio = [
    { code: "zu", label: "isiZulu", file: "/download (4).wav" },
    { code: "xh", label: "isiXhosa", file: "/download (5).wav" },
    { code: "af", label: "Afrikaans", file: "/download (3)wav" },
    { code: "en", label: "English", file: "/download (2).wav" },
    { code: "nso", label: "Sepedi", file: "/download (6).wav" },
    { code: "st", label: "Sesotho", file: "/download (6).wav" },
    { code: "tn", label: "Setswana", file: "/download (7).wav" },
    { code: "ts", label: "Xitsonga", file: "/download (8).wav" },
    { code: "ve", label: "Tshivenda", file: "/download (9).wav" },
    { code: "nr", label: "isiNdebele", file: "/download (11).wav" },
    { code: "ss", label: "siSwati", file: "/download (10).wav" },
  ];
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  
  const handleLanguage = (langCode: string) => {
    const chosen = languageAudio.find((l) => l.code === langCode);
    if (chosen) {
      setAudioSrc(chosen.file);
      setSelectedLanguage(chosen.label);
    }
  };
  
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
                  <h1 className="text-3xl font-bold text-foreground">
                    South African Crime Analytics{" "}
                  </h1>
                  <p className="text-muted-foreground mt-1">
                    Q4 2024-2025 (January 2025 - March 2025)
                  </p>
                  <div className="mt-6 max-w-md">
                    <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Select Prefered Language for Audio Summary
                          </label>
                          <Select onValueChange={handleLanguage}>
                            <SelectTrigger className="w-full text-foreground bg-background border border-input">
                              <SelectValue placeholder="Choose your language" />
                            </SelectTrigger>
                            <SelectContent>
                              {languageAudio.map((lang) => (
                                <SelectItem key={lang.code} value={lang.code}>
                                  {lang.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        {audioSrc && (
                          <AudioPlayer 
                            src={audioSrc} 
                            language={selectedLanguage}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <CrimeOverviewCards />
              </div>

              <div className="px-4 lg:px-6">
                <PolicyInsights />
              </div>

              <div className="grid gap-4 px-4 lg:px-6 md:grid-cols-2">
                <ChartAreaStacked />
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
  );
}
