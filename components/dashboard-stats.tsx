'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, CheckCircle, Clock } from 'lucide-react';

interface StatsData {
  totalTasks: number;
  completedTasks: number;
  connections: number;
  earnings: number;
}

interface DashboardStatsProps {
  stats: StatsData;
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  const statItems = [
    {
      title: 'Tasks Posted',
      value: stats.totalTasks,
      icon: Clock,
      color: 'text-blue-500',
    },
    {
      title: 'Completed',
      value: stats.completedTasks,
      icon: CheckCircle,
      color: 'text-green-500',
    },
    {
      title: 'Connections',
      value: stats.connections,
      icon: Users,
      color: 'text-purple-500',
    },
    {
      title: 'Earnings',
      value: `$${stats.earnings}`,
      icon: TrendingUp,
      color: 'text-accent',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-md">
      {statItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <Card key={index} className="gradient-card border-white/10">
            <CardContent className="p-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-caption text-muted-foreground">{item.title}</p>
                  <p className="text-2xl font-bold text-foreground">
                    {item.value}
                  </p>
                </div>
                <Icon className={`h-6 w-6 ${item.color}`} />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
