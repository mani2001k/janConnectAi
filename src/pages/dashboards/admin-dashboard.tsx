import {
  FileText,
  Users,
  Building2,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  ShieldCheck,
} from 'lucide-react';
import { RoleDashboardShell, type RoleStat, type RoleActivity, type RoleAction } from '@/components/role-dashboard-shell';
import { useAuth } from '@/hooks/use-auth';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const stats: RoleStat[] = [
  { label: 'Total Reports', value: '1,284', change: '+12%', trend: 'up', icon: FileText, color: 'bg-primary/10 text-primary' },
  { label: 'Active Users', value: '3,420', change: '+8%', trend: 'up', icon: Users, color: 'bg-success/10 text-success' },
  { label: 'Partner NGOs', value: '58', change: '+2', trend: 'up', icon: Building2, color: 'bg-warning/10 text-warning' },
  { label: 'Avg Resolution', value: '3.2d', change: '-0.4d', trend: 'up', icon: TrendingUp, color: 'bg-chart-4/10 text-chart-4' },
];

const activities: RoleActivity[] = [
  { user: 'AI System', action: 'auto-categorized 14 new reports and routed them', time: '15m ago', initials: 'AI' },
  { user: 'Seva Foundation', action: 'requested approval for a new medical camp', time: '1h ago', initials: 'SF' },
  { user: 'Priya M.', action: 'flagged a report as high priority', time: '2h ago', initials: 'PM' },
  { user: 'System', action: 'resolved 23 reports across 4 wards this week', time: '6h ago', initials: 'SY' },
  { user: 'Rahul K.', action: 'completed volunteer verification', time: '1d ago', initials: 'RK' },
];

const actions: RoleAction[] = [
  { label: 'View Analytics', icon: BarChart3, primary: true },
  { label: 'Review Reports', icon: FileText },
  { label: 'Verify NGOs', icon: ShieldCheck },
];

export default function AdminDashboard() {
  const { user } = useAuth();
  const firstName = user?.name.split(' ')[0] ?? 'Admin';

  return (
    <RoleDashboardShell
      greeting={`Admin Console — ${firstName}`}
      subtitle="Oversee community health, verify partners, and let AI assist with triage."
      stats={stats}
      activities={activities}
      actions={actions}
      sideTitle="Platform Health"
      sideDescription="Overall system resolution rate this month"
      sideProgress={{ label: 'Resolution rate', value: 72, display: '72%' }}
      sideExtra={
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-lg bg-accent/40 px-3 py-2">
            <span className="flex items-center gap-1.5 text-xs font-medium">
              <CheckCircle2 className="h-3.5 w-3.5 text-success" /> Healthy
            </span>
            <Badge variant="secondary" className="text-success">Operational</Badge>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-accent/40 px-3 py-2">
            <span className="flex items-center gap-1.5 text-xs font-medium">
              <AlertTriangle className="h-3.5 w-3.5 text-warning" /> Pending Approvals
            </span>
            <Badge variant="secondary">7</Badge>
          </div>
        </div>
      }
      banner={
        <Card className="border-border/50">
          <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">7 NGO applications awaiting verification</p>
                <p className="text-xs text-muted-foreground">Review credentials and approve partner organizations.</p>
              </div>
            </div>
            <Badge variant="secondary">Review queue</Badge>
          </CardContent>
        </Card>
      }
    />
  );
}
