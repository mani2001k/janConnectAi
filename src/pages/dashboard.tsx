import { motion } from 'framer-motion';
import {
  FileText,
  HandHeart,
  Droplet,
  Users,
  ArrowUpRight,
  Activity,
  MapPin,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const stats = [
  { label: 'Open Reports', value: '128', change: '+12%', trend: 'up', icon: FileText, color: 'text-primary' },
  { label: 'Active Volunteers', value: '342', change: '+8%', trend: 'up', icon: HandHeart, color: 'text-success' },
  { label: 'Blood Requests', value: '7', change: 'Urgent', trend: 'alert', icon: Droplet, color: 'text-destructive' },
  { label: 'Resolved This Month', value: '89', change: '+24%', trend: 'up', icon: CheckCircle2, color: 'text-warning' },
];

const activities = [
  { user: 'Priya M.', action: 'reported a pothole on MG Road', time: '5m ago', initials: 'PM' },
  { user: 'Rahul K.', action: 'volunteered for Sunday Medical Camp', time: '23m ago', initials: 'RK' },
  { user: 'NGO Seva', action: 'completed a blood donation drive', time: '1h ago', initials: 'NS' },
  { user: 'Anita S.', action: 'upvoted a streetlight issue', time: '2h ago', initials: 'AS' },
  { user: 'Admin', action: 'assigned 3 reports to volunteers', time: '3h ago', initials: 'AD' },
];

export default function DashboardPage() {
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
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Welcome back, Aarav</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Here's what's happening in your community today.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Activity className="mr-2 h-4 w-4" /> Live Feed
          </Button>
          <Button size="sm">
            <FileText className="mr-2 h-4 w-4" /> Report Issue
          </Button>
        </div>
      </motion.div>

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
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-${stat.color.replace('text-', '')}/10 ${stat.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    {stat.trend === 'up' && (
                      <Badge variant="secondary" className="gap-1 text-success">
                        <ArrowUpRight className="h-3 w-3" /> {stat.change}
                      </Badge>
                    )}
                    {stat.trend === 'alert' && (
                      <Badge variant="destructive" className="gap-1">
                        <Clock className="h-3 w-3" /> {stat.change}
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
                <CardDescription>Latest updates from your community</CardDescription>
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
          {/* Resolution progress */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-base">Monthly Resolution</CardTitle>
              <CardDescription>Issues resolved vs reported</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-semibold">69%</span>
                </div>
                <Progress value={69} className="h-2" />
              </div>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="rounded-lg bg-success/10 p-3">
                  <p className="text-lg font-bold text-success">89</p>
                  <p className="text-xs text-muted-foreground">Resolved</p>
                </div>
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-lg font-bold">128</p>
                  <p className="text-xs text-muted-foreground">Total</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top contributors */}
          <Card className="border-border/50">
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <CardTitle className="text-base">Top Contributors</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: 'Priya Menon', count: 24, initials: 'PM' },
                { name: 'Rahul Kumar', count: 19, initials: 'RK' },
                { name: 'Anita Singh', count: 15, initials: 'AS' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-4 text-xs font-bold text-muted-foreground">{i + 1}</span>
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-accent text-[0.65rem] font-semibold text-accent-foreground">
                      {c.initials}
                    </AvatarFallback>
                  </Avatar>
                  <span className="flex-1 text-sm font-medium">{c.name}</span>
                  <Badge variant="secondary">{c.count}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Map preview */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
      >
        <Card className="overflow-hidden border-border/50">
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle>Community Map</CardTitle>
              <CardDescription>Active issues and resources near you</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <MapPin className="mr-2 h-4 w-4" /> Open full map
            </Button>
          </CardHeader>
          <CardContent>
            <div className="relative flex h-48 items-center justify-center rounded-xl border border-dashed border-border bg-gradient-to-br from-accent/30 to-muted">
              <div className="text-center">
                <MapPin className="mx-auto h-8 w-8 text-primary" />
                <p className="mt-2 text-sm font-medium">Interactive map coming soon</p>
                <p className="text-xs text-muted-foreground">Powered by Leaflet + OpenStreetMap</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
