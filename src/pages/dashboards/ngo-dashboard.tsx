import {
  Stethoscope,
  Droplet,
  Users,
  CheckCircle2,
  Calendar,
  Plus,
  HandHeart,
} from 'lucide-react';
import { RoleDashboardShell, type RoleStat, type RoleActivity, type RoleAction } from '@/components/role-dashboard-shell';
import { useAuth } from '@/hooks/use-auth';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const stats: RoleStat[] = [
  { label: 'Active Camps', value: '5', change: '+1', trend: 'up', icon: Stethoscope, color: 'bg-primary/10 text-primary' },
  { label: 'Blood Drives', value: '3', icon: Droplet, color: 'bg-destructive/10 text-destructive' },
  { label: 'Registered Volunteers', value: '142', change: '+12', trend: 'up', icon: Users, color: 'bg-success/10 text-success' },
  { label: 'Completed Events', value: '28', change: '+4', trend: 'up', icon: CheckCircle2, color: 'bg-warning/10 text-warning' },
];

const activities: RoleActivity[] = [
  { user: 'Priya M.', action: 'volunteered for "Sunday Medical Camp"', time: '1h ago', initials: 'PM' },
  { user: 'Rahul K.', action: 'registered for "Blood Donation Drive"', time: '3h ago', initials: 'RK' },
  { user: 'You', action: 'published a new event "Health Check-up Camp"', time: '5h ago', initials: 'SF' },
  { user: 'Admin', action: 'approved your camp request for Ward 12', time: '1d ago', initials: 'AD' },
  { user: 'Anita S.', action: 'completed volunteer hours at Camp 7', time: '2d ago', initials: 'AS' },
];

const actions: RoleAction[] = [
  { label: 'Organize Camp', icon: Plus, primary: true },
  { label: 'Manage Volunteers', icon: HandHeart },
  { label: 'Schedule', icon: Calendar },
];

export default function NgoDashboard() {
  const { user } = useAuth();
  const orgName = user?.name ?? 'Your NGO';

  return (
    <RoleDashboardShell
      greeting={`Welcome, ${orgName}`}
      subtitle="Coordinate camps, blood drives, and volunteers across your service areas."
      stats={stats}
      activities={activities}
      actions={actions}
      sideTitle="Volunteer Coverage"
      sideDescription="Volunteer slots filled for upcoming events"
      sideProgress={{ label: 'Coverage', value: 82, display: '82%' }}
      sideExtra={
        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="rounded-lg bg-success/10 p-3">
            <p className="text-lg font-bold text-success">142</p>
            <p className="text-xs text-muted-foreground">Filled</p>
          </div>
          <div className="rounded-lg bg-muted p-3">
            <p className="text-lg font-bold">173</p>
            <p className="text-xs text-muted-foreground">Total Slots</p>
          </div>
        </div>
      }
      banner={
        <Card className="border-border/50">
          <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <Droplet className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">Urgent: O- blood needed at City Hospital</p>
                <p className="text-xs text-muted-foreground">Broadcast to 48 nearby donors with matching blood group.</p>
              </div>
            </div>
            <Badge variant="destructive">Broadcast now</Badge>
          </CardContent>
        </Card>
      }
    />
  );
}
