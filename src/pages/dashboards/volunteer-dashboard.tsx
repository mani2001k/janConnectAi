import {
  HandHeart,
  CheckCircle2,
  Clock,
  Award,
  Calendar,
  Search,
  Stethoscope,
} from 'lucide-react';
import { RoleDashboardShell, type RoleStat, type RoleActivity, type RoleAction } from '@/components/role-dashboard-shell';
import { useAuth } from '@/hooks/use-auth';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const stats: RoleStat[] = [
  { label: 'Tasks Completed', value: '34', change: '+6', trend: 'up', icon: CheckCircle2, color: 'bg-success/10 text-success' },
  { label: 'Active Assignments', value: '4', icon: Clock, color: 'bg-warning/10 text-warning' },
  { label: 'Hours Volunteered', value: '128', change: '+18', trend: 'up', icon: HandHeart, color: 'bg-primary/10 text-primary' },
  { label: 'Impact Score', value: '920', change: '+45', trend: 'up', icon: Award, color: 'bg-chart-4/10 text-chart-4' },
];

const activities: RoleActivity[] = [
  { user: 'Seva Foundation', action: 'assigned you to "Sunday Medical Camp"', time: '1h ago', initials: 'SF' },
  { user: 'You', action: 'completed task "Distribute supplies at Camp 7"', time: '4h ago', initials: 'PM' },
  { user: 'Admin', action: 'thanked you for your contribution this week', time: '1d ago', initials: 'AD' },
  { user: 'Anita S.', action: 'requested your help for a blood drive', time: '2d ago', initials: 'AS' },
  { user: 'You', action: 'joined "Community cleanup drive"', time: '3d ago', initials: 'PM' },
];

const actions: RoleAction[] = [
  { label: 'Find Tasks', icon: Search, primary: true },
  { label: 'My Schedule', icon: Calendar },
];

export default function VolunteerDashboard() {
  const { user } = useAuth();
  const firstName = user?.name.split(' ')[0] ?? 'Volunteer';

  return (
    <RoleDashboardShell
      greeting={`Hi ${firstName}`}
      subtitle="Find tasks that match your skills and track your community impact."
      stats={stats}
      activities={activities}
      actions={actions}
      sideTitle="Impact Score"
      sideDescription="Your contribution ranking this month"
      sideProgress={{ label: 'To next badge', value: 78, display: '920 / 1000' }}
      sideExtra={
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-lg bg-accent/40 px-3 py-2">
            <span className="text-xs font-medium">Current Badge</span>
            <Badge variant="secondary" className="gap-1">
              <Award className="h-3 w-3" /> Gold Volunteer
            </Badge>
          </div>
        </div>
      }
      banner={
        <Card className="border-border/50">
          <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10 text-success">
                <Stethoscope className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">Urgent: Medical Camp this Sunday</p>
                <p className="text-xs text-muted-foreground">Seva Foundation needs 3 more volunteers.</p>
              </div>
            </div>
            <Badge variant="destructive">3 spots left</Badge>
          </CardContent>
        </Card>
      }
    />
  );
}
