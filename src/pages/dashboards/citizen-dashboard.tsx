import {
  FileText,
  CheckCircle2,
  Clock,
  ThumbsUp,
  MapPin,
  Camera,
  Plus,
} from 'lucide-react';
import { RoleDashboardShell, type RoleStat, type RoleActivity, type RoleAction } from '@/components/role-dashboard-shell';
import { useAuth } from '@/hooks/use-auth';

const stats: RoleStat[] = [
  { label: 'Reports Submitted', value: '12', change: '+3', trend: 'up', icon: FileText, color: 'bg-primary/10 text-primary' },
  { label: 'Issues Resolved', value: '8', change: '+2', trend: 'up', icon: CheckCircle2, color: 'bg-success/10 text-success' },
  { label: 'In Progress', value: '3', icon: Clock, color: 'bg-warning/10 text-warning' },
  { label: 'Upvotes Received', value: '47', change: '+12', trend: 'up', icon: ThumbsUp, color: 'bg-chart-4/10 text-chart-4' },
];

const activities: RoleActivity[] = [
  { user: 'Municipal Corp', action: 'resolved your report "Pothole on MG Road"', time: '2h ago', initials: 'MC' },
  { user: 'Priya M.', action: 'upvoted your report "Broken streetlight"', time: '5h ago', initials: 'PM' },
  { user: 'You', action: 'submitted a new report "Water leakage near park"', time: '1d ago', initials: 'AS' },
  { user: 'Admin', action: 'assigned your report to the sanitation team', time: '2d ago', initials: 'AD' },
  { user: 'Rahul K.', action: 'commented on "Garbage collection delay"', time: '3d ago', initials: 'RK' },
];

const actions: RoleAction[] = [
  { label: 'Report Issue', icon: Plus, primary: true },
  { label: 'Track Reports', icon: MapPin },
];

export default function CitizenDashboard() {
  const { user } = useAuth();
  const firstName = user?.name.split(' ')[0] ?? 'Citizen';

  return (
    <RoleDashboardShell
      greeting={`Hi ${firstName}`}
      subtitle="Track your reports and see community issues being resolved near you."
      stats={stats}
      activities={activities}
      actions={actions}
      sideTitle="Resolution Rate"
      sideDescription="Of your reports resolved this month"
      sideProgress={{ label: 'Progress', value: 67, display: '67%' }}
      sideExtra={
        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="rounded-lg bg-success/10 p-3">
            <p className="text-lg font-bold text-success">8</p>
            <p className="text-xs text-muted-foreground">Resolved</p>
          </div>
          <div className="rounded-lg bg-muted p-3">
            <p className="text-lg font-bold">12</p>
            <p className="text-xs text-muted-foreground">Total</p>
          </div>
        </div>
      }
      banner={
        <div className="flex flex-col gap-3 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 to-chart-2/5 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary text-white">
              <Camera className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">Spot an issue in your neighborhood?</p>
              <p className="text-xs text-muted-foreground">Report it with a photo and AI will route it instantly.</p>
            </div>
          </div>
        </div>
      }
    />
  );
}
