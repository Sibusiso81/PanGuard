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
import Image from 'next/image'

const navigationItems = [
  {
    title: "Overview",
    icon: BarChart3,
    url: "/Dashboard",
  },
  {
    title: "Crime Trends",
    icon: TrendingDown,
    url: "/Dashboard/Crime-Trends",
  },
  {
    title: "Provincial Data",
    icon: MapPin,
    url: "/Dashboard/Provincial-Data",
  },
  {
    title: "Policy Insights",
    icon: FileText,
    url: "/Dashboard/Policy-Insights",
  },
  {
    title: "Know-Before-You-Go",
    icon: AlertTriangle,
    url: "/Dashboard/Know-Before-You-Go",
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-2">
          <Image height={20} width={50 } src={'/PenguardPurpleLogo.jpg'} alt='PanGuard-Dashboard-Logo' className='rounded-md'/>
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
