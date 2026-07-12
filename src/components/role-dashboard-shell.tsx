import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useAuth } from '@/hooks/use-auth';
import { roleLabels } from '@/lib/demo-users';
import { cn } from '@/lib/utils';

export interface RoleStat {
  label: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'alert';
  icon: LucideIcon;
  color: string;
}

export interface RoleActivity {
  user: string;
  action: string;
  time: string;
  initials: string;
}

export interface RoleAction {
  label: string;
  icon: LucideIcon;
  primary?: boolean;
}

interface RoleDashboardShellProps {
  greeting: string;
  subtitle: string;
  stats: RoleStat[];
  activities: RoleActivity[];
  actions: RoleAction[];
  sideTitle: string;
  sideDescription: string;
  sideProgress: { label: string; value: number; display: string };
  sideExtra?: React.ReactNode;
  banner?: React.ReactNode;
}

export function RoleDashboardShell({
  greeting,
  subtitle,
  stats,
  activities,
  actions,
  sideTitle,
  sideDescription,
  sideProgress,
  sideExtra,
  banner,
}: RoleDashboardShellProps) {
  const { user } = useAuth();

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{greeting}</h1>
            <Badge variant="secondary" className="capitalize">
              {user ? roleLabels[user.role] : ''}
            </Badge>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {actions.map((a) => {
            const Icon = a.icon;
            return (
              <Button key={a.label} size="sm" variant={a.primary ? 'default' : 'outline'}>
                <Icon className="mr-2 h-4 w-4" /> {a.label}
              </Button>
            );
          })}
        </div>
      </motion.div>

      {banner}

      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Card className="group relative overflow-hidden border-border/50 transition-all hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div className={cn('flex h-11 w-11 items-center justify-center rounded-xl', stat.color)}>
                      <Icon className="h-5 w-5" />
                    </div>
                    {stat.trend === 'up' && (
                      <Badge variant="secondary" className="gap-1 text-success">
                        ↑ {stat.change}
                      </Badge>
                    )}
                    {stat.trend === 'down' && (
                      <Badge variant="secondary" className="gap-1 text-destructive">
                        ↓ {stat.change}
                      </Badge>
                    )}
                    {stat.trend === 'alert' && (
                      <Badge variant="destructive" className="gap-1">
                        {stat.change}
                      </Badge>
                    )}
                  </div>
                  <div className="mt-4">
                    <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Two-column section */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Recent activity */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="border-border/50">
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates relevant to you</CardDescription>
              </div>
              <Button variant="ghost" size="sm">View all</Button>
            </CardHeader>
            <CardContent className="space-y-1">
              {activities.map((act, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-accent/40"
                >
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-accent text-xs font-semibold text-accent-foreground">
                      {act.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-sm">
                    <span className="font-medium">{act.user}</span>{' '}
                    <span className="text-muted-foreground">{act.action}</span>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">{act.time}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Side widgets */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="space-y-4"
        >
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-base">{sideTitle}</CardTitle>
              <CardDescription>{sideDescription}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{sideProgress.label}</span>
                  <span className="font-semibold">{sideProgress.display}</span>
                </div>
                <Progress value={sideProgress.value} className="h-2" />
              </div>
              {sideExtra}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
