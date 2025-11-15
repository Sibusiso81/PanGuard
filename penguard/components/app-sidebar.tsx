import { Shield, BarChart3, TrendingDown, MapPin, FileText, AlertTriangle } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"

const navigationItems = [
  {
    title: "Overview",
    icon: BarChart3,
    url: "/dashboard",
  },
  {
    title: "Crime Trends",
    icon: TrendingDown,
    url: "#trends",
  },
  {
    title: "Provincial Data",
    icon: MapPin,
    url: "#provinces",
  },
  {
    title: "Policy Insights",
    icon: FileText,
    url: "#insights",
  },
  {
    title: "High-Risk Areas",
    icon: AlertTriangle,
    url: "#risk",
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Shield className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <p className="text-sm font-semibold">Pengard Analytics</p>
            <p className="text-xs text-muted-foreground">Crime Intelligence</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border p-4">
        <p className="text-xs text-muted-foreground">
          Data Source: SAPS Q4 2024/2025
        </p>
      </SidebarFooter>
    </Sidebar>
  )
}
